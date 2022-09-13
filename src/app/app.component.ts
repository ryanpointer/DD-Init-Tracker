import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D&D Initiative Tracker';

  constructor(private router: Router){}

  ngOnInit(){

    this.router.navigate(['/app-title']);

  }

  hasRoute(route: string){
    return this.router.url.includes(route);
  }
}
