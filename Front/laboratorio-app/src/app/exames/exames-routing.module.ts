import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamesFormComponent } from './exames-form/exames-form.component';


const routes: Routes = [
  {path: 'examesForm', component: ExamesFormComponent},
  {path: 'examesForm/:id', component: ExamesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamesRoutingModule { }
