import { Component, OnInit } from '@angular/core';
import { AddFileIconComponent } from '../icons/add-file-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-file',
  template: ` <div
    (mouseenter)="onChangeHoverColor('#4F8BE4', 'add-button-hover')"
    (mouseleave)="onChangeHoverColor('#A9ABBA', '')"
    class="add-file"
  >
    <add-file-icon [color]="color"></add-file-icon>
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png,image/jpeg"
      hidden
    />
    <label for="avatar" [ngClass]="['add-button', hoverStyle]"
      >Добавить файл</label
    >
  </div>`,
  styles: [
    `
      .add-button {
        font-size: 16px;
        color: #a9abba;
      }
      .add-file {
        display: flex;
        gap: 12px;
      }
      .add-button-hover {
        color: #4f8be4;
      }
    `,
  ],
  standalone: true,
  imports: [AddFileIconComponent, CommonModule],
})
export class AddFileComponent {
  public color = '#A9ABBA';

  public hoverStyle = '';

  public onChangeHoverColor(color: string, hover: string) {
    this.color = color;
    this.hoverStyle = hover;
  }
}
