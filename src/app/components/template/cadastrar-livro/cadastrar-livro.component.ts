import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Funcionario } from 'src/app/model/Funcionario';
import { Livros } from 'src/app/model/Livros';
import { AuthService } from 'src/app/service/auth.service';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { LivrosService } from 'src/app/service/livros.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {

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
    private livrosService: LivrosService,
    private etiquetaService: EtiquetaService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.codf == ''){
      this.router.navigate(['/home'])
    }

    console.log(environment.token)
    console.log(environment.id_funcionario)


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

  cadastrar(){

    this.etiqueta.id_etiqueta = this.idEtiqueta
    this.livro.etiqueta = this.etiqueta

    this.funcionario.id_funcionario = this.idFuncionario
    this.livro.funcionario = this.funcionario

    this.livrosService.cadastrar(this.livro).subscribe((resp: Livros) =>{
      this.livro = resp
      this.router.navigate(['/funcionario'])
      Swal.fire('Livro cadastrado com sucesso')
      this.livro = new Livros()
      this.getAllLivros()
    })
  }
}
