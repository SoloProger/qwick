import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-report-icon',
  template: `
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path
          d="M14.4024 3.05615H16.2778C16.7752 3.05615 17.2523 3.25374 17.604 3.60545C17.9557 3.95716 18.1533 4.43417 18.1533 4.93156V16.184C18.1533 16.6814 17.9557 17.1584 17.604 17.5102C17.2523 17.8619 16.7752 18.0594 16.2778 18.0594H10.9357"
          [attr.stroke]="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.02539 11.4954V15.2462H1.27457" [attr.stroke]="color" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path
          d="M5.02541 8.68239V4.93157C5.02541 4.43418 5.223 3.95716 5.57471 3.60545C5.92642 3.25374 6.40344 3.05615 6.90083 3.05615H8.77625"
          [attr.stroke]="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path
          d="M10.6516 1.18066H12.5271C13.5628 1.18066 14.4025 2.02031 14.4025 3.05608C14.4025 4.09184 13.5628 4.93149 12.5271 4.93149H10.6516C9.61588 4.93149 8.77623 4.09184 8.77623 3.05608C8.77623 2.02031 9.61588 1.18066 10.6516 1.18066Z"
          [attr.stroke]="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path
          d="M5.02542 18.997C2.9539 18.997 1.2746 17.3177 1.2746 15.2462C1.2746 13.1747 2.9539 11.4954 5.02542 11.4954C7.09694 11.4954 8.77625 13.1747 8.77625 15.2462C8.77625 17.3177 7.09694 18.997 5.02542 18.997Z"
          [attr.stroke]="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.4025 8.68237H10.6516" [attr.stroke]="color" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M14.4025 12.4331H11.5893" [attr.stroke]="color" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
      </g>
    </svg>

  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportIconComponent {
  public color = '#fff';

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.color = '#3A78F2';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.color = '#fff';
  }
}
