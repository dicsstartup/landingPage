import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FullComponent } from './core/full/full.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: FullComponent, children:
      [
        { path: 'home', component: HomePageComponent, data: { animation: 'homeRouteAnimation' } },
        { path: 'proyects', loadChildren: () => import('./modulos/proyect/proyect.module').then(m => m.ProyectModule) },
        { path: '', loadChildren: () => import('./modulos/about/about.module').then(m => m.AboutModule) }
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
