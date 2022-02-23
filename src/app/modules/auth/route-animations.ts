import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";
export const fader = trigger('routeAnimations', [
    state('void', style({
        display: 'block',
        opacity: 0,
    })),
    transition(':enter, :leave', [animate(150)]),
    transition('* <=> *', [
        style({ position: 'relative' }),
       
        query(':enter, :leave', [
          style({
            display: 'block',
            opacity: 0,
            position:"absolute",
            left:0,
            top:0,
            width:'100%'
          })
        ]),

        query(':enter', [
          style({  opacity: 0, })
        ]),
        query(':leave',  style({  opacity: 1 })),
        group([
          query(':leave', [
            animate(300, style({ display: 'block',opacity: 0 }))
          ]),
          query(':enter', [
            animate(300, style({display: 'block', opacity: 1 }))
          ])
        ]),
      ]),
    
])