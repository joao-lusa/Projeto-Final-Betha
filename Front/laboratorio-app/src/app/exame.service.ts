import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exame } from './exames/exame';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  apiURL: string = environment.apiURLBase + '/api/exames'

  constructor(private http: HttpClient) { }

  salvar(exame : Exame) : Observable<Exame>{
    return this.http.post<Exame>(this.apiURL, exame);
  }

  getExames() : Observable<Exame[]>{
    return this.http.get<Exame[]>(this.apiURL)
  }

  getExamesById(id: number): Observable<Exame>{
    return this.http.get<Exame>(this.apiURL + `/${id}`);
  }

  atualizar(exame: Exame) : Observable<any>{
    return this.http.put<Exame>(this.apiURL + `/${exame.id}`, exame)
  }

  deletar(exame: Exame) : Observable<any>{
    return this.http.delete<any>(this.apiURL + `/${exame.id}`)
  }
}
