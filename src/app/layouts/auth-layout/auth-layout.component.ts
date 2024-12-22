import { Component, inject } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { ImagesService } from '../../services/general/images.service';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  _images = inject(ImagesService)
}
