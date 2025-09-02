import { Component } from '@angular/core';
import { Router, NavigationEnd,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'CRM-web';
  routeClass = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url.startsWith('/landingpage')) {
          this.routeClass = 'landing-page';
        } else {
          this.routeClass = 'main-page';
        }
      }
    });
  }
}
