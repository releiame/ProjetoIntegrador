import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./components/modal/cadastro/cadastro.component";
import { LoginComponent } from "./components/modal/login/login.component";
import { CarouselInicioComponent } from "./components/template/carousel-inicio/carousel-inicio.component";
import { HeaderInicioDeslogComponent } from "./components/template/header-inicio-deslog/header-inicio-deslog.component";
import { HomeComponent } from "./components/template/home/home.component";

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'cadastro', component:CadastroComponent},
    {path: 'header-inicio-log', component:HeaderInicioDeslogComponent},
    {path: 'carousel', component:CarouselInicioComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
