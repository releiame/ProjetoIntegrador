import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselInicioComponent } from './components/template/carousel-inicio/carousel-inicio.component';
import { RodapeComponent } from './components/template/rodape/rodape.component';
import { DetalhesLivrosComponent } from './components/template/detalhes-livros/detalhes-livros.component';

import { FaleConoscoComponent } from './components/modal/fale-conosco/fale-conosco.component';
import { HomeComponent } from './components/template/home/home.component';
import { CarrinhoComponent } from './components/template/carrinho/carrinho.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DevsComponent } from './components/modal/devs/devs.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FuncionarioLoginComponent } from './components/modal/funcionariologin/funcionariologin.component';
import { CadastroFuncionarioComponent } from './components/modal/cadastrofuncionario/cadastrofuncionario.component';
import { MinhaContaComponent } from './components/template/minha-conta/minha-conta.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { BuscaLivroComponent } from './components/template/busca-livro/busca-livro.component';
import { LivroComponent } from './components/template/livro/livro.component';
import { BuscaEtiquetaComponent } from './components/template/busca-etiqueta/busca-etiqueta.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselInicioComponent,
    FaleConoscoComponent,
    RodapeComponent,
    DetalhesLivrosComponent,
    HomeComponent,
    CarrinhoComponent,
    DevsComponent,
    HeaderComponent,
    FuncionarioLoginComponent,
    CadastroFuncionarioComponent,
    MinhaContaComponent,
    FooterComponent,
    BuscaLivroComponent,
    LivroComponent,
    BuscaEtiquetaComponent

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
