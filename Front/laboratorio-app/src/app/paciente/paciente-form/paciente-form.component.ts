import { Component, OnInit } from '@angular/core';
import { ExameService } from 'src/app/exame.service';
import { Exame } from 'src/app/exames/exame';
import { PacienteService } from 'src/app/paciente.service';
import { Paciente } from '../paciente'

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  exames: Exame[] = [];
  paciente: Paciente;
  sucesso: boolean = false;
  errosApi: String[];


  constructor(private servicoExame: ExameService,
              private servicoPaciente: PacienteService) {
      this.paciente = new Paciente();
   }

  ngOnInit(): void {
    this.servicoExame
        .getExames()
        .subscribe(
            respostaComSucesso => this.exames = respostaComSucesso);
  }

  onSubmit(){
    this.servicoPaciente
        .salvar(this.paciente)
        .subscribe(respostaSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.paciente = new Paciente();
        }), errorResponse => {
          this.errosApi = errorResponse.error.erros;
          this.sucesso = false;
        }
  }

  status: Status[] = [
    {value: 'A', viewValue: 'Atendido'},
    {value: 'E', viewValue: 'Em espera'}
  ];

}
