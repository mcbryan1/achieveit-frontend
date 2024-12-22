import { Component, inject } from '@angular/core';
import { ImagesService } from '../../../services/general/images.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  _images = inject(ImagesService)
}
