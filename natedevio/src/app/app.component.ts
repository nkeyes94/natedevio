import {
  Component,
  OnInit,
  Injectable,
  ViewEncapsulation,
} from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree'
import {ChangeDetectionStrategy} from '@angular/core';
import { Slick } from 'ngx-slickjs';
declare let jQuery: any;
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  activeSection = 1;
  config: any;
  fullpage_api: any;

  // * Populate from assets/carousel-images folder
  images = [
    { path: 'assets/carousel-images/stock1.jpg' },
    { path: 'assets/carousel-images/stock2.jpg' },
    { path: 'assets/carousel-images/stock3.jpg' },
  ]
  
  constructor(
    config: NgbCarouselConfig
   ) {
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin: { index: any; }, destination: any, direction: any) => {
        console.log(origin.index);
      }
    };
   }

   ngOnInit(): void {
    console.log('INIT')   

    // * Console log the current carousel (*NO JQUERY*)
    console.log(this.images)
  }

  ngOnDestroy() {
    console.log('DESTROY')
  }

   getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  
}

