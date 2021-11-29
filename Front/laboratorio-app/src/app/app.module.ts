import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ExamesModule } from './exames/exames.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    FuncionariosModule,
    ExamesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
