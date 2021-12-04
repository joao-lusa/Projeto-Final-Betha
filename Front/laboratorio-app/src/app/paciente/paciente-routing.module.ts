import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';


const routes: Routes = [
  {path: 'pacientesForm', component: PacienteFormComponent},
  {path: 'pacientesForm/:id', component: PacienteFormComponent},
  {path: 'pacientesLista', component: PacienteListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
