import { RouterConfig } from '@angular/router';

import { SinkComponent } from './sink.component';

export const SinkRoutes: RouterConfig = [
  {
      path: 'sink', 
      component: SinkComponent,
      children: [
      ]
    },
];
