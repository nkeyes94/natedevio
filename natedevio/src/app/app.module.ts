

// * Angular Imports:
// ? ------------------------------------------------------------------------------------------------------------
import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// ? ------------------------------------------------------------------------------------------------------------

// * App Imports:
// ? ------------------------------------------------------------------------------------------------------------
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// ? ------------------------------------------------------------------------------------------------------------

// * Layout & Design Imports:
// ? ------------------------------------------------------------------------------------------------------------
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import {  NgxSlickJsModule } from 'ngx-slickjs'
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ? Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatRadioModule} from '@angular/material/radio'; 

// ? PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CarouselModule } from 'primeng/carousel';
import {RadioButtonModule} from 'primeng/radiobutton';

// ? Mapbox
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
// ? ------------------------------------------------------------------------------------------------------------

// * Routing
// ? ------------------------------------------------------------------------------------------------------------
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
]
// ? ------------------------------------------------------------------------------------------------------------


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
    }),
    AngularFullpageModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    ProgressSpinnerModule,
    CarouselModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibmtleWVzIiwiYSI6ImNqeHJuaW54NDA2MXEzZm1yYnZ5dW85bGIifQ.5bp-rkNWdhNCEwHkYKt5aA'
    }),
    MatSlideToggleModule,
    RadioButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
