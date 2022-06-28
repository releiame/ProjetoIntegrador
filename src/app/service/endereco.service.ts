import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Endereco } from '../model/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    private http:HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  }

  getAllLivros():Observable<Endereco[]> {
    return this.http.get<Endereco[]>('http://localhost:8080/endereco', this.token)

  }

  adicionar(endereco:Endereco):Observable<Endereco>{
    console.log('Chegou no método o service')
    return this.http.post<Endereco>('http://localhost:8080/endereco/adicionar', endereco, this.token)
  }

}
