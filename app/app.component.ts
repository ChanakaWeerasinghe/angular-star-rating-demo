import { Component } from '@angular/core';
import { RatingModule } from 'ng-starrating';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  totalstar = 10;
}
