import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() variant: 'outlined' | 'solid' = 'solid';
  @Input() color: 'red' | 'blue' = 'blue';
  @Input() onClick: (() => void) | undefined;
  colorMap = {
    red: '#CC0000',
    blue: '#008FFF',

  };

  handleClick(): void {
    if (this.onClick) {
      this.onClick();
    }
  }
  get buttonColor(): string {
    return this.colorMap[this.color];
  }
}
