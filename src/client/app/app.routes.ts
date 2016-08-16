import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { CollateralRoutes } from './collateral/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...CollateralRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
