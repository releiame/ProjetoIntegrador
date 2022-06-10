import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderInicioDeslogComponent } from './components/template/header-inicio-deslog/header-inicio-deslog.component';
import { HeaderInicioLogComponent } from './components/template/header-inicio-log/header-inicio-log.component';
import { CarouselInicioComponent } from './components/template/carousel-inicio/carousel-inicio.component';
import { Page1Component } from './components/template/page1/page1.component';
import { RodapeComponent } from './components/template/rodape/rodape.component';
import { DetalhesLivrosComponent } from './components/template/detalhes-livros/detalhes-livros.component';

import { LoginComponent } from './components/modal/login/login.component';
import { CadastroComponent } from './components/modal/cadastro/cadastro.component';
import { FaleConoscoComponent } from './components/modal/fale-conosco/fale-conosco.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderInicioDeslogComponent,
    HeaderInicioLogComponent,
    CarouselInicioComponent,
    LoginComponent,
    CadastroComponent,
    FaleConoscoComponent,
    RodapeComponent,
    Page1Component,
    DetalhesLivrosComponent

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
