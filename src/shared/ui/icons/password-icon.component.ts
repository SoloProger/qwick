import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-password-icon',
  template: `
    @if (!isHide) {
      <svg
        width="17"
        height="12"
        viewBox="0 0 17 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.46021 0.666672C4.82384 0.666672 1.71839 2.92849 0.460205 6.12122C1.71839 9.31394 4.82384 11.5758 8.46021 11.5758C12.0966 11.5758 15.202 9.31394 16.4602 6.12122C15.202 2.92849 12.0966 0.666672 8.46021 0.666672ZM8.46021 9.75758C6.45293 9.75758 4.82384 8.12849 4.82384 6.12122C4.82384 4.11394 6.45293 2.48485 8.46021 2.48485C10.4675 2.48485 12.0966 4.11394 12.0966 6.12122C12.0966 8.12849 10.4675 9.75758 8.46021 9.75758ZM8.46021 3.9394C7.25293 3.9394 6.27839 4.91394 6.27839 6.12122C6.27839 7.32849 7.25293 8.30303 8.46021 8.30303C9.66748 8.30303 10.642 7.32849 10.642 6.12122C10.642 4.91394 9.66748 3.9394 8.46021 3.9394Z"
          [attr.fill]="color"
        />
      </svg>
    } @else {
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.221558" width="16" height="16" rx="8" fill="#4D4D4D" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.40572 5.18416C5.16017 5.42971 5.16017 5.82782 5.40572 6.07337L7.33235 8L5.40572 9.92663C5.16017 10.1722 5.16017 10.5703 5.40572 10.8158C5.65127 11.0614 6.04938 11.0614 6.29493 10.8158L8.22156 8.88921L10.1482 10.8158C10.3937 11.0614 10.7918 11.0614 11.0374 10.8158C11.2829 10.5703 11.2829 10.1722 11.0374 9.92663L9.11077 8L11.0374 6.07337C11.2829 5.82782 11.2829 5.42971 11.0374 5.18416C10.7918 4.93861 10.3937 4.93861 10.1482 5.18416L8.22156 7.11079L6.29493 5.18416C6.04938 4.93861 5.65127 4.93861 5.40572 5.18416Z"
          fill="white"
        />
      </svg>
    }
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordIconComponent {
  @Input() isHide: boolean = false;

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
