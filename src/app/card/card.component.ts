import { Component, OnInit } from '@angular/core';
import { Livros } from '../model/Livros';
import { LivrosService } from '../service/livros.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
