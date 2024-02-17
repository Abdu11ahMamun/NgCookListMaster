import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgCookListMaster';
  loadedFeatures = 'recipe';

  OnNavigate(feature: string) { 
    this.loadedFeatures= feature; 
 }
}
