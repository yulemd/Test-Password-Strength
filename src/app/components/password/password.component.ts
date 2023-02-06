import { Component } from '@angular/core';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password = '';

  getPasswordStrength() {
    const length = this.password.length;

    /*if (length === 0) {
      return 'gray';
    }*/

    if ( length > 0 && length < 8) {
      return 'weak';
    }

    if (/^[a-zA-Z]+$/.test(this.password) || 
      /^[0-9]+$/.test(this.password) ||
      /^[!@#$%^&*]+$/.test(this.password)) {
      return 'easy';
    }

    if (/^[a-zA-Z0-9]+$/.test(this.password) ||
      /^[a-zA-Z!@#$%^&*]+$/.test(this.password) ||
      /^[0-9!@#$%^&*]+$/.test(this.password)) {
      return 'medium';
    }

    if (/^[a-zA-Z0-9!@#$%^&*]+$/.test(this.password)) {
      return 'strong';
    }
    return 'gray';
  }
}