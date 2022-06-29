import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { CarouselInicioComponent } from './components/template/carousel-inicio/carousel-inicio.component';

import { FaleConoscoComponent } from './components/modal/fale-conosco/fale-conosco.component';
import { HomeComponent } from './components/template/home/home.component';
import { CarrinhoComponent } from './components/template/carrinho/carrinho.component';

import { HeaderComponent } from './components/template/header/header.component';
import { MinhaContaComponent } from './components/template/minha-conta/minha-conta.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { BuscaLivroComponent } from './components/template/busca-livro/busca-livro.component';
import { LivroComponent } from './components/template/livro/livro.component';
import { BuscaEtiquetaComponent } from './components/template/busca-etiqueta/busca-etiqueta.component';
import { FuncionarioComponent } from './components/template/funcionario/funcionario.component';
import { EditarLivroComponent } from './components/template/editar-livro/editar-livro.component';
import { CadastrarLivroComponent } from './components/template/cadastrar-livro/cadastrar-livro.component';
import { DeletarLivroComponent } from './components/template/deletar-livro/deletar-livro.component';
import { OrderModule } from 'ngx-order-pipe';
import { EnderecoComponent } from './components/template/endereco/endereco.component';
import { MeusPedidosComponent } from './components/template/meus-pedidos/meus-pedidos.component';
import { CadEnderecoComponent } from './components/template/cad-endereco/cad-endereco.component';
import { PagamentoComponent } from './components/template/pagamento/pagamento.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselInicioComponent,
    FaleConoscoComponent,
    HomeComponent,
    CarrinhoComponent,
    HeaderComponent,
    MinhaContaComponent,
    FooterComponent,
    BuscaLivroComponent,
    LivroComponent,
    BuscaEtiquetaComponent,
    FuncionarioComponent,
    EditarLivroComponent,
    CadastrarLivroComponent,
    DeletarLivroComponent,
    EnderecoComponent,
    MeusPedidosComponent,
    CadEnderecoComponent,
    PagamentoComponent

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
