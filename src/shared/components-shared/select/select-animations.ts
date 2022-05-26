import { animate, query, state, style, transition, trigger } from "@angular/animations";
export const fade = trigger('fade', [
    state('void', style({
        opacity: 0,
        transform:'translateY(-10px)',
        left:0
    })),
    state('overview', style({
        opacity: .6,
    })),
    transition(':enter,:leave', [
        animate(200)
    ]),
])