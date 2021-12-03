import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExameService } from 'src/app/exame.service';
import { Exame } from '../exame';

@Component({
  selector: 'app-exame-lista',
  templateUrl: './exame-lista.component.html',
  styleUrls: ['./exame-lista.component.css']
})
export class ExameListaComponent implements OnInit {

  nome: String;
  exames: Exame[] = [];
  exameSelecionado: Exame;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoDeExame: ExameService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicoDeExame
        .getExames()
        .subscribe(resposta => this.exames = resposta)
  }

  novoCadastro(){
    this.router.navigate(['/examesForm'])
  }

  preparaDelecao(exame: Exame){
    this.exameSelecionado = exame;
  }
  
  deletarExame(){
    this
      .servicoDeExame
      .deletar(this.exameSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Exame deletado com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        },
        respostaErro => {
          this.mensagemSucesso = 'Ocorreu um erro ao deletar o exame!!'
          this.mensagemErro = null;
        }
      )
  }
}
