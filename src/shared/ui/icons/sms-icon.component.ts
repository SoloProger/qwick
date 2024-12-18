import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sms-icon',
  template: `<svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.2369 15.8137H2.57027C2.08404 15.8137 1.61773 15.6117 1.27391 15.2523C0.930093 14.8928 0.736938 14.4053 0.736938 13.897V2.31362C0.757502 1.81988 0.959697 1.35353 1.30131 1.01192C1.64292 0.670314 2.09755 0.479864 2.57027 0.480332H17.2369C17.7232 0.480332 18.1895 0.682266 18.5333 1.04171C18.8771 1.40116 19.0703 1.88867 19.0703 2.397V13.897C19.0703 14.4053 18.8771 14.8928 18.5333 15.2523C18.1895 15.6117 17.7232 15.8137 17.2369 15.8137ZM2.57027 4.18717V13.897H17.2369V4.18717L9.90361 9.297L2.57027 4.18717ZM3.30361 2.397L9.90361 6.997L16.5036 2.397H3.30361Z"
      [attr.fill]="color"
    />
  </svg> `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmsIconComponent {
  public color = '#979DBB';

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.color = '#4F8BE4';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.color = '#979DBB';
  }
}
