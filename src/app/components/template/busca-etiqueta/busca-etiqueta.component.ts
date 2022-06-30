import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Livros } from 'src/app/model/Livros';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { LivrosService } from 'src/app/service/livros.service';

@Component({
  selector: 'app-busca-etiqueta',
  templateUrl: './busca-etiqueta.component.html',
  styleUrls: ['./busca-etiqueta.component.css']
})
export class BuscaEtiquetaComponent implements OnInit {

  listaLivros: Livros[]

  etiqueta: Etiqueta

  constructor(
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private etiquetaService: EtiquetaService,
    private router: Router
  ) { }

  ngOnInit() {
    let id_etiqueta = this.route.snapshot.params['id_etiqueta']
    this.findByIdEtiqueta(id_etiqueta)
    console.log(this.findByIdEtiqueta(id_etiqueta))
    this.getAllLivros()
  }

  pegarId(){}

  findByIdEtiqueta(id_etiqueta: number){
    this.etiquetaService.getByIdEtiqueta(id_etiqueta).subscribe((resp: Etiqueta) =>{
      this.etiqueta = resp
    })
  }

  getAllLivros(){
    this.livrosService.getAllLivros().subscribe((resp: Livros[]) =>{
      this.listaLivros = resp
    })
  }

}
