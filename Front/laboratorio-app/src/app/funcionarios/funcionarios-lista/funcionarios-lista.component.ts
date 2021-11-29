import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.css']
})
export class FuncionariosListaComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: FuncionariosService,
              private router: Router) { }

  ngOnInit(): void {
    this.service
      .getFuncionario()
      .subscribe(resposta => {
        this.funcionarios = resposta
      })
  }

  novoCadastro(){
    this.router.navigate(['/funcionarioForm'])
  }

  preparaDelecao(funcionario: Funcionario){
    this.funcionarioSelecionado = funcionario;
  }

  deletarAluno(){
    this
      .service
      .deletar(this.funcionarioSelecionado)
      .subscribe(
        respostaSucesso => {
          this.mensagemSucesso = 'Funcionario deletado com sucesso!'
          this.mensagemErro = null
          this.ngOnInit();
        },
        respostaErro =>{
          this.mensagemErro = "Ocorreu algum erro ao deletar o funcionario";
          this.mensagemSucesso = null;
        }

      )
  }
}
