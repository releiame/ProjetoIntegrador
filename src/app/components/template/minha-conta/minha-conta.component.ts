import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Endereco } from 'src/app/model/Endereco';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  cliente: Cliente = new Cliente
  idCliente: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService,

  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }
    this.idCliente = this.route.snapshot.params['id_cliente']
    this.findClienteById()
    
  }

  findClienteById(){
    this.authService.getClienteById(environment.id_cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
      this.cliente.senha = ''
    })
  }

  atualizar(){
    this.cliente.id_cliente = environment.id_cliente
    this.authService.putCliente(this.cliente).subscribe((resp: Cliente)=>{
      this.cliente = resp
      Swal.fire('Cadastro atualizado com sucesso')
      this.router.navigate(['/home'])
    })
    
  }

}
