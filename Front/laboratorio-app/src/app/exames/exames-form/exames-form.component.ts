import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExameService } from 'src/app/exame.service';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { Funcionario } from 'src/app/funcionarios/funcionario';
import { Exame } from '../exame';

@Component({
  selector: 'app-exames-form',
  templateUrl: './exames-form.component.html',
  styleUrls: ['./exames-form.component.css']
})
export class ExamesFormComponent implements OnInit {
  funcionarios: Funcionario[] = []
  exame: Exame;
  sucesso: boolean = false;
  errosApi: String[];
  id: number;

  constructor(private servicoFuncionario: FuncionariosService,
              private servicoExame: ExameService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
    this.exame = new Exame(); 
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.servicoExame
            .getExamesById(this.id)
            .subscribe(response => this.exame = response,
                      erroResponse => this.exame = new Exame());
      }
    })

    this.servicoFuncionario
        .getFuncionario()
        .subscribe(
              respostaSucesso => this.funcionarios = respostaSucesso);
  }

  onSubmit(){
    if (this.id) {
      this.servicoExame
        .atualizar(this.exame)
        .subscribe(respostaSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }), respostaErro => {
          this.errosApi = ['Erro ao atualizar o cliente']
        }
    }else{
      this.servicoExame
        .salvar(this.exame)
        .subscribe(respostaComSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.exame = new Exame();
        }, respostaComErro => {
          this.errosApi = respostaComErro.error.erros;
          this.sucesso = false;
        });
    }
  }

  voltarParaListagem(){
    this.router.navigate(['/examesLista'])
  }
}
