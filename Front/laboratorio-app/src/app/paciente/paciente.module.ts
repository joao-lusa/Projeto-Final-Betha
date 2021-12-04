import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';


@NgModule({
  declarations: [PacienteFormComponent, PacienteListaComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    PacienteFormComponent,
    PacienteListaComponent
  ]
})
export class PacienteModule { }
