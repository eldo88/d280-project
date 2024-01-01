import { Component } from '@angular/core';
import { WorldMapApiService } from '../../services/world-map-api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  countryData: any = {};

  constructor(private api: WorldMapApiService) {}

  setCountryData(event: any) {
    this.api.getCountryData(event.target.id).subscribe(data => console.log(data));
    this.api.setCountryData(event.target.id).subscribe((data: any) => 
      this.countryData = {
        ...data
      });
  }
}
