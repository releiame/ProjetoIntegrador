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
    return this.http.get<Livros[]>('http://localhost:8080/livros/listartodos', this.token)

  }

  getByIdLivros(id_livros: number):Observable<Livros>{
    return this.http.get<Livros>(`http://localhost:8080/livros/${id_livros}`, this.token)
  }

  getByTitulo(titulo: string): Observable<Livros[]>{
    return this.http.get<Livros[]>(`http://localhost:8080/livros/titulo/${titulo}`, this.token)
  }

}
