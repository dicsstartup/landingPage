import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './pages/terms/terms.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { HowWorkComponent } from './pages/how-work/how-work.component';

const routes: Routes = [
  { path: 'terms&conditions', component: TermsComponent },
  { path: 'politicaDePirivacidad', component: PoliticaPrivacidadComponent },
  { path: 'comoFunciona', component: HowWorkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
