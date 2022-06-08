import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { ClienteLogin } from '../model/ClienteLogin';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  entrar(clienteLogin:ClienteLogin): Observable<ClienteLogin> {

    return this.http.post<ClienteLogin>('http://localhost:8080/cliente/logar', clienteLogin)

  }

  cadastrar(cliente:Cliente):Observable<Cliente> {

    return this.http.post<Cliente>('http://localhost:8080/cliente/cadastrar', cliente)

  }
}
