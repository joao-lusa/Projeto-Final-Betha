import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from './paciente/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  apiURL: string = environment.apiURLBase + "/api/paciente"

  constructor(private http: HttpClient) {  }

  salvar(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(this.apiURL, paciente);
  }
}
