import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient
    ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  }

  getAllPedidos():Observable<Pedido[]> {
    return this.http.get<Pedido[]>('https://releiame.herokuapp.com/pedidos')
  }

  post(pedido: Pedido):Observable<Pedido>{
    return this.http.post<Pedido>('https://releiame.herokuapp.com/pedidos', pedido)
  }

  getPedidoById(id_pedido: number):Observable<Pedido>{
    return this.http.get<Pedido>(`https://releiame.herokuapp.com/pedidos/${id_pedido}`, this.token)
  }
}
