import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Livros } from 'src/app/model/Livros';
import { Pedido } from 'src/app/model/Pedido';
import { AuthService } from 'src/app/service/auth.service';
import { LivrosService } from 'src/app/service/livros.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  carrinho = environment.carrinho

  pedido: Pedido = new Pedido
  cliente: Cliente = new Cliente
  livro: Livros = new Livros

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livrosService: LivrosService,
    private authService: AuthService
    ) { }

  ngOnInit(){
    let id_livros = this.route.snapshot.params['id_livros']
    this.findByIdLivro(id_livros)
    
  }

  findByIdLivro(id_livros: number){
    this.livrosService.getLivrosById(id_livros).subscribe((resp: Livros) =>{
      this.livro = resp
    })
  }

  adicionarCarrinho(id_livros: number){
    this.carrinho.push(id_livros)
    alert('Livro adicionado ao carrinho')
    console.log(this.carrinho.length)
    console.log(environment.carrinho.length)
  }
}
