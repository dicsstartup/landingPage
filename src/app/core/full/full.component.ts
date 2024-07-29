import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { homeRouteAnimation } from 'src/app/animations';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
  animations: [homeRouteAnimation]

})
export class FullComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
