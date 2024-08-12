import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { _plataformas, _tecnologias } from 'src/app/models/constantes/tecnologias';
import { FilterService } from '../../service/filter.service';
import { Filter } from '../../models/filter';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent {

  tecnologias: Filter[] = [];
  plataformas: Filter[] = [];

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private serviceFilter: FilterService) {


    this.serviceFilter.getPlataformas().subscribe(data => {
      this.plataformas = data;
    });
    this.serviceFilter.getTecnologias().subscribe(data => {
      this.tecnologias = data;
    });


  }

  onCheckboxChangeP(plataforma: string, event: any) {
    this.serviceFilter.updatePlataforma(plataforma, event.target.checked);
  }
  onCheckboxChangeT(tecnologia: string, event: any) {
    this.serviceFilter.updateTecnlogia(tecnologia, event.target.checked);
  }
}
