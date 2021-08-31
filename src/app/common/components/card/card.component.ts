import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fb-card',
  templateUrl: './card.template.html',
  styleUrls: ['./card.scss'],
})
export class CardComponent {
  @Input() text = '';
  @Input() title = '';
  @Input() image = '';

  @Output() cardClicked = new EventEmitter<void>();

  handleClick() {
    this.cardClicked.emit();
  }
}
