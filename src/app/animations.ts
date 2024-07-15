import { trigger, transition, style, animate } from '@angular/animations';

export const homeRouteAnimation = trigger('homeRouteAnimation', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 }))
  ]),
  transition('* => void', [
    animate('300ms ease-out', style({ opacity: 0 }))
  ])
]);