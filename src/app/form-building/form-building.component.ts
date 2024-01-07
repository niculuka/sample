import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-building',
  templateUrl: './form-building.component.html',
  styleUrls: ['./form-building.component.css']
})
export class FormBuildingComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]      
    });
  }

  submit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) return;

    alert(`email: ${this.loginForm.controls['email'].value},
          password: ${this.loginForm.controls['password'].value}`);
  }

}
