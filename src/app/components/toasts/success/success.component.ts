import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ImagesService } from '../../../services/general/images.service';

@Component({
  selector: 'app-success',
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  @Input() message!: string;
  @Output() onClose = new EventEmitter<void>();
  _images = inject(ImagesService)



  closeToast() {
    this.onClose.emit();
  }
}
