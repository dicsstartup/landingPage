import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { TermsComponent } from './pages/terms/terms.component';
import { HowWorkComponent } from './pages/how-work/how-work.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    TermsComponent,
    PoliticaPrivacidadComponent,
    HowWorkComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
