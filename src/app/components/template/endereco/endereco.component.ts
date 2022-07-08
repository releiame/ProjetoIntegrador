import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Endereco } from 'src/app/model/Endereco';
import { AuthService } from 'src/app/service/auth.service';
import { EnderecoService } from 'src/app/service/endereco.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

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
    this.getAllEndereco()
    this.findClienteById(this.idCliente)
  }

  findClienteById(id_cliente: number){
    this.authService.getClienteById(id_cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
    })
  }

  getAllEndereco(){
    this.enderecoService.getAllEndereco().subscribe((resp: Endereco[]) =>{
      this.listaEndereco = resp
    })
  }

  adicionar(){

    this.endereco.cliente = this.cliente

    this.enderecoService.adicionar(this.endereco).subscribe((resp: Endereco) =>{
      this.endereco = resp
      this.router.navigate(['/home'])
      Swal.fire('Endereço cadastrado!')
      this.getAllEndereco()
    })
  }

  apagar(id_endereco: number){
    this.enderecoService.delete(id_endereco).subscribe(() =>{
      Swal.fire('Endereço apagado!')
      this.getAllEndereco()
    })
  }
}
