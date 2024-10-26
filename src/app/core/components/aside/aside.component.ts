import { Component } from '@angular/core';
import { PollComponent } from "../poll/poll.component";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PollComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

}
