import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/model/Endereco';
import { Pedido } from 'src/app/model/Pedido';
import { EnderecoService } from 'src/app/service/endereco.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  pedido: Pedido = new Pedido()

  endereco: Endereco = new Endereco()

  constructor(
    private pedidoService: PedidoService,
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  ngOnInit(){
    this.findPedidoById(environment.id_pedido)
    this.findEnderecoById(environment.id_endereco)
  }

  findPedidoById(id_pedido: number){
    this.pedidoService.getPedidoById(id_pedido).subscribe((resp: Pedido) => {
      this.pedido = resp
    })
  }

  findEnderecoById(id_endereco: number){
    this.enderecoService.getEnderecoById(id_endereco).subscribe((resp: Endereco) => {
      this.endereco = resp
    })
  }

}
