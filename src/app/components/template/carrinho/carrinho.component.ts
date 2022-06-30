import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Livros } from 'src/app/model/Livros';
import { Pedido } from 'src/app/model/Pedido';
import { AuthService } from 'src/app/service/auth.service';
import { LivrosService } from 'src/app/service/livros.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho = environment.carrinho
  livro: Livros = new Livros()
  listaLivros:  Array<Livros> = []
  
  soma = 0

  pedido: Pedido = new Pedido()

  cliente: Cliente = new Cliente()


  constructor(
    private livrosService: LivrosService,
    private router: Router,
    private pedidoService: PedidoService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log("TAMANHO DO ENVIRONMENT CARRINHO: " + environment.carrinho)
    console.log("TAMANHO DO LISTALIVROS: " + this.listaLivros.length)
    console.log("TAMANHO DO CARRINHO NO PEDIDO: " + this.carrinho)

    this.carrinhoAtt()
    this.findClienteById(environment.id_cliente)
  }

  findLivrosById(id_livros: number){
    this.livrosService.getLivrosById(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
      this.soma += this.livro.valorUnitario
      this.listaLivros.push(this.livro)
    })
    environment.soma = this.soma
  }

  carrinhoAtt(){
    for(let item in this.carrinho){
      if(this.carrinho[item]>0){
        let id = this.carrinho[item]
        this.findLivrosById(id)
      }
    }
  }

  findClienteById(id_cliente: number){
    this.authService.getClienteById(id_cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
    })
  }

  criarPedido(){

    this.pedido.cliente = this.cliente

    this.pedido.livros = this.listaLivros

    if(this.listaLivros.length == 0 && environment.token == ''){
      Swal.fire({
        icon: 'error',
        text: 'Seu carrinho está vazio'})
    }else if(environment.token == ''){
      Swal.fire({
        icon: 'error',
        title: 'Você deve logar como cliente para poder finalizar o pedido'})
    }else if(this.listaLivros.length > 0){
      this.pedidoService.post(this.pedido).subscribe((resp: Pedido) =>{
        this.pedido = resp
        Swal.fire('Pedido feito!')
        this.listaLivros = []
        environment.carrinho = [0]
        this.router.navigate(['/home'])
      }
      )
    }
  }

  removerLivro(livro: Livros){
    const index = this.listaLivros.indexOf(livro)
    this.listaLivros.splice(index, 1)
    this.carrinho.splice(index, 1)
    console.log("Livro removido: " + index)
    Swal.fire('Livro removido')
  }

  entrega(){
    if(environment.token == ''){
      Swal.fire('Você deve logar como cliente para poder finalizar o pedido')
      this.router.navigate(['/home'])
    }else if(this.listaLivros.length == 0){
      Swal.fire('Seu carrinho está vazio')
      this.router.navigate(['/home'])
    }else{
      this.router.navigate(['/cad-endereco'])
    }
  }
}
