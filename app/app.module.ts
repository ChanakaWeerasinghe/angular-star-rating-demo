import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 import { AppComponent } from './app.component';
import {StarRatingModule} from 'angular-star-rating';
import { RatingModule } from 'ng-starrating';
 

@NgModule({
  imports:      [ BrowserModule, FormsModule,RatingModule, StarRatingModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
