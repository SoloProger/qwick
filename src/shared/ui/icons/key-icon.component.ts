import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-key-icon',
  template: `<svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.97247 1.2757C4.01482 1.47087 3.12849 1.92337 2.40874 2.58453C1.68899 3.24569 1.16305 4.09052 0.887468 5.0282C0.632154 5.88795 0.594156 6.79757 0.777031 7.67632C1.04137 8.88026 1.70657 9.9588 2.66375 10.7354C3.62093 11.512 4.8134 11.9407 6.04597 11.9513C6.56609 11.9513 7.08384 11.8765 7.58141 11.7257L8.53141 12.8396L8.98147 13.0474H10.1393V14.8286L10.733 15.4224H12.5143V17.2036L13.108 17.7974H16.6705L17.2643 17.2036V14.4641L17.0909 14.0449L11.1843 8.13826C11.3519 7.59833 11.4321 7.03507 11.4218 6.46982C11.411 5.67899 11.2258 4.90028 10.8795 4.18921C10.5333 3.47814 10.0344 2.85221 9.41845 2.35605C8.80253 1.85989 8.08474 1.50571 7.31624 1.31876C6.54775 1.13182 5.74747 1.11671 4.97247 1.27451V1.2757ZM3.40734 9.8257C2.66137 9.22162 2.14261 8.38215 1.93603 7.44476L1.93128 7.4507C1.78415 6.76527 1.81063 6.05395 2.0083 5.38136C2.20597 4.70877 2.56857 4.09624 3.06315 3.59941C3.55774 3.10258 4.16863 2.73722 4.84032 2.53651C5.512 2.3358 6.2232 2.30611 6.90928 2.45013C7.8346 2.65551 8.66461 3.16455 9.26716 3.89622C9.86971 4.62788 10.2101 5.5401 10.2343 6.48763C10.2462 7.02913 10.1512 7.56588 9.95047 8.06701L10.0811 8.71182L16.0768 14.7099V16.6099H13.7018V14.8286L13.108 14.2349H11.3268V12.4536L10.733 11.8599H9.25459L8.21434 10.6534L7.54816 10.4871C7.06795 10.6748 6.55679 10.7707 6.04122 10.7698C5.08169 10.7624 4.15307 10.4296 3.40734 9.8257ZM4.40247 6.58145C4.30884 6.45207 4.24227 6.30513 4.20674 6.14943C4.17121 5.99373 4.16745 5.83246 4.19569 5.67527C4.22393 5.51809 4.28359 5.36821 4.37109 5.23461C4.45859 5.10101 4.57214 4.98644 4.70495 4.89774C4.83776 4.80904 4.98709 4.74804 5.14402 4.71839C5.30095 4.68874 5.46224 4.69105 5.61826 4.72518C5.77427 4.75931 5.9218 4.82456 6.05201 4.91703C6.18223 5.00949 6.29245 5.12727 6.37609 5.26332C6.53699 5.52503 6.5902 5.83891 6.52455 6.13903C6.45889 6.43914 6.27948 6.70214 6.02401 6.87276C5.76854 7.04338 5.45688 7.10836 5.1545 7.05404C4.85213 6.99972 4.58258 6.83032 4.40247 6.58145Z"
      [attr.fill]="color"
      stroke="#979DBB"
      stroke-width="0.5"
    />
  </svg> `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyIconComponent {
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
