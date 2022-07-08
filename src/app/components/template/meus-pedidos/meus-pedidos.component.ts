import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
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
  idCliente = environment.id_cliente

  cliente: Cliente = new Cliente

  listaPedidos: Pedido[]
  listaLivros: Livros[]

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private livrosService: LivrosService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getClienteById(this.idCliente)
    this.getAllPedidos()
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

  getClienteById(id_cliente: number){
    this.authService.getClienteById(id_cliente).subscribe((resp: Cliente) =>{
      this.cliente = resp
    })
  }
}
