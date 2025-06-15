import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private hotelSubject = new BehaviorSubject<any>(null);
  hotel$ = this.hotelSubject.asObservable();

  setHotel(data: any) {
    this.hotelSubject.next(data);
  }

  clearHotel() {
    this.hotelSubject.next(null);
  }
}
