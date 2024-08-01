import { CustomerDetailPage } from './../customer-detail/customer-detail.page';
import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'tab1',
      //   loadComponent: () =>
      //     import('../tab1/tab1.page').then((m) => m.Tab1Page),
      // },
      // {
      //   path: 'tab2',
      //   loadComponent: () =>
      //     import('../tab2/tab2.page').then((m) => m.Tab2Page),
      // },
      {
        path: 'customers',
        loadComponent: () =>
          import('../customers/customers.page').then((m) => m.CustomersPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'contracts',
        loadComponent: () =>
          import('../contracts/contracts.page').then((m) => m.ContractsPage),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'customer-detail/:id',
        loadComponent: () => import('../customer-detail/customer-detail.page').then(m => m.CustomerDetailPage)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full',
      },

    ],
  },
 
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full',
  },
];
