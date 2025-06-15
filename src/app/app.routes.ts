import { Routes } from '@angular/router';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { HotelMonitoringComponent } from './components/hotel-monitoring/hotel-monitoring.component';
import { HotelResolverService } from './services/hotel-resolver.service';

export const routes: Routes = [
  { path: '', redirectTo: '/hotel', pathMatch: 'full' },

  {
    path: 'hotel',
    loadComponent: () =>
      import('./components/hotel-search/hotel-search.component').then(m => m.HotelSearchComponent)
     ,resolve: {
      hotelData: HotelResolverService
    }
  },
  {
    path: 'hotel-monitoring',
    loadComponent: () =>
      import('./components/hotel-monitoring/hotel-monitoring.component').then(m => m.HotelMonitoringComponent)
    ,resolve: {
      hotelData: HotelResolverService
    }
  },
  {
    path : 'no-data-found',
    loadComponent : ()=>
              import('./components/no-data-found/no-data-found.component').then(m => m.NoDataFoundComponent)

  }
];