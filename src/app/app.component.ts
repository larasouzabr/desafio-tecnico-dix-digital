import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CookieNoticeComponent } from './core/components/cookie-notice/cookie-notice.component';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './core/components/aside/aside.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NewsletterComponent } from './core/components/newsletter/newsletter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    CookieNoticeComponent,
    AsideComponent,
    FooterComponent,
    NewsletterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portal-de-noticias';
  isHomeRoute: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isHomeRoute = this.router.url === '/home'; 
    });
  }
}
