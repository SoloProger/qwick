import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'add-file-icon',
  template: ` <svg
    width="9"
    height="15"
    viewBox="0 0 9 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.620361 5.00866V10.0649C0.620361 11.0595 1.01545 12.0133 1.71871 12.7166C2.42197 13.4198 3.3758 13.8149 4.37036 13.8149C5.36492 13.8149 6.31875 13.4198 7.02201 12.7166C7.72527 12.0133 8.12036 11.0595 8.12036 10.0649V3.81491C8.12036 3.15187 7.85697 2.51598 7.38813 2.04714C6.91929 1.5783 6.2834 1.31491 5.62036 1.31491C4.95732 1.31491 4.32144 1.5783 3.85259 2.04714C3.38375 2.51598 3.12036 3.15187 3.12036 3.81491V9.55366C3.12036 9.71781 3.15269 9.88036 3.21551 10.032C3.27833 10.1837 3.3704 10.3215 3.48648 10.4375C3.60255 10.5536 3.74035 10.6457 3.89201 10.7085C4.04366 10.7713 4.20621 10.8037 4.37036 10.8037V10.8037C4.70188 10.8037 5.01982 10.672 5.25424 10.4375C5.48867 10.2031 5.62036 9.88518 5.62036 9.55366V5.06491"
      [attr.stroke]="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFileIconComponent {
  @Input()
  public color = '#A9ABBA';

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.color = '#4F8BE4';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.color = '#A9ABBA';
  }
}
