import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/Cliente';
import { ClienteLogin } from '../model/ClienteLogin';
import { Funcionario } from '../model/Funcionario';
import { FuncionarioLogin } from '../model/FuncionarioLogin';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(
    private http:HttpClient
  ) { }

  entrarfunc(funcionarioLogin: FuncionarioLogin): Observable<FuncionarioLogin> {
    return this.http.post<FuncionarioLogin>('http://localhost:8080/funcionario/logar_funcionario', funcionarioLogin)

  }

  cadastrarfuncionario(funcionario:Funcionario):Observable<Funcionario> {

    return this.http.post<Funcionario>('http://localhost:8080/funcionario/cadastrar_funcionario', funcionario)

  }

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
