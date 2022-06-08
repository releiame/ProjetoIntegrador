import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderInicioDeslogComponent } from './components/template/header-inicio-deslog/header-inicio-deslog.component';
import { HeaderInicioLogComponent } from './components/template/header-inicio-log/header-inicio-log.component';
import { CarouselInicioComponent } from './components/template/carousel-inicio/carousel-inicio.component';
import { LoginComponent } from './components/modal/login/login.component';
import { CadastroComponent } from './components/modal/cadastro/cadastro.component';
import { FaleConoscoComponent } from './components/modal/fale-conosco/fale-conosco.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { Page1Component } from './components/template/page1/page1.component';
import { HpEAOrdemDaFenixComponent } from './components/details-books/hp-e-a-ordem-da-fenix/hp-e-a-ordem-da-fenix.component';
import { HpEOEnigmaDoPrincipeComponent } from './components/details-books/hp-e-o-enigma-do-principe/hp-e-o-enigma-do-principe.component';
import { AGuerraDosTronosComponent } from './components/details-books/a-guerra-dos-tronos/a-guerra-dos-tronos.component';
import { AFuriaDosReisComponent } from './components/details-books/a-furia-dos-reis/a-furia-dos-reis.component';
import { ATormentaDeEspadasComponent } from './components/details-books/a-tormenta-de-espadas/a-tormenta-de-espadas.component';
import { OFestimDosCorvosComponent } from './components/details-books/o-festim-dos-corvos/o-festim-dos-corvos.component';
import { ADancaDosDragoesComponent } from './components/details-books/a-danca-dos-dragoes/a-danca-dos-dragoes.component';
import { HpEAPedraFilosofalComponent } from './components/details-books/hp-e-a-pedra-filosofal/hp-e-a-pedra-filosofal.component';
import { HpEACamaraSecretaComponent } from './components/details-books/hp-e-a-camara-secreta/hp-e-a-camara-secreta.component';
import { HpEOPrisioneiroDeAzkabanComponent } from './components/details-books/hp-e-o-prisioneiro-de-azkaban/hp-e-o-prisioneiro-de-azkaban.component';
import { HpEOCaliceDeFogoComponent } from './components/details-books/hp-e-o-calice-de-fogo/hp-e-o-calice-de-fogo.component';
import { HpEAsReliquiasDaMorteComponent } from './components/details-books/hp-e-as-reliquias-da-morte/hp-e-as-reliquias-da-morte.component';


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
    HpEAOrdemDaFenixComponent,
    HpEOEnigmaDoPrincipeComponent,
    AGuerraDosTronosComponent,
    AFuriaDosReisComponent,
    ATormentaDeEspadasComponent,
    OFestimDosCorvosComponent,
    ADancaDosDragoesComponent,
    HpEAPedraFilosofalComponent,
    HpEACamaraSecretaComponent,
    HpEOPrisioneiroDeAzkabanComponent,
    HpEOCaliceDeFogoComponent,
    HpEAsReliquiasDaMorteComponent

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
