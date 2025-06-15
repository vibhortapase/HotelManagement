import { Component } from '@angular/core';
import { SharedModule } from '../../SharedModule';

@Component({
  selector: 'app-widgets',
  imports: [SharedModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
  widgets = [
    { label: 'Last Used', value: '29 Nov 2021' },
    { label: 'Upcoming Confirmed', value: '10' },
    { label: 'Upcoming Request', value: '3' },
    { label: 'Next Booking Date', value: '29 Nov 2021' },
    { label: 'Open (& Total) Complaints', value: '2 <small>(10)</small>' },
    { label: 'To Be Paid', value: 'GBP 300.00' }
  ];
}
