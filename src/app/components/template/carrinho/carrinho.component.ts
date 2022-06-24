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

  livros: Livros = new Livros()

  listaLivros: Livros[]

  soma = 0

  constructor(
    private livrosService: LivrosService,
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.findAllLivros()
  }

  findAllLivros(){
    this.livrosService.getAllLivros().subscribe((resp: Livros[]) =>{
      this.listaLivros = resp
    })
  }

  delete() {
    //delete funcion here
  }

  valorTotal() {
    //Valor Unitario + Quantidade == valorTotal
  }
}
