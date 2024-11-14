import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordIconComponent } from '../shared/ui/icons/password-icon.component';
import { BurgerIconComponent } from '../shared/ui/icons/burger-icon.component';
import { SwitchComponent } from '../shared/ui/switch/switch.component';
import { PhoneIconComponent } from '../shared/ui/icons/phone-icon.component';
import { SmsIconComponent } from '../shared/ui/icons/sms-icon.component';
import { KeyIconComponent } from '../shared/ui/icons/key-icon.component';
import { EditIconComponent } from '../shared/ui/icons/edit-icon.component';
import { AIconComponent } from '../shared/ui/icons/a-icon.component';
import { AddFileIconComponent } from '../shared/ui/icons/add-file-icon.component';
import { AddFileComponent } from '../shared/ui/add-file/add-file.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PasswordIconComponent,
    BurgerIconComponent,
    SwitchComponent,
    PhoneIconComponent,
    SmsIconComponent,
    KeyIconComponent,
    EditIconComponent,
    AIconComponent,
    AddFileIconComponent,
    AddFileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
