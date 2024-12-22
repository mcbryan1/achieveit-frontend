import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ImagesService } from '../../../services/general/images.service';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  @Input() message!: string;
  @Output() onClose = new EventEmitter<void>();
  _images = inject(ImagesService)



  closeToast() {
    this.onClose.emit();
  }
}
