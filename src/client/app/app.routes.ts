import { provideRouter, RouterConfig } from '@angular/router';

import { CollateralRoutes } from './collateral/index';
import { AccountRoutes } from './account/index';

const routes: RouterConfig = [
        
  ...CollateralRoutes,
  ...AccountRoutes,

  {
        path: '',
        redirectTo: 'collateral/dashboard',
        pathMatch: 'full'
      }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
