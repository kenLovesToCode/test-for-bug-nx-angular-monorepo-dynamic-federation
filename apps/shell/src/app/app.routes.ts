import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'app2',
    loadChildren: () =>
      loadRemoteModule('app2', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'app1',
    loadChildren: () =>
      loadRemoteModule('app1', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
