import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Enlace } from 'src/app/models/proyect-model';
import { ProyectoSelectedService } from 'src/app/services/proyectoSelected/proyecto.service';

const iconos = [
  { alt: 'Telegram', src: 'assets/icons/botonera/telegram.svg' },
  { alt: 'Instagram', src: 'assets/icons/botonera/instagram.svg' },
  { alt: 'GitHub', src: 'assets/icons/botonera/github.svg' }
]

@Component({
  selector: 'proyect-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent {

  enlaces: { src?: string, alt?: string, href?: string }[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(private service: ProyectoSelectedService) {}

  ngOnInit() {


    this.subscriptions.add(
      this.service.getBotonera().subscribe(botonera => {
        if(botonera)
        this.enlaces = this.combineLists(botonera);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  combineLists(enlaces:Enlace[]): {src?: string, alt?: string, href?: string }[] {
    return enlaces.map(enlace => {
      const icon = iconos.find(icon => icon.alt==enlace.icon);
      return { src: icon?.src, alt:icon?.alt, href:enlace.href };
    });
  }
}
