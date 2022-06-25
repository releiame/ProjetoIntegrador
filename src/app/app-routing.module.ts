import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FaleConoscoComponent } from "./components/modal/fale-conosco/fale-conosco.component";

import { CarouselInicioComponent } from "./components/template/carousel-inicio/carousel-inicio.component";
import { HomeComponent } from "./components/template/home/home.component";
import { CarrinhoComponent } from "./components/template/carrinho/carrinho.component";
import { DevsComponent } from "./components/modal/devs/devs.component";
import { Funcionario } from "./model/Funcionario";
import { FuncionarioLoginComponent } from "./components/modal/funcionariologin/funcionariologin.component";
import { CadastroFuncionarioComponent } from "./components/modal/cadastrofuncionario/cadastrofuncionario.component";

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
    // {path: 'minha-conta', component:#}, 
    // {path: 'meus-pedidos', component:#},
    // {path: 'trocar-devolver', component:#},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
