import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-cookie-notice',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cookie-notice.component.html',
  styleUrl: './cookie-notice.component.css'
})
export class CookieNoticeComponent {
  isVisible: boolean = false;

  acceptCookies() {
    this.isVisible = false;
  }
}
