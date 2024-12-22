import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  tracker = 'assets/images/illustrations/tracker.svg';
  eyeOpen = 'assets/images/icons/eye.png';
  eyeClosed = 'assets/images/icons/closed-eye.png';
  logo = 'assets/images/icons/logo.svg';
  close = 'assets/images/icons/close.svg';
  add = 'assets/images/icons/add.png';
  search = 'assets/images/icons/search.png';
}
