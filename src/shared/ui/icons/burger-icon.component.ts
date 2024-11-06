import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-burger-icon',
  template: `
    <svg
      width="5"
      height="17"
      viewBox="0 0 5 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.46018" cy="2.38548" r="2.3491" [attr.fill]="color" />
      <circle cx="2.46018" cy="14.131" r="2.3491" [attr.fill]="color" />
    </svg>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerIconComponent {
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
