import { Component } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';
declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ga';

  constructor(public router: Router) {   
    this.router.events.subscribe(event => {
       if(event instanceof NavigationEnd){
        console.log(event.urlAfterRedirects);
           gtag('config', 'UA-167569714-2', 
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
        }
     }
  )}
}
