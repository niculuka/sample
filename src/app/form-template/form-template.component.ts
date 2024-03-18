import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  @ViewChild('registrationForm') form: NgForm;

  onFormSubmitted() {
    console.log(this.form)

    console.log(this.form.value.firstname)
    console.log(this.form.value.lastname)

    // console.log(this.form.controls['firstname'].value)
  }

}
