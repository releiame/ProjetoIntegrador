import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Endereco } from 'src/app/model/Endereco';
import { Livros } from 'src/app/model/Livros';
import { Pedido } from 'src/app/model/Pedido';
import { AuthService } from 'src/app/service/auth.service';
import { EnderecoService } from 'src/app/service/endereco.service';
import { LivrosService } from 'src/app/service/livros.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cad-endereco',
  templateUrl: './cad-endereco.component.html',
  styleUrls: ['./cad-endereco.component.css']
})
export class CadEnderecoComponent implements OnInit {

  endereco: Endereco = new Endereco()
  
  idCliente: number
  cliente: Cliente = new Cliente()

  listaEndereco: Endereco[]

  constructor(
    private router: Router,
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(){

    this.idCliente = environment.id_cliente
    this.getAllEndereco()
    
    this.findClienteById(environment.id_cliente)

  }

  getAllEndereco(){
    this.enderecoService.getAllEndereco().subscribe((resp: Endereco[]) =>{
      this.listaEndereco = resp
    })
  }

  findClienteById(id_cliente: number){
    this.authService.getClienteById(id_cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
    })
  }
  
  escolherEndereco(event: any){
    environment.id_endereco = event.target.value
    console.log(environment.id_endereco)
  }
  
  adicionar(){
    this.cliente.id_cliente = this.idCliente
    this.endereco.cliente = this.cliente

    this.enderecoService.adicionar(this.endereco).subscribe((resp: Endereco) =>{
      this.endereco = resp
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

  pagamento(){
    if(environment.id_endereco == 0 && environment.token != ''){
      Swal.fire({
        icon: 'error',
        text: 'Você deve adicionar um endereço de entrega'
      })
    }else if(environment.id_endereco == 0 && environment.token == ''){
      this.router.navigate(['/home'])
    }else{
      this.router.navigate(['/pagamento'])
    }
  }
}
