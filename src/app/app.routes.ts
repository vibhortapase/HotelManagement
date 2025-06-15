import { Routes } from '@angular/router';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { HotelMonitoringComponent } from './components/hotel-monitoring/hotel-monitoring.component';

export const routes: Routes = [
    { path: '', redirectTo: '/hotel', pathMatch: 'full' },
    { path: 'hotel', component: HotelSearchComponent },
    { path: 'hotel-monitoring', component: HotelMonitoringComponent },

];
