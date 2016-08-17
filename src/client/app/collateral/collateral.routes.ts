import { RouterConfig } from '@angular/router';

import { ContractsComponent } from './index';
import { ExposuresComponent } from './index';
import { DashboardComponent } from './index';
import { ExposureDetailsComponent } from './index';

export const CollateralRoutes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'exposures',
    component: ExposuresComponent
  },
  {
    path: 'contracts',
    component: ContractsComponent
  },
  {
    path: 'exposures/:id', 
    component: ExposureDetailsComponent
  }

];
