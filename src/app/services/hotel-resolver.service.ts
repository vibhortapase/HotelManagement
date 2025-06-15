import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HotelDataService } from './hotel-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelResolverService implements Resolve<any> {

  constructor(private hotelService: HotelDataService) {}

  resolve(): Observable<any> {
    return this.hotelService.getHotelData();
  }
}
