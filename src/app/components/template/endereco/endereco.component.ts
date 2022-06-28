import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Endereco } from 'src/app/model/Endereco';
import { AuthService } from 'src/app/service/auth.service';
import { EnderecoService } from 'src/app/service/endereco.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  endereco: Endereco = new Endereco
  idCliente: number
  cliente: Cliente = new Cliente

  listaEndereco: Endereco[]

  constructor(
    private router: Router,
    private authService: AuthService,
    private enderecoService: EnderecoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idCliente = this.route.snapshot.params['id_cliente']
    console.log(this.idCliente)
    console.log(environment.id_cliente)
    this.findByIdCliente()
  }

  findByIdCliente(){
    this.authService.getClienteById(this.idCliente).subscribe((resp: Cliente) =>{
      this.cliente = resp
    })
  }

  getAllEndereco(){
    this.enderecoService.getAllLivros().subscribe((resp: Endereco[]) =>{
      this.listaEndereco = resp
    })
  }

  adicionar(){
    this.cliente.id_cliente = this.idCliente
    this.endereco.cliente = this.cliente

    this.enderecoService.adicionar(this.endereco).subscribe((resp: Endereco) =>{
      this.endereco = resp
      this.router.navigate(['/minha-conta'])
      alert('Endereço cadastrado com sucesso')
    })
  }

}
