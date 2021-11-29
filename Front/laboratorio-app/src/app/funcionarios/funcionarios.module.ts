import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FormsModule } from '@angular/forms';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';


@NgModule({
  declarations: [FuncionariosFormComponent, FuncionariosListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    FuncionariosRoutingModule
  ], exports: [
    FuncionariosFormComponent
  ]
})
export class FuncionariosModule { }
