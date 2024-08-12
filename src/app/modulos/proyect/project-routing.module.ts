import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProjectComponent } from './pages/page-project/page-project.component';
import { AllProyectsComponent } from './pages/all-proyects/all-proyects.component';

const routes: Routes = [
  { path: 'filter/:id', component: PageProjectComponent },
  { path: '', component: AllProyectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
