import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
    <label class="switch">
      <input
        type="checkbox"
      />
      <span class="slider round"></span>
    </label>
<!--    [value]="inputFormValue"-->
    <!--    (input)="update($event)"-->
  `,
  standalone: true,
  styleUrl: './switch.component.scss',
})
export class SwitchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
