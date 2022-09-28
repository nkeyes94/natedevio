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

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });
  config: any;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
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

  ngOnInit(): void {
    // * Console log the slick object
    console.log(this.slick);

  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  sconfig: Slick.Config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  techs = [
    // * Image should be from our assets folder
    // * Angular
    {
      name: 'Angular',
      rating: 5,
      image: 'angularicon.png',
    },
    // * React
    {
      name: 'React',
      rating: 4,
      image: 'react.png',
    },
    // * Node
    {
      name: 'Node',
      rating: 4,
      image: 'nodeicon.png',
    },
    // * Express
    {
      name: 'Express',
      rating: 4,
      image: 'express.png',
    },
    // * MongoDB
    {
      name: 'MongoDB',
      rating: 4,
      image: 'mongodb.png',
    },
    // * Python
    {
      name: 'Python',
      rating: 3,
      image: 'python.png',
    },
    // * Html
    {
      name: 'Html',
      rating: 5,
      image: 'html.png',
    },
    // * Css
    {
      name: 'Css',
      rating: 5,
      image: 'css.png',
    },
    // * Javascript
    {
      name: 'Javascript',
      rating: 5,
      image: 'javascript.png',
    },
    // * Typescript
    {
      name: 'Typescript',
      rating: 5,
      image: 'ts.png',
    },
  ];

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