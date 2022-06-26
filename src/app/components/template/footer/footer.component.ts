import { Component, Input, OnInit } from '@angular/core';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() isHeader: boolean;
  valorArrecadado: number
  listaTags: Etiqueta[]
  
  constructor(
    private etiquetaService: EtiquetaService
    ) { }

  ngOnInit() {
    this.getAllEtiquetas()
  }

  getAllEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe((resp: Etiqueta[]) =>{
      this.listaTags = resp
    })
  }

  ngAfterContentChecked() {
    this.valorArrecadado = environment.valorArrecadado
  }

}
