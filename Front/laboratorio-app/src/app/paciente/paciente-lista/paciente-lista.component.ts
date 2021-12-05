import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/paciente.service';
import { Paciente } from '../paciente';
import { pacienteBusca } from './pacienteBusca';

@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html',
  styleUrls: ['./paciente-lista.component.css']
})
export class PacienteListaComponent implements OnInit {

  nome: string;
  lista: pacienteBusca[];
  menssagem : string;
  pacienteSelecionado: Paciente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoDePaciente: PacienteService,
              private router: Router) { }

  ngOnInit(): void {
  }

  consultar(){
    this.menssagem = null;
    this.servicoDePaciente
      .busca(this.nome)
      .subscribe(respostaSucesso => {
        this.lista = respostaSucesso;
        if (this.lista.length <=0) {
          this.menssagem = 'Nenhum registro encontrado.'
        }
      });
  }
  
  preparaDelecao(paciente: Paciente){
    this.pacienteSelecionado = paciente;
  }

  deletarExame(){
    this
      .servicoDePaciente
      .deletar(this.pacienteSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Exame deletado com sucesso!';
          this.mensagemErro = null;
          this.consultar();
        },
        respostaErro => {
          this.mensagemSucesso = 'Ocorreu um erro ao deletar o exame!!'
          this.mensagemErro = null;
        }
      )
  }
}
