import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-a-icon',
  template: `<svg
    width="27"
    height="28"
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5449 9.37997H13.4437L11.6437 14.6883H15.3449L13.5449 9.37997Z"
      [attr.fill]="color"
    />
    <path
      d="M13.5 2.33333C7.29 2.33333 2.25 7.56 2.25 14C2.25 20.44 7.29 25.6667 13.5 25.6667C19.71 25.6667 24.75 20.44 24.75 14C24.75 7.56 19.71 2.33333 13.5 2.33333ZM16.875 19.145L15.9975 16.555H11.0025L10.1137 19.145C9.97875 19.5533 9.59625 19.8333 9.18 19.8333C9.0186 19.8333 8.8596 19.7928 8.71665 19.715C8.5737 19.6373 8.45106 19.5248 8.35924 19.3872C8.26743 19.2495 8.20918 19.0908 8.1895 18.9247C8.16982 18.7585 8.1893 18.5899 8.24625 18.4333L12.0037 8.07333C12.1178 7.75725 12.3221 7.48481 12.5895 7.29247C12.8569 7.10013 13.1746 6.99707 13.5 6.99707C13.8254 6.99707 14.1431 7.10013 14.4105 7.29247C14.6779 7.48481 14.8822 7.75725 14.9963 8.07333L18.7537 18.4333C19.0012 19.11 18.5175 19.8333 17.82 19.8333C17.3925 19.8333 17.01 19.5533 16.875 19.145Z"
      [attr.fill]="color"
    />
  </svg> `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AIconComponent {
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
