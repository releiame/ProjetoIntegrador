import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Funcionario } from 'src/app/model/Funcionario';
import { Livros } from 'src/app/model/Livros';
import { AuthService } from 'src/app/service/auth.service';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { LivrosService } from 'src/app/service/livros.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  idLivro: number
  listaLivros: Livros[]
  livro: Livros = new Livros()
  tituloLivro: string

  listaEtiquetas: Etiqueta[]
  nomeEtiqueta: string
  etiqueta: Etiqueta = new Etiqueta()
  idEtiqueta: number

  funcionario: Funcionario = new Funcionario()
  idFuncionario = environment.id_funcionario
  nomeFuncionario: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private etiquetaService: EtiquetaService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.codf == ''){
      this.router.navigate(['/home'])
    }

    let id = this.route.snapshot.params['id_funcionario']

    this.findByFuncionarioId(id)
    this.getAllLivros()
    this.getAllEtiquetas()
    
  }

  ngAfterContentChecked() {
    this.nomeFuncionario = environment.nome
  }

  getAllLivros(){
    this.livrosService.getAllLivros().subscribe((resp: Livros[]) =>{
      this.listaLivros = resp
    })
  }

  findByIdLivros(id_livros: number){
    this.livrosService.getLivrosById(this.idLivro).subscribe((resp: Livros) =>{
      this.livro = resp
    })
  }

  findByTituloLivro(){
    if(this.tituloLivro == ''){
      this.getAllLivros()
    }else{
      this.livrosService.getByTitulo(this.tituloLivro).subscribe((resp: Livros[]) =>{
        this.listaLivros = resp
      })
    }
  }

  getAllEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe((resp: Etiqueta[]) =>{
      this.listaEtiquetas = resp
    })
  }

  findByIdEtiqueta(){
    this.etiquetaService.getByIdEtiqueta(this.idEtiqueta).subscribe((resp: Etiqueta) =>{
      this.etiqueta = resp
    })
  }

  findByNomeEtiqueta(){
    if(this.nomeEtiqueta == ''){
      this.getAllEtiquetas()
    }else{
      this.etiquetaService.getByNome(this.nomeEtiqueta).subscribe((resp: Etiqueta[]) =>{
        this.listaEtiquetas = resp
      })
    }
  }

  findByFuncionarioId(id: number){
    this.authService.getByIdFuncionario(id).subscribe((resp: Funcionario) =>{
      this.funcionario = resp
    })
  }

  cadastrarTag(){
    this.etiquetaService.cadastrar(this.etiqueta).subscribe((resp: Etiqueta) => {
      this.etiqueta = resp
      this.router.navigate(['/funcionario'])
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Livro cadastrado com sucesso!',
        showConfirmButton: true
      })
      this.etiqueta = new Etiqueta()
      this.getAllEtiquetas()
    })
  }
}
