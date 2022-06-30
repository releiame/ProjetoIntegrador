import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  idCliente: number

  carrinho = environment.carrinho
  livro: Livros = new Livros()
  listaLivros:  Array<Livros> = []

  pagamento: String
  divisao: String
  str: String
  
  soma = 0

  pedido: Pedido = new Pedido()

  cliente: Cliente = new Cliente()

  endereco: Endereco = new Endereco()

  constructor(
    private pedidoService: PedidoService,
    private enderecoService: EnderecoService,
    private router: Router,
    private authService: AuthService,
    private livrosService: LivrosService,
  ) { }

  ngOnInit(){
    this.carrinhoAtt()
    this.findPedidoById(environment.id_pedido)
    this.findEnderecoById(environment.id_endereco)
    this.idCliente = environment.id_cliente
    this.findClienteById(environment.id_cliente)
  }

  findPedidoById(id_pedido: number){
    this.pedidoService.getPedidoById(id_pedido).subscribe((resp: Pedido) => {
      this.pedido = resp
    })
  }

  findClienteById(id_cliente: number){
    this.authService.getClienteById(id_cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
    })
  }

  findLivrosById(id_livros: number){
    this.livrosService.getLivrosById(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
      this.soma += this.livro.valorUnitario
      this.listaLivros.push(this.livro)
    })
  }

  findEnderecoById(id_endereco: number){
    this.enderecoService.getEnderecoById(id_endereco).subscribe((resp: Endereco) => {
      this.endereco = resp
    })
  }

  tipoPagamento(event: any){
    this.pagamento = event.target.value
  }

  dividido(event: any){
    this.divisao = event.target.value
  }

  carrinhoAtt(){
    for(let item in this.carrinho){
      if(this.carrinho[item]>0){
        let id = this.carrinho[item]
        this.findLivrosById(id)
      }
    }
  }

  criarPedido(){

    this.pedido.cliente = this.cliente

    if(this.divisao != undefined){
      this.str = `${this.pagamento} ${this.divisao}`
    }else{
      this.str = this.pagamento
    }

    this.pedido.tipo = this.str

    console.log(this.str)

    this.pedido.livros = this.listaLivros


    if(this.listaLivros.length == 0){
      Swal.fire('Seu carrinho está vazio')
    }else if(environment.token == ''){
      Swal.fire('Você deve logar como cliente para poder finalizar o pedido')
    }else if(this.listaLivros.length > 0){
      this.pedidoService.post(this.pedido).subscribe((resp: Pedido) =>{
        this.pedido = resp
        Swal.fire({
          icon: 'success',
          title: 'Obrigado pela preferencia, seu pedido acaba de ser concluido',
          text: 'N° do pedido: ' + this.pedido.id_pedido})
        this.listaLivros = []
        environment.carrinho = [0]
        this.router.navigate(['/home'])
      }
      )
    }
  }

}
