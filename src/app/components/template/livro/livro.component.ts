import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from 'src/app/model/Livros';
import { LivrosService } from 'src/app/service/livros.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {


  livro: Livros

  constructor(
    private route: ActivatedRoute,
    private livrosService: LivrosService
    ) { }

  ngOnInit(){
    let id_livros = this.route.snapshot.params['id_livros']
    this.findByIdLivro(id_livros)
    console.log(this.findByIdLivro(id_livros))
  }

  findByIdLivro(id_livros: number){
    this.livrosService.getByIdLivros(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
    })
  }



}
