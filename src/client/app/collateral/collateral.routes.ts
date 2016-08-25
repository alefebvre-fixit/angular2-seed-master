import { RouterConfig } from '@angular/router';

import { ContractsComponent } from './index';
import { ExposuresComponent } from './index';
import { DashboardComponent } from './index';
import { ExposureDetailsComponent } from './index';
import { CollateralComponent } from './index';
import { InventoryComponent } from './index';
import { EntityListComponent } from './index';

export const CollateralRoutes: RouterConfig = [
  {
      path: 'collateral', 
      component: CollateralComponent,
      children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
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
        path: 'counterparties',
        component: EntityListComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'exposures/:id', 
        component: ExposureDetailsComponent
      }
      ]
    },




];
