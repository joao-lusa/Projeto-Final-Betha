import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  funcionario : Funcionario;
  sucesso: boolean = false;
  errosApi: String[];
  id: number;

  constructor(private service: FuncionariosService,
              private router: Router,
              private activatedRouter : ActivatedRoute) { 
    this.funcionario = new Funcionario();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRouter.params;
    params.subscribe(urlParams => {
      this.id - urlParams['id'];
      if(this.id){
        this.service
        .getFuncionarioById(this.id)
        .subscribe(response => this.funcionario = response,
                  erroResponse => this.funcionario = new Funcionario());
      }
    })
  }

  gravarFuncionario(){
    if(this.id){
      this.service
        .atualizar(this.funcionario)
        .subscribe(resposntaSucesso =>{
          this.sucesso = true;
          this.errosApi = null;
        }, respostaComErro => {
          this.errosApi = ['Erro ao atulizar o cliente!']
        })
    }else{
      this.service
      .salvar(this.funcionario)
      .subscribe(response=>{
        this.sucesso = true;
        this.errosApi = null;
        this.funcionario = response;
      }, errorResponse => {
        this.errosApi = errorResponse.error.erros;
        this.sucesso = false;
      })
    }
    
    
  }
  voltarParaListagem(){
    this.router.navigate(['/funcionarioLista'])
  }
}
