import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Funcionario } from 'src/app/model/Funcionario';
import { Livros } from 'src/app/model/Livros';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { LivrosService } from 'src/app/service/livros.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  funcionario: Funcionario = new Funcionario
  idFuncionario: number

  livro: Livros = new Livros

  etiqueta: Etiqueta = new Etiqueta
  listaEtiquetas: Etiqueta[]
  idEtiqueta: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private etiquetaService: EtiquetaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == '' || environment.codf == ''){
      this.router.navigate(['/home'])
    }

    let id = this.route.snapshot.params['id_livros']

    this.idFuncionario = environment.id_funcionario

    this.findByIdLivros(id)
    this.getAllEtiquetas()

  }

  findByIdLivros(id_livros: number){
    this.livrosService.getLivrosById(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
    })
  }

  findByIdEtiqueta(){
    this.etiquetaService.getByIdEtiqueta(this.idEtiqueta).subscribe((resp: Etiqueta) =>{
      this.etiqueta = resp
    })
  }

  getAllEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe((resp: Etiqueta[]) =>{
      this.listaEtiquetas = resp
    })
  }

  atualizar(){
    this.etiqueta.id_etiqueta = this.idEtiqueta
    this.livro.etiqueta = this.etiqueta

    this.funcionario.id_funcionario = this.idFuncionario
    this.livro.funcionario = this.funcionario

    this.livrosService.put(this.livro).subscribe((resp: Livros)=>{
      this.livro = resp
      Swal.fire('Livro atualizado com sucesso')
      this.router.navigate(['/funcionario'])
    })
  }

}
