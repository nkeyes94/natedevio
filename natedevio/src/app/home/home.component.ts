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
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ChangeDetectionStrategy } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {GMapModule} from 'primeng/gmap';

import {RadioButtonModule} from 'primeng/radiobutton';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });
  config: any;
  fullpage_api: any;
  slick: any;
  panelOpenState = false;
  frontEnd = [
    {
      name: 'HTML',
      icon: 'assets/icons/html.svg',
      description: 'HTML is the standard markup language for creating Web pages.',
    },
  ]

  backEnd = [
    {
      name: 'Node.js',
      icon: 'assets/icons/nodejs.svg',
      description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    },
  ]
  options: any;

  overlays: any[];

  constructor(private fb: UntypedFormBuilder, private http: HttpClient) { 
    this.config = {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: [
        'firstPage',
        'secondPage',
        'thirdPage',
        'fourthPage',
        'lastPage',
      ],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin: { index: any }, destination: any, direction: any) => {
        console.log(origin.index);
      },
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };

  }

  sconfig: Slick.Config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  techs = [
    // * Image should be from our assets folder
    // * Angular
    {
      name: 'Angular',
      rating: 5,
      image: 'angularicon.png',
      imgsrc: "../assets/about/angularicon.png"
    },
    // * React
    {
      name: 'React',
      rating: 4,
      image: 'react.png',
      imgsrc: "../assets/about/react.png"
    },
    // * Node
    {
      name: 'Node',
      rating: 4,
      image: 'nodeicon.png',
      imgsrc: "../assets/about/nodeicon.png"
    },
    // * Express
    {
      name: 'Express',
      rating: 4,
      image: 'express.png',
      imgsrc: "../assets/about/express.png"
    },
    // * MongoDB
    {
      name: 'MongoDB',
      rating: 4,
      image: 'mongodb.png',
      imgsrc: "../../assets/about/mongodb.png"
    },
    // * Python
    {
      name: 'Python',
      rating: 3,
      image: 'python.png',
      imgsrc: "../../assets/about/python.png"
    },
    // * Html
    {
      name: 'Html',
      rating: 5,
      image: 'html.png',
      imgsrc: "../../assets/about/html.png"
    },
    // * Css
    {
      name: 'Css',
      rating: 5,
      image: 'css.png',
      imgsrc: "../../assets/about/css.png"
    },
    // * Javascript
    {
      name: 'Javascript',
      rating: 5,
      image: 'javascript.png',
      imgsrc: "../../assets/about/javascript.png"
    },
    // * Typescript
    {
      name: 'Typescript',
      rating: 5,
      image: 'ts.png',
      imgsrc: "../../assets/about/ts.png"
    },
  ];

  markers = [
    {
      lngLat: [-75.1114726, 39.99314916],
      color: "#FF0000",
      popup: 'Theft',
    },
    {
      lngLat: [-75.26548788, 39.97720933],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.14373638, 39.98073864],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.12331078, 39.99613569],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.1169958, 40.02549954],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.1876692, 39.91772028],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.1876692, 39.91772028],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.19187073, 40.01308537],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.1487866, 40.01727976],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.15850645, -75.15850645],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-75.17425393, 40.00509106],
      color: 'red',
      popup: 'Theft',
    },
    {
      lngLat: [-74.98925647, 40.06713651],
      color: 'red',
      popup: 'Theft',
    },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },
    // {
    //   lngLat: [, ],
    //   color: 'red',
    //   popup: 'Theft',
    // },

  ]

  mapGeoJson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.1114726, 39.99314916],
        },
        properties: {
          title: 'Theft',
          description: 'Washington, D.C.',
          color: '#7b5fac',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.26548788, 39.97720933],
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
          color: '#7b5fac',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.14373638, 39.98073864],
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
          color: '#7b5fac'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.12331078, 39.99613569],
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
          color: '#7b5fac'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.1169958, 40.02549954],
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
          color: '#7b5fac'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.1876692, 39.91772028],
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
          color: '#7b5fac'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.19187073, 40.01308537],
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
          color: '#7b5fac'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.1377865, 39.91963731],
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
          color: '#7b5fac'
        },
      },
    ],
  };

  getArray(count: number) {
    return new Array(count);
  }

  //  * Submit form
  onSubmit() {
    console.log(this.contactForm.value);

    // * Variable to hold the response
    const response = '';

    const email = this.contactForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post(
        'https://formspree.io/xaykojad',
        { name: email.name, replyto: email.email, message: email.message },
        { headers: headers }
      )
      .subscribe((response) => {
        console.log(response);

        // * If the response is successful alert the user
        if (response) {
          // * Redirect to thank you page
          window.location.href = '/thank-you';
        }
      });
  }

}
