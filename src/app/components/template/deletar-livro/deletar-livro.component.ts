import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/model/Funcionario';
import { Livros } from 'src/app/model/Livros';
import { AuthService } from 'src/app/service/auth.service';
import { LivrosService } from 'src/app/service/livros.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deletar-livro',
  templateUrl: './deletar-livro.component.html',
  styleUrls: ['./deletar-livro.component.css']
})
export class DeletarLivroComponent implements OnInit {
  
  livro: Livros = new Livros
  idLivro: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private livrosService: LivrosService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == '' || environment.codf == ''){
      this.router.navigate(['/home'])
    }
    
    this.idLivro = this.route.snapshot.params['id_livros']
    this.findByIdLivros(this.idLivro)

  }

  findByIdLivros(id_livros: number){
    this.livrosService.getLivrosById(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
    })
  }

  apagar(){
    this.livrosService.deleteLivros(this.idLivro).subscribe(() =>{
      Swal.fire('Livro apagado!')
      this.router.navigate(['/cadastrar-livro'])
    })
  }

}
