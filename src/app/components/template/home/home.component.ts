import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Livros } from 'src/app/model/Livros';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { LivrosService } from 'src/app/service/livros.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaLivros: Livros[]
  listaTags: Etiqueta[]  
  etiquetaNum: number

  constructor(
    private livrosService: LivrosService,
    private etiquetaService: EtiquetaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllLivros()
    this.getAllEtiquetas()
    window.scroll(0,0)
  }

  getAllLivros(){
    this.livrosService.getAllLivros().subscribe((resp: Livros[]) =>{
      this.listaLivros = resp
    })
  }

  getAllEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe((resp: Etiqueta[]) =>{
      this.listaTags = resp
    })
  }
}
