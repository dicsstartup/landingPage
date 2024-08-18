import { Component, TemplateRef, ViewChild } from '@angular/core';
import { OffcanvasDismissReasons ,NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent {

	list:{label:string, href:string}[]=[
		{label:'Inicio',href:'home'},{label:'Como funciona',href:'comoFunciona'}
	]

  @ViewChild('content') content!: TemplateRef<any>;
  closeResult = '';

	constructor(private offcanvasService: NgbOffcanvas) {
  }

	open(content:TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
