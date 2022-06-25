import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FaleConoscoComponent } from "./components/modal/fale-conosco/fale-conosco.component";

import { CarouselInicioComponent } from "./components/template/carousel-inicio/carousel-inicio.component";
import { HomeComponent } from "./components/template/home/home.component";
import { CarrinhoComponent } from "./components/template/carrinho/carrinho.component";
import { DevsComponent } from "./components/modal/devs/devs.component";
import { FuncionarioLoginComponent } from "./components/modal/funcionariologin/funcionariologin.component";
import { CadastroFuncionarioComponent } from "./components/modal/cadastrofuncionario/cadastrofuncionario.component";
import { BuscaLivroComponent } from "./components/template/busca-livro/busca-livro.component";
import { LivroComponent } from "./components/template/livro/livro.component";
import { BuscaEtiquetaComponent } from "./components/template/busca-etiqueta/busca-etiqueta.component";

// --------------Substituir # por nome das respectivas classes-------------

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'carousel', component:CarouselInicioComponent},
    {path: 'fale-conosco', component:FaleConoscoComponent},
    {path: 'carrinho', component:CarrinhoComponent},
    {path: 'devs', component:DevsComponent},
    {path: 'funcionariologin', component:FuncionarioLoginComponent},
    {path: 'cadastrofuncionario', component:CadastroFuncionarioComponent},
    {path: 'busca-livro/:titulo', component:BuscaLivroComponent},
    {path: 'livro/:id_livros', component:LivroComponent},
    {path: 'busca-etiqueta/:id_etiqueta', component:BuscaEtiquetaComponent},
    // {path: 'minha-conta', component:#}, 
    // {path: 'meus-pedidos', component:#},
    // {path: 'trocar-devolver', component:#},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
