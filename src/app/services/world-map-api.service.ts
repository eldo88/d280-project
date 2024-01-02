import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldMapApiService {

  constructor(private http: HttpClient) { }

  getCountryData(country: string) {
    let apiUrl = `https://api.worldbank.org/v2/country/${country}?format=json`
    return this.http.get(apiUrl);
  }

  setCountryData(country: string) {
    console.log(country);
    let subject = new Subject();

    this.getCountryData(country).subscribe((data: any) => {
      if (data[0].message) {
        subject.next({errorMessage: data[0].message[0].value})
      } else {
        subject.next({
          countryName: data[1][0].name,
          capitalCity: data[1][0].capitalCity,
          region: data[1][0].region.value,
          latitude: data[1][0].latitude,
          longitude: data[1][0].longitude,
          incomeLevel: data[1][0].incomeLevel.value
        })
      }
    });
    return subject.asObservable();
  }
}
