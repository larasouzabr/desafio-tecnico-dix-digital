import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { CookieNoticeComponent } from "./core/components/cookie-notice/cookie-notice.component";
import { CommonModule } from '@angular/common';
import { AsideComponent } from "./core/components/aside/aside.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, CookieNoticeComponent, AsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portal-de-noticias';
}
