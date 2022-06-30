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

  endereco: Endereco = new Endereco
  idCliente: number

  carrinho = environment.carrinho
  livro: Livros = new Livros()
  listaLivros:  Array<Livros> = []

  pagamento: String
  
  soma = 0

  pedido: Pedido = new Pedido()

  cliente: Cliente = new Cliente()

  listaEndereco: Endereco[]

  constructor(
    private router: Router,
    private authService: AuthService,
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private pedidoService: PedidoService
  ) { }

  ngOnInit(){

    this.idCliente = environment.id_cliente
    this.getAllEndereco()
    this.carrinhoAtt()
    this.findClienteById(environment.id_cliente)

  }

  getAllEndereco(){
    this.enderecoService.getAllEndereco().subscribe((resp: Endereco[]) =>{
      this.listaEndereco = resp
    })
  }

  findLivrosById(id_livros: number){
    this.livrosService.getLivrosById(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
      this.soma += this.livro.valorUnitario
      this.listaLivros.push(this.livro)
    })
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

  tipoPagamento(event: any){
    this.pagamento = event.target.value
  }

  dividido(event: any){
    environment.divisao = event.target.value
  }

  escolherEndereco(event: any){
    environment.id_endereco = event.target.value
  }

  criarPedido(){

    this.pedido.cliente = this.cliente

    this.pedido.tipo = this.pagamento

    this.pedido.livros = this.listaLivros


    if(this.listaLivros.length == 0){
      Swal.fire('Seu carrinho está vazio')
    }else if(environment.token == ''){
      Swal.fire('Você deve logar como cliente para poder finalizar o pedido')
    }else if(this.listaLivros.length > 0){
      this.pedidoService.post(this.pedido).subscribe((resp: Pedido) =>{
        this.pedido = resp
        Swal.fire('Pedido feito!')
        this.listaLivros = []
        environment.carrinho = [0]
        this.router.navigate(['/pagamento'])
        environment.id_pedido = this.pedido.id_pedido
      }
      )
    }
  }
  
  adicionar(){
    this.cliente.id_cliente = this.idCliente
    this.endereco.cliente = this.cliente

    this.enderecoService.adicionar(this.endereco).subscribe((resp: Endereco) =>{
      this.endereco = resp
      this.router.navigate(['/minha-conta'])
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
