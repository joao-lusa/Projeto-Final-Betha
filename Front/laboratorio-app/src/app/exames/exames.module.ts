import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamesRoutingModule } from './exames-routing.module';
import { ExamesFormComponent } from './exames-form/exames-form.component';
import { ExameListaComponent } from './exame-lista/exame-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExamesFormComponent, ExameListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExamesRoutingModule
  ], exports :[
    ExamesFormComponent,
    ExameListaComponent
  ]
})
export class ExamesModule { }
