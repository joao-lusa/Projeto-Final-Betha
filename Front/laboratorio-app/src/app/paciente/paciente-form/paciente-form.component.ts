import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ExameService } from 'src/app/exame.service';
import { Exame } from 'src/app/exames/exame';
import { PacienteService } from 'src/app/paciente.service';
import { Paciente } from '../paciente'

interface Status {
  value: string;
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
  id: number;


  constructor(private servicoExame: ExameService,
              private servicoPaciente: PacienteService,
              private activatedRoute: ActivatedRoute) {
      this.paciente = new Paciente();
   }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.servicoPaciente
            .getPacientesById(this.id)
            .subscribe(resposta => this.paciente = resposta,
                      erroResposta => this.paciente = new Paciente());
      }
    })

    this.servicoExame
        .getExames()
        .subscribe(
            respostaComSucesso => this.exames = respostaComSucesso);
  }

  onSubmit(){
    if (this.id) {
      this.servicoPaciente
        .atualizar(this.paciente)
        .subscribe(respostaSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }), respostaErro => {
          this.errosApi = respostaErro.error.erros;
        }
    }else{
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
  }

  status: Status[] = [
    {value: 'Atendido'},
    {value: 'Em espera',}
  ];

}
