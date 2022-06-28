import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livros } from 'src/app/model/Livros';
import { Pedido } from 'src/app/model/Pedido';
import { LivrosService } from 'src/app/service/livros.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho = environment.carrinho

  livro: Livros = new Livros

  listaLivros: Array<Livros> = []

  teste = environment.carrinho[1]

  soma = 0

  constructor(
    private livrosService: LivrosService,
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/home'])
    }
    this.carrinhoAtt()
    console.log("CARRINHO DO ENVIRONMENT (somente pegando o ID do Livro): " + environment.carrinho)
    console.log("CARRINHO DO COMPONENT: " + this.carrinho)
    console.log("CARRINHO APÓS USAR O GETBYID: " + this.listaLivros)
    console.log(this.teste)
  }

  findLivrosById(id_livros: number){
    this.livrosService.getLivrosById(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
      this.soma += this.livro.valorUnitario
      console.log("LIVRO ENCONTRADO: " + this.livro.titulo)
      this.listaLivros.push(this.livro)
    })
  }

  carrinhoAtt(){
    for(let item of environment.carrinho){
      if(this.carrinho[item]>0){
        let id = this.carrinho[item]
        this.findLivrosById(id)
        console.log("LIVRO ENCONTRADO carrinhoAtt(): " + this.livro.titulo)
      }
    }
  }

  finalizarCompra(){
    if(environment.token == ''){
      alert('Faça o login para terminar a compra')
      this.router.navigate(['/home'])
    }else if(this.listaLivros.length>0){
      alert('Compra finalizada')
      this.listaLivros = []
      environment.carrinho = [0]
      this.router.navigate(['/home'])
    }else{
      alert('Carrinho vazio')
    }
  }

  valorTotal() {
    //Valor Unitario + Quantidade == valorTotal
  }
}
