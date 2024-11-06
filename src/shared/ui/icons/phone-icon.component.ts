import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-phone-icon',
  template: ` <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5868 10.4156C13.5017 10.3304 13.4007 10.2628 13.2895 10.2167C13.1783 10.1706 13.0591 10.1468 12.9387 10.1468C12.8183 10.1468 12.6991 10.1706 12.5879 10.2167C12.4767 10.2628 12.3757 10.3304 12.2906 10.4156L10.8295 11.8767C10.152 11.6751 8.88795 11.2167 8.08678 10.4156C7.28562 9.61442 6.82728 8.35033 6.62562 7.67292L8.08678 6.21175C8.17198 6.12669 8.23958 6.02567 8.2857 5.91447C8.33181 5.80326 8.35555 5.68405 8.35555 5.56367C8.35555 5.44328 8.33181 5.32407 8.2857 5.21286C8.23958 5.10166 8.17198 5.00064 8.08678 4.91558L4.42012 1.24892C4.33506 1.16372 4.23404 1.09612 4.12284 1.05C4.01163 1.00389 3.89242 0.980148 3.77203 0.980148C3.65165 0.980148 3.53244 1.00389 3.42123 1.05C3.31003 1.09612 3.20901 1.16372 3.12395 1.24892L0.637951 3.73492C0.289618 4.08325 0.0934511 4.56175 0.100784 5.05033C0.121868 6.35567 0.467451 10.8895 4.04062 14.4627C7.61378 18.0358 12.1476 18.3805 13.4539 18.4025H13.4795C13.9635 18.4025 14.421 18.2118 14.7675 17.8653L17.2535 15.3793C17.3387 15.2943 17.4062 15.1933 17.4524 15.0821C17.4985 14.9708 17.5222 14.8516 17.5222 14.7312C17.5222 14.6109 17.4985 14.4917 17.4524 14.3804C17.4062 14.2692 17.3387 14.1682 17.2535 14.0832L13.5868 10.4156ZM13.4704 16.5682C12.3264 16.549 8.4122 16.2419 5.33678 13.1656C2.25128 10.0801 1.95245 6.15217 1.93412 5.03108L3.77203 3.19317L6.14254 5.56367L4.95728 6.74892C4.84954 6.85658 4.77032 6.98939 4.72679 7.13535C4.68326 7.28131 4.67678 7.43582 4.70795 7.58492C4.72995 7.69033 5.26803 10.1901 6.7897 11.7117C8.31137 13.2334 10.8111 13.7715 10.9165 13.7935C11.0655 13.8255 11.2202 13.8196 11.3663 13.7762C11.5124 13.7328 11.6452 13.6533 11.7525 13.5451L12.9387 12.3598L15.3092 14.7303L13.4704 16.5682Z"
      [attr.fill]="color"
    />
  </svg>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneIconComponent {
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
