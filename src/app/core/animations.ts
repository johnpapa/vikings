import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
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
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], { optional: true }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);

export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true },
    ),
    query(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))], {
      optional: true,
    }),
  ]),
]);

export const openCloseAnimation1 = trigger('openCloseAnimation', [
  state('true', style({ height: '*' })),
  state('false', style({ height: '0px' })),
  transition('false <=> true', animate(500)),
]);

export const openCloseAnimation2 = trigger('openCloseAnimation', [
  state('true', style({ height: '*' })),
  state('false', style({ height: '0px' })),
  transition('false <=> true', animate(1500)),
]);

// kinda
export const openCloseAnimation3 = trigger('openCloseAnimation', [
  transition('* => *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          // width: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ height: '*' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('1300ms ease-out', style({ height: '100%' }))], { optional: true }),
      query(':enter', [animate('1300ms ease-out', style({ height: '0%' }))], { optional: true }),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);

// yes!
export const openCloseAnimation4 = trigger('openCloseAnimation', [
  // transition('void <=> *', []),
  transition('* <=> *', [style({ transform: 'scale(0.5)', opacity: 0 }), animate('.5s ease')], {}),
  transition(
    'true <=> false',
    [style({ transform: 'scale(1.5)', opacity: 0 }), animate('.5s ease')],
    {},
  ),
]);

export const openCloseAnimation = trigger('openCloseAnimation', [
  // state('show', style({ opacity: '1', transform: 'scale(1)' })),
  // state('hide', style({ opacity: '0.2', transform: 'scale(0.5)' })),
  transition('void => *', [
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
  //   )  transition(
  //   'void => *',
  //   [
  //     // 'From' Style
  //     style({ transform: 'scale(0.5)', opacity: 0 }),
  //     animate('.5s ease-in'),
  //   ],
  //   {},
  // ),
  //   style({ opacity: 0.2, transform: 'scale(0.5)' }),
  //   animate('1500ms ease-in'),
  // ]),
  transition('* => void', [
    // style({ transform: 'scale(0.5)', opacity: 1 }),
    // animate('.5s ease-in'),
    // style({
    //   opacity: 1,
    // }),
    animate(
      '500ms ease-out',
      // 'To' Style
      style({ opacity: 0, transform: 'scale(0.5)' }),
    ),
  ]),
]);
