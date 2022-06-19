import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./components/modal/cadastro/cadastro.component";
import { FaleConoscoComponent } from "./components/modal/fale-conosco/fale-conosco.component";
import { LoginComponent } from "./components/modal/login/login.component";

import { CarouselInicioComponent } from "./components/template/carousel-inicio/carousel-inicio.component";
import { HeaderInicioDeslogComponent } from "./components/template/header-inicio-deslog/header-inicio-deslog.component";
import { HomeComponent } from "./components/template/home/home.component";
import { CarrinhoComponent } from "./components/template/carrinho/carrinho.component";
import { DevsComponent } from "./components/modal/devs/devs.component";

// --------------Substituir # por nome das respectivas classes-------------

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'cadastro', component:CadastroComponent},
    {path: 'header-inicio-log', component:HeaderInicioDeslogComponent},
    {path: 'header-inicio-deslog', component:HeaderInicioDeslogComponent},
    {path: 'carousel', component:CarouselInicioComponent},
    {path: 'fale-conosco', component:FaleConoscoComponent},
    {path: 'carrinho', component:CarrinhoComponent},
    {path: 'devs', component:DevsComponent},
    // {path: 'minha-conta', component:#}, 
    // {path: 'meus-pedidos', component:#},
    // {path: 'trocar-devolver', component:#},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
