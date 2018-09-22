import {
  animate,
  animateChild,
  group,
  query,
  sequence,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeSlideInAnimation = trigger('routeSlide', [
  transition('* => *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('700ms ease-out', style({ left: '100%' }))], { optional: true }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);

export const openCloseAnimation = trigger('openClose', [
  // state('show', style({ opacity: '1', transform: 'scale(1)' })),
  // state('hide', style({ opacity: '0.2', transform: 'scale(0.5)' })),
  transition('void => *', [
    sequence([
      // 'From' styles
      style({
        opacity: 0.2,
        transform: 'scale(0.5)',
      }),
      animate(
        '300ms ease-in',
        // 'To' styles
        // 1 - Comment this to remove the item's grow...
        style({
          opacity: 1,
          transform: 'scale(1.1)',
        }),
      ),
      animate(
        '300ms ease-in',
        // 'To' styles
        // 1 - Comment this to remove the item's grow...
        style({
          transform: 'scale(1.0)',
        }),
      ),
    ]),
  ]),
  transition('* => void', [
    animate(
      '500ms ease-out',
      // 'To' Style
      style({ opacity: 0, transform: 'scale(0.5)' }),
    ),
  ]),
]);

export const flyInOutAnimation = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [style({ transform: 'translateX(-100%)' }), animate('250ms ease-out')]),
  transition('* => void', [animate('250ms ease-out', style({ transform: 'translateX(100%)' }))]),
]);
