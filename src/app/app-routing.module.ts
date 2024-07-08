import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { TermsComponent } from './about/terms/terms.component';
import { PoliticaPrivacidadComponent } from './about/politica-privacidad/politica-privacidad.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'terms&conditions', component: TermsComponent },
  { path: 'politicaDePirivacidad', component: PoliticaPrivacidadComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
