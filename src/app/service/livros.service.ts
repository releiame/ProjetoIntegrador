import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Livros } from '../model/Livros';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  getAllLivros():Observable<Livros[]> {
    return this.http.get<Livros[]>('https://releiame.herokuapp.com/livros/listartodos')

  }

  getLivrosById(id_livros: number):Observable<Livros>{
    return this.http.get<Livros>(`https://releiame.herokuapp.com/livros/${id_livros}`)
  }

  getByTitulo(titulo: string): Observable<Livros[]>{
    return this.http.get<Livros[]>(`https://releiame.herokuapp.com/livros/titulo/${titulo}`)
  }

  cadastrar(livros:Livros):Observable<Livros>{
    return this.http.post<Livros>('https://releiame.herokuapp.com/livros/cadastrar', livros, this.token)
  }

  put(livros: Livros):Observable<Livros>{
    return this.http.put<Livros>('https://releiame.herokuapp.com/livros/atualizar', livros, this.token)
  }

  deleteLivros(id_livros: number){
    return this.http.delete(`https://releiame.herokuapp.com/livros/${id_livros}`, this.token)
  }

  putLivros(id_livros: number, id_pedido: number){
    return this.http.put<Livros>(`https://releiame.herokuapp.com/livros/livro_pedido/livros/${id_livros}/pedido/${id_pedido}`, this.token)
  }
}
