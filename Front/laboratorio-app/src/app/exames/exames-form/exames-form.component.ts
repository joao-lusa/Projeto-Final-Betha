import { Component, OnInit } from '@angular/core';
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

  constructor(private servicoFuncionario: FuncionariosService,
              private servicoExame: ExameService ) { 
    this.exame = new Exame(); 
  }

  ngOnInit(): void {
    this.servicoFuncionario
        .getFuncionario()
        .subscribe(
              respostaSucesso => this.funcionarios = respostaSucesso);
  }

  onSubmit(){
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
