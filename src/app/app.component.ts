import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work';
  featureLoaded="recipe";

  featureListen(feature: string){
  	this.featureLoaded=feature;
  }
}
