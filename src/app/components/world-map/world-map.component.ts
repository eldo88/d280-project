import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { WorldMapApiService } from '../../services/world-map-api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  countryData: any = {};

  constructor(private api: WorldMapApiService, private el: ElementRef) {}

  setCountryData(event: any) {
    this.api.getCountryData(event.target.id).subscribe(data => console.log(data));
    this.api.setCountryData(event.target.id).subscribe((data: any) => 
      this.countryData = {
        ...data
      });
  }

  ngAfterViewInit(): void {
    const objectElement = this.el.nativeElement.querySelector('object');
    objectElement.addEventListener('load', () => {
      const svgDoc = objectElement.contentDocument;
      if (svgDoc) {
        const paths = svgDoc.querySelectorAll('path');

        paths.forEach((path: any) => {
          path.addEventListener('mouseenter', () => {
            console.log('a');
            path.style.fill = 'rgb(32, 222, 194)';
            path.style.stroke = 'blue';
            path.classList.add('hovered');
          });

          path.addEventListener('mouseleave', () => {
            console.log('b');
            path.style.fill = '';
            path.style.stroke = '';
            path.classList.remove('hovered');
          });
        });
      }
    });
  }

}
