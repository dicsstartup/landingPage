import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProjectComponent } from './pages/page-project/page-project.component';
import { ObjetivosComponent } from './componentes/objetivos/objetivos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { BotoneraComponent } from './componentes/botonera/botonera.component';
import { AllProyectsComponent } from './pages/all-proyects/all-proyects.component';
import { FilterDialogComponent } from './componentes/filter-dialog/filter-dialog.component';
import { FormsModule } from '@angular/forms';
import { FuncionesComponent } from './componentes/funciones/funciones.component';
import { SrcImageDirective } from './directivas/src-image/src-image.directive';


@NgModule({
  declarations: [
    PageProjectComponent,
    ObjetivosComponent,
    BotoneraComponent,
    AllProyectsComponent,
    FilterDialogComponent,
    FuncionesComponent,
    SrcImageDirective
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProyectModule { }
