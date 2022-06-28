import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livros } from 'src/app/model/Livros';
import { Pedido } from 'src/app/model/Pedido';
import { AuthService } from 'src/app/service/auth.service';
import { LivrosService } from 'src/app/service/livros.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {

  nome = environment.nome
  id_cliente = environment.id_cliente

  listaPedidos: Pedido[]
  listaLivros: Livros[]

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private livrosService: LivrosService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.getAllPedidos()
    console.log(this.listaPedidos)
  }

  getAllPedidos(){
    this.pedidoService.getAllPedidos().subscribe((resp: Pedido[]) =>{
      this.listaPedidos = resp
      this.getAllLivros()
    })
  }

  getAllLivros(){
    this.livrosService.getAllLivros().subscribe((resp: Livros[]) =>{
      this.listaLivros = resp
    })
  }




}
