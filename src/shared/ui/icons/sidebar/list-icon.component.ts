import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-list-icon',
  template: `
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path
          d="M18.6857 6.51216L13.6545 1.69966C13.5107 1.56216 13.367 1.49341 13.1514 1.49341H5.96387C5.17324 1.49341 4.52637 2.11216 4.52637 2.86841V19.3684C4.52637 20.1247 5.17324 20.7434 5.96387 20.7434H17.4639C18.2545 20.7434 18.9014 20.1247 18.9014 19.3684V6.99341C18.9014 6.78716 18.8295 6.64966 18.6857 6.51216ZM13.1514 3.14341L17.1764 6.99341H13.1514V3.14341ZM17.4639 19.3684H5.96387V2.86841H11.7139V6.99341C11.7139 7.74966 12.3607 8.36841 13.1514 8.36841H17.4639V19.3684Z"
          [attr.fill]="color"/>
        <path
          d="M7.40137 15.9309C7.40137 15.5512 7.70917 15.2434 8.08887 15.2434H15.3389C15.7186 15.2434 16.0264 15.5512 16.0264 15.9309C16.0264 16.3106 15.7186 16.6184 15.3389 16.6184H8.08887C7.70917 16.6184 7.40137 16.3106 7.40137 15.9309Z"
          [attr.fill]="color"/>
        <path
          d="M7.40137 11.8059C7.40137 11.4262 7.70917 11.1184 8.08887 11.1184H15.3389C15.7186 11.1184 16.0264 11.4262 16.0264 11.8059C16.0264 12.1856 15.7186 12.4934 15.3389 12.4934H8.08887C7.70917 12.4934 7.40137 12.1856 7.40137 11.8059Z"
          [attr.fill]="color"/>
      </g>
    </svg>

  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListIconComponent {
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
