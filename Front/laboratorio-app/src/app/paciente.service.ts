import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from './paciente/paciente';
import { pacienteBusca } from './paciente/paciente-lista/pacienteBusca';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  apiURL: string = environment.apiURLBase + "/api/paciente"

  constructor(private http: HttpClient) {  }

  salvar(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(this.apiURL, paciente);
  }

  busca(nome:string) : Observable<pacienteBusca[]>{
    if(!nome){
      nome = ""
    }
    const httpParams = new HttpParams().set("nome", nome);
    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
}
