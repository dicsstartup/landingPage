import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { TermsComponent } from './about/terms/terms.component';
import { PoliticaPrivacidadComponent } from './about/politica-privacidad/politica-privacidad.component';
import { HowWorkComponent } from './about/how-work/how-work.component';
import { FullComponent } from './core/full/full.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '',component:FullComponent, children:
    [{ path: 'home', component: HomePageComponent, data: { animation: 'homeRouteAnimation' } },
      { path: 'terms&conditions', component: TermsComponent },
      { path: 'politicaDePirivacidad', component: PoliticaPrivacidadComponent },
      { path: 'comoFunciona', component: HowWorkComponent },
      { path: 'proyects', loadChildren: () => import('./modulos/proyect/proyect.module').then(m => m.ProyectModule) }
    ]
   }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
