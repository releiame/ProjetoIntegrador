import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ADancaDosDragoesComponent } from "./components/details-books/a-danca-dos-dragoes/a-danca-dos-dragoes.component";
import { AFuriaDosReisComponent } from "./components/details-books/a-furia-dos-reis/a-furia-dos-reis.component";
import { Page1Component } from "./components/template/page1/page1.component";

const routes: Routes = [
    {path: '', redirectTo:'page1', pathMatch: 'full'},
    {path: 'page', component:Page1Component},
    {path: 'a-danca-dos-dragoes', component:ADancaDosDragoesComponent},
    {path: 'a-furia-dos-reis', component:AFuriaDosReisComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
