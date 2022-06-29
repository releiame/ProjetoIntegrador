import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  }

  entrar(clienteLogin:ClienteLogin): Observable<ClienteLogin> {
    return this.http.post<ClienteLogin>('http://localhost:8080/cliente/logar', clienteLogin)
  }

  putCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>('http://localhost:8080/cliente/atualizar', cliente)
  }

  getClienteById(id_cliente: number){
    return this.http.get<Cliente>(`http://localhost:8080/cliente/${id_cliente}`)
  }

  cadastrar(cliente:Cliente):Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/cliente/cadastrar', cliente)

  }

  cadastrarfuncionario(funcionario: Funcionario):Observable<Funcionario>{
    return this.http.post<Funcionario>('http://localhost:8080/funcionario/cadastrar_funcionario', funcionario)
  }

  entrarfunc(funcionarioLogin: FuncionarioLogin): Observable<FuncionarioLogin> {
    return this.http.post<FuncionarioLogin>('http://localhost:8080/funcionario/logar_funcionario', funcionarioLogin)
  }

  getByIdFuncionario(id_funcionario: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`http://localhost:8080/funcionario/${id_funcionario}`, this.token)
  }

  logado(){
    let ok: boolean = false
    if(environment.token != '' && environment.codf == ''){
      ok = true
    }
    return ok
  }

  logadoFuncionario(){
    let ok: boolean = false
    if(environment.codf != '' && environment.token != ''){
      ok = true
    }
    return ok
  }
}
