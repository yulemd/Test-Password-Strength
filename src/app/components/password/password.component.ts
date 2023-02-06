/*import { Component } from "@angular/core";

@Component({
  selector: 'app-password',*/
  /*templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']*/
  /*template: `
   <div>
    <input type="password" [(ngModel)]="password" />
    <div>
      <div class="box" [ngClass]="{ 'red': password.length < 8, 'green': passwordStrength === 'strong'}">
        Easy
      </div>
      <div class="box" [ngClass]="{'yellow': passwordStrength === 'medium', 'green': passwordStrength === 'strong'}">
        Medium
      </div>
      <div class="box" [ngClass]="{'green': passwordStrength === 'strong'}">
        Strong
      </div>
    </div>
  </div>
  `,
  styles: [`
    .box {
      width: 50px;
      height: 20px;
      background-color: gray;
      margin-right: 5px;
    }
    .red {
      background-color: red;
    }
    .yellow {
      background-color: yellow;
    }
    .green {
      background-color: green;
    }
  `]
})
export class PasswordComponent {
  password = '';
  passwordStrength: string;

  constructor() {
    this.passwordStrength = this.calculatePasswordStrength(this.password);
  }

  calculatePasswordStrength(password: string): string {
    let strength = 'weak';
    if (password.length >= 8) {
      if (/[a-zA-Z]+/.test(password) &&
        /[0-9]+/.test(password) &&
        /[^a-zA-Z0-9]+/.test(password)) {
        strength = 'strong';
      } else if (/[a-zA-Z]+/.test(password) ||
        /[0-9]+/.test(password) ||
        /[^a-zA-Z0-9]+/.test(password)) {
        strength = 'medium';
      } else {
        strength = 'weak';
      }
    }
    return strength;
  }
}*/
import { Component } from '@angular/core';

/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
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