import { Component, Input, Type } from '@angular/core';
import { icons } from './icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  template: ` <ng-container *ngComponentOutlet="currentIcon"></ng-container> `,
  standalone: true,
  imports: [CommonModule],
})
export class IconComponent {
  @Input({ required: true }) iconName!: string;
  @Input() color?: string;

  public icons: { [key: string]: Type<unknown> } = icons;

  public get currentIcon() {
    return this.icons[this.iconName];
  }
}
