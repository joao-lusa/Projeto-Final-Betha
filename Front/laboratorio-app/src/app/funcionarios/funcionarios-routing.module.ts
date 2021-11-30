import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';


const routes: Routes = [
  {path: 'funcionarioLista', component: FuncionariosListaComponent},
  {path: 'funcionarioForm/:id', component: FuncionariosFormComponent},
  {path: 'funcionarioForm', component: FuncionariosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
