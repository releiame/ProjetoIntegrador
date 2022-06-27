import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FaleConoscoComponent } from "./components/modal/fale-conosco/fale-conosco.component";

import { CarouselInicioComponent } from "./components/template/carousel-inicio/carousel-inicio.component";
import { HomeComponent } from "./components/template/home/home.component";
import { CarrinhoComponent } from "./components/template/carrinho/carrinho.component";
import { DevsComponent } from "./components/modal/devs/devs.component";
import { BuscaLivroComponent } from "./components/template/busca-livro/busca-livro.component";
import { LivroComponent } from "./components/template/livro/livro.component";
import { BuscaEtiquetaComponent } from "./components/template/busca-etiqueta/busca-etiqueta.component";
import { FuncionarioComponent } from "./components/template/funcionario/funcionario.component";

// --------------Substituir # por nome das respectivas classes-------------

//o "isHeader" é o header e footer, então na pagina que vc quer q ele aparece só colocar o "data:" após o componente

const routes: Routes = [
    {path: '', redirectTo:'funcionario', pathMatch: 'full'},
    {path: 'home', component:HomeComponent, data: {isHeader: true}},
    {path: 'carousel', component:CarouselInicioComponent},
    {path: 'fale-conosco', component:FaleConoscoComponent},
    {path: 'carrinho', component:CarrinhoComponent, data: {isHeader: true}},
    {path: 'devs', component:DevsComponent},
    {path: 'busca-livro/:titulo', component:BuscaLivroComponent, data: {isHeader: true}},
    {path: 'livro/:id_livros', component:LivroComponent, data: {isHeader: true}},
    {path: 'busca-etiqueta/:id_etiqueta', component:BuscaEtiquetaComponent, data: {isHeader: true}},
    {path: 'funcionario', component:FuncionarioComponent}
    // {path: 'minha-conta', component:#}, 
    // {path: 'meus-pedidos', component:#},
    // {path: 'trocar-devolver', component:#},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
