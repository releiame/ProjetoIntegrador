import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderInicioDeslogComponent } from './components/template/header-inicio-deslog/header-inicio-deslog.component';
import { HeaderInicioLogComponent } from './components/template/header-inicio-log/header-inicio-log.component';
import { CarouselInicioComponent } from './components/template/carousel-inicio/carousel-inicio.component';
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
    FaleConoscoComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
