import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordChangerComponent } from './home/components/word-changer/word-changer.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LinkComponent } from './home/components/link/link.component';
import { ViewProjectsComponent } from './home/components/view-projects/view-projects.component';
import { FullComponent } from './core/full/full.component';
import { ProyectModule } from './modulos/proyect/proyect.module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { AboutModule } from './modulos/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WordChangerComponent,
    FooterComponent,
    HomePageComponent,
    LinkComponent,
    ViewProjectsComponent,
    FullComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    SharedModule,
    ProyectModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
