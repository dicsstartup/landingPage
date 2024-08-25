import { Directive, ElementRef, Input } from '@angular/core';
import { StoregeService } from 'src/app/services/storege/storege.service';

@Directive({
  selector: 'img[srcImage]'
})
export class SrcImageDirective {
  @Input('appSrcInterceptor') srcValue!: string;
  
  constructor( private storege: StoregeService,private el: ElementRef) { }


  async ngOnInit() {
    try {
      if (this.srcValue) {
        const processedSrc = await this.getSRC(this.srcValue);
        this.el.nativeElement.src = processedSrc;
      }
    } catch (error) {
      console.error('Error al procesar la imagen:', error);
    }
  }

  private async getSRC(name: string): Promise<string> {
    return this.storege.getUrl(name);
  }
}
