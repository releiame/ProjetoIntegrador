import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Etiqueta } from '../model/Etiqueta';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  constructor(private http: HttpClient) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  getAllEtiquetas():Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>('http://localhost:8080/etiqueta/listartodos', this.token)
  }

  getByIdEtiqueta(id_etiqueta: number):Observable<Etiqueta>{
    return this.http.get<Etiqueta>(`http://localhost:8080/etiqueta/${id_etiqueta}`, this.token)
  }

  getByNome(nome: string): Observable<Etiqueta[]>{
    return this.http.get<Etiqueta[]>(`http://localhost:8080/etiqueta/nome/${nome}`, this.token)
  }

  cadastrar(etiqueta:Etiqueta):Observable<Etiqueta>{
    return this.http.post<Etiqueta>('http://localhost:8080/etiqueta/cadastrar', etiqueta, this.token)
  }

  putTag(etiqueta: Etiqueta):Observable<Etiqueta>{
    return this.http.put<Etiqueta>('http://localhost:8080/etiqueta', etiqueta)
  }

  deleteTag(id_etiqueta: number){
    return this.http.delete(`http://localhost:8080/etiqueta/${id_etiqueta}`, this.token)
  }
}
