import { Routes } from '@angular/router';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { HotelMonitoringComponent } from './components/hotel-monitoring/hotel-monitoring.component';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { HotelResolverService } from './services/hotel-resolver.service';
import { VibhorComponent } from './vibhor/vibhor.component';

export const routes: Routes = [
  {
    path: '',
    component: VibhorComponent
    // path: '',
    // component: HotelSearchComponent,
    // resolve: {
    //   hotelData: HotelResolverService
    // }
  },
  // {
  //   path: 'hotel',
  //   component: HotelSearchComponent,
  //   resolve: {
  //     hotelData: HotelResolverService
  //   }
  // },
  // {
  //   path: 'hotel-monitoring',
  //   component: HotelMonitoringComponent,
  //   resolve: {
  //     hotelData: HotelResolverService
  //   }
  // },
  // {
  //   path: 'no-data-found',
  //   component: NoDataFoundComponent
  // }
];

