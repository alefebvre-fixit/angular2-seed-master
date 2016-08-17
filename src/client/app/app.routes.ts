import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { CollateralRoutes } from './collateral/index';
import { AccountRoutes } from './account/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...CollateralRoutes,
  ...AccountRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
