import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BubbleLoaderComponent } from "../loaders/bubble-loader/bubble-loader.component";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [BubbleLoaderComponent, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text!: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() isLoading!: boolean
  @Input() backgroundColor!: string;
  defaultBackgroundColor: string = '#001A5E';

  constructor() { }

  handleClick() {
    this.onClick.emit();
  }
}
