import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exame-lista',
  templateUrl: './exame-lista.component.html',
  styleUrls: ['./exame-lista.component.css']
})
export class ExameListaComponent implements OnInit {

  nome: String;

  constructor() { }

  ngOnInit(): void {
  }

  consultar(){
    console.log(this.nome);
  }

}
