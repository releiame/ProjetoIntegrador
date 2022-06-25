import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Livros } from 'src/app/model/Livros';
import { LivrosService } from 'src/app/service/livros.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-busca-livro',
  templateUrl: './busca-livro.component.html',
  styleUrls: ['./busca-livro.component.css']
})
export class BuscaLivroComponent implements OnInit {

  tituloProcurado: string
  listaLivros: Livros[]
  tituloLivro: string

  constructor(
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private router: Router
  ) { }

  ngOnInit() {
    let titulo = this.route.snapshot.params['titulo']
    this.findByTituloLivro(titulo)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let titulo = event.url
        titulo = titulo.split('/')[2]
        this.findByTituloLivro(titulo)
      }
   })
  }

  findByTituloLivro(titulo: string){
    this.livrosService.getByTitulo(titulo).subscribe((resp: Livros[])=>{
      this.listaLivros = resp
    })
    this.tituloProcurado = titulo
  }



}
