import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/paciente.service';
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

  constructor(private servicoDePaciente: PacienteService) { }

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
}
