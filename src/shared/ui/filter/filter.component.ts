import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { FilterIconComponent } from '../icons/filter-icon.component';
import { SearchIconComponent } from '../icons/search-icon.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-filter',
  template: `
    <div class="filter-wrapper">
      <div class="wrapper">
        <app-filter-icon></app-filter-icon>
        <span class="filter-text">Фильтр</span>
      </div>
      <div class="flex ai-center jc-space w-100">
        <input
          type="text"
          class="search"
          [placeholder]="placeholder"
          [value]="value"
          (input)="update($event)"
          [disabled]="disabled"
        />
        <app-search-icon></app-search-icon>
      </div>
    </div>
  `,
  standalone: true,
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FilterIconComponent, SearchIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FilterComponent),
    },
  ],
})
export class FilterComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Поиск...';

  public value: string = '';

  public onChange = (value: string) => {};

  public onTouched = () => {};

  public touched = false;

  public disabled = false;

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public update(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
