import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() info: { texto: string, link: string , bg:string , tx:string, w?:string ,ms?:string} = { texto: '', link: '#' , bg : '', tx:''};

}
