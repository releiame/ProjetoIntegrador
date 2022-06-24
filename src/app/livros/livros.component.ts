import { Component, OnInit } from '@angular/core';
import { Livros } from '../model/Livros';
import { LivrosService } from '../service/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  listaLivros: Livros[]

  constructor(
    private livrosService: LivrosService
  ) { }

  ngOnInit() {
    this.getAllLivros()
    window.scroll(0,0)
  }

  getAllLivros(){
    this.livrosService.getAllLivros().subscribe((resp: Livros[]) =>{
      this.listaLivros = resp
    })
  }

}
