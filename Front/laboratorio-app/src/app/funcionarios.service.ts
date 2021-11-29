import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionarios/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http : HttpClient) {

  }

  salvar(funcionario : Funcionario) : Observable<Funcionario>{
    return this.http.post<Funcionario>('http://localhost:8080/api/funcionario', funcionario);
  }

  getFuncionario() : Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>('http://localhost:8080/api/funcionario');
  }
  getFuncionarioById(id: number) : Observable<Funcionario>{
    return this.http.get<Funcionario>(`http://localhost:8080/api/funcionario/${id}`);
  }
  atualizar(funcionario: Funcionario) : Observable<any>{
    return this.http.put<Funcionario>(`http://localhost:8080/api/funcionario/${funcionario.id}`, funcionario);
  }
  deletar(funcionario: Funcionario) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/funcionario/${funcionario.id}`);
  }

  
}
