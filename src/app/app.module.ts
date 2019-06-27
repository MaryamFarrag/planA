import { WeddingBoardComponent } from './wedding-board/wedding-board.component';
import { VacationBoardComponent } from './vacation-board/vacation-board.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkBoardComponent } from './work-board/work-board.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShowPlaceComponent } from './show-place/show-place.component';
import { ShowWorkPlaceComponent } from './show-work-place/show-work-place.component';
import { ShowVacationPlaceComponent } from './show-vacation-place/show-vacation-place.component'; 

const appRoutes:Routes =[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'wedding-board',component:WeddingBoardComponent},
  {path:'vacation-board',component:VacationBoardComponent},
  {path:'work-board',component:WorkBoardComponent},
  {path: 'show-place/:id', component: ShowPlaceComponent},
  {path: 'show-work-place/:id', component: ShowWorkPlaceComponent},
  {path: 'show-vacation-place/:id', component: ShowVacationPlaceComponent}


  ]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    WeddingBoardComponent,
    VacationBoardComponent,
    WeddingBoardComponent,
    WorkBoardComponent,
    ShowPlaceComponent,
    ShowWorkPlaceComponent,
    ShowVacationPlaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgwWowModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
