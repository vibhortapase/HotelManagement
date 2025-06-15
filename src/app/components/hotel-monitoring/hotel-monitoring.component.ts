import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../SharedModule';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { WidgetsComponent } from '../widgets/widgets.component';
import { BookingOverviewComponent } from '../booking-overview/booking-overview.component';
import { MapComponent } from '../map/map.component';
import { RightPanelComponent } from '../right-panel/right-panel.component';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-hotel-monitoring',
  imports: [SharedModule, LeftPanelComponent,
    WidgetsComponent,
    BookingOverviewComponent,
    MapComponent,
    RightPanelComponent],
  templateUrl: './hotel-monitoring.component.html',
  styleUrl: './hotel-monitoring.component.css'
})
export class HotelMonitoringComponent implements OnInit {
  hotelData: any;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    debugger
    this.sharedService.hotel$.subscribe(data => {
      this.hotelData = data;
    });
  }

  backToSearch() {
    this.router.navigate(['hotel']);

  }
}
