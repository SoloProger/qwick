import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-wallet-icon',
  template: `
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path d="M7.38055 10.1641H5.71389V13.4974H7.38055V10.1641Z" [attr.fill]="color"/>
        <path
          d="M4.04718 5.9974V4.33073C4.04718 3.41156 4.79468 2.66406 5.71385 2.66406H16.5472C17.9255 2.66406 19.0472 3.78573 19.0472 5.16406V15.1641C19.0472 16.9982 17.5522 17.6641 16.5472 17.6641H4.04718C3.12801 17.6641 2.38051 16.9166 2.38051 15.9974V7.66406C2.38051 6.7449 3.12801 5.9974 4.04718 5.9974ZM16.5472 4.33073H5.71385V5.9974H16.5472C16.7617 5.9878 16.9643 5.89581 17.1128 5.74058C17.2612 5.58535 17.3441 5.37884 17.3441 5.16406C17.3441 4.94928 17.2612 4.74278 17.1128 4.58755C16.9643 4.43232 16.7617 4.34033 16.5472 4.33073ZM4.04718 15.9974H16.5372C16.9222 15.9874 17.3805 15.8349 17.3805 15.1641V7.5099C17.1188 7.60406 16.8413 7.66406 16.5472 7.66406H4.04718V15.9974Z"
          [attr.fill]="color"/>
      </g>
    </svg>

  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletIconComponent {
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
