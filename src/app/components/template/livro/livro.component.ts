import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livros } from 'src/app/model/Livros';
import { AuthService } from 'src/app/service/auth.service';
import { LivrosService } from 'src/app/service/livros.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  carrinho = environment.carrinho
  livro: Livros

  constructor(
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    public authService: AuthService
    ) { }

  ngOnInit(){
    let id_livros = this.route.snapshot.params['id_livros']
    this.findByIdLivro(id_livros)
    
    console.log("ID DO LIVRO NA BUSCA: " + id_livros)
    console.log("Metodo: " + this.findByIdLivro(id_livros))
    console.log("TAMANHO DO CARRINHO ATUALMENTE: " + this.carrinho)
    console.log("TAMANHO DO ENVIRONMENT CARRINHO: " + environment.carrinho)
  }

  findByIdLivro(id_livros: number){
    this.livrosService.getLivrosById(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
    })
  }

  adicionarCarrinho(id_livros: number){
    this.carrinho.push(id_livros)
    Swal.fire('Produto adicionado ao carrinho!')
    console.log("TAMANHO DO CARRINHO DEPOIS DE ADICIONAR UM LIVRO NELE: " + this.carrinho.length)
    console.log("TAMANHO DO ENVIRONMENT CARRINHO DEPOIS DE ADICIONAR UM CARRINHO NELE: " + environment.carrinho.length)
  }
}
