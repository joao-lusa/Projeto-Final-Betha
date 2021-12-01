import { Component, OnInit } from '@angular/core';
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

  constructor(private servicoFuncionario: FuncionariosService ) { 
    this.exame = new Exame(); 
  }

  ngOnInit(): void {
    this.servicoFuncionario
        .getFuncionario()
        .subscribe(
              respostaSucesso => this.funcionarios = respostaSucesso);
  }

  onSubmit(){
    console.log('Executou submit!!!')
  }

}
