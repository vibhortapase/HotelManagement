import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotels'
})
export class FilterHotelsPipe implements PipeTransform {
  transform(hotels: any[], searchText: string): any[] {
    if (!hotels || !searchText) {
      return hotels;
    }
    searchText = searchText.toLowerCase();
    return hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(searchText)
    );
  }
}
