import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-loader',
  imports: [],
  templateUrl: './bubble-loader.component.html',
  styleUrl: './bubble-loader.component.scss'
})
export class BubbleLoaderComponent {
  @Input() backgroundColor: string = '#fff';

}
