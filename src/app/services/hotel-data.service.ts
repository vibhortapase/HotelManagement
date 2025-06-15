import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelDataService {

 
    constructor(private http: HttpClient) {}

  getHotelData(): Observable<any[]> {
    return this.http.get<any[]>('assets/hotels.json');
  }
}
