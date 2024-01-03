import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WorldMapApiService } from '../../services/world-map-api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  countryData: any = {};

  constructor(private api: WorldMapApiService, private el: ElementRef, private cdr: ChangeDetectorRef) {}
  

  setCountryData(event: any) {
    this.api.setCountryData(event.target.id).subscribe((data: any) => {
      this.countryData = { ...data };
      this.cdr.detectChanges();
    });
  }

  removeCountryData() {
    this.countryData.name = '';
  }

  ngAfterViewInit(): void {
    const objectElement = this.el.nativeElement.querySelector('object');

    objectElement.addEventListener('load', () => {

      const svgDoc = objectElement.contentDocument;
      if (svgDoc) {
        const paths = svgDoc.querySelectorAll('path');

        paths.forEach((path: any) => {
  
          path.addEventListener('mouseenter', () => {
            path.style.fill = 'rgb(32, 222, 194)';
            path.style.stroke = 'blue';

            const syntheticEvent = new MouseEvent('mouseenter', {
              bubbles: true,
              cancelable: true,
              view: window
            });

            Object.defineProperty(syntheticEvent, 'target', { value: path, writable: false });

            this.setCountryData(syntheticEvent);
          });

          path.addEventListener('mouseleave', () => {
            path.style.fill = '';
            path.style.stroke = '';
            this.removeCountryData();
          });
        });
      }
    });
  }

}
