import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="validator" [disabled]="disabled" class="btn">
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: `./button.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  host: {
    class: 'button',
  },
})
export class ButtonComponent {
  @Input()
  public type?: 'big' | 'small' | 'outline';

  @Input()
  public validator = 'button';

  @Input()
  public disabled = false;

  @HostBinding('class')
  public get btnStyle() {
    return this.changeBtnStyle();
  }

  public changeBtnStyle() {
    let style = '';
    switch (this.type) {
      case 'small':
        style = 'button--small';
        break;
      case 'big':
        style = 'button--big';
        break;
      case 'outline':
        style = 'button--outline';
        break;
    }

    return style;
  }
}
