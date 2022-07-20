import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^([a-z]\\w+@[a-z]{2,}\\.)\\w{2,10}(\\.\\w{2,3})?$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^\\d{6,}$')]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  }, [this.checkConfirmPassword]);

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSubmit() {

  }

  public checkConfirmPassword(obj: AbstractControl) {
    const password = obj.get('password').value;
    const confirmPassword = obj.get('confirmPassword').value;
    if (password !== confirmPassword) {
      return {passValid: true};
    } else {
      return null;
    }
  }
}
