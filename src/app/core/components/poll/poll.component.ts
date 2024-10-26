import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Poll } from '../../models/Poll';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css',
})
export class PollComponent {
  poll: Poll = {
    id: 1,
    question: 'Está satisfeito com o trânsito atual de Palmas?',
    options: [
      { id: 1, label: 'Bastante satisfeito', value: 'bastante' },
      { id: 2, label: 'Satisfeito', value: 'satisfeito' },
      { id: 3, label: 'Razoavelmente satisfeito', value: 'razoável' },
      { id: 4, label: 'Não estou satisfeito', value: 'insatisfeito' },
    ],
    selectedOption: '',
  };
  selectedOption: string = '';

  onVote(optionValue: string) {
    this.poll.selectedOption = optionValue;
    alert(`Opção selecionada: ${this.poll.selectedOption}`);
  }

  viewMore() {
    alert('Exibindo mais detalhes...');
  }
}
