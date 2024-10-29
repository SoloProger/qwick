import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  template: `
    <label class="switch">
      <input
        type="checkbox"
        [value]="value"
        (input)="update($event)"
        [disabled]="disabled"
      />
      <span class="slider round"></span>
    </label>
  `,
  standalone: true,
  styleUrl: './switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SwitchComponent),
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  public value: boolean = false;

  public onChange = (value: boolean) => {};

  public onTouched = () => {};

  public touched = false;

  public disabled = false;

  public writeValue(v: boolean): void {
    this.value = v;
  }

  public registerOnChange(onChange: (v: boolean) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public update(event: Event): void {
    const value = (event.target as HTMLInputElement).checked;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
