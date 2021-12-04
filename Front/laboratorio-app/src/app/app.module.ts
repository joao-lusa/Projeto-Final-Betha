import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ExamesModule } from './exames/exames.module';
import { FuncionariosService } from './funcionarios.service';
import { ExameService } from './exame.service';
import { PacienteModule } from './paciente/paciente.module';
import { PacienteService } from './paciente.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    FuncionariosModule,
    ExamesModule,
    PacienteModule,
  ],
  providers: [
    FuncionariosService,
    ExameService,
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
