import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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

  logado(){
    let ok: boolean = false //ou apenas 'let ok: false', ou apenas 'ok: false'

    if(environment.token != ''){
      ok: true
    } 
    return ok
  }

  deslogado(){
    let deslog: boolean = false //ou apenas 'let ok: false', ou apenas 'ok: false'

    if(environment.token == ''){
      deslog: true
    } 
    return deslog
  }
}
