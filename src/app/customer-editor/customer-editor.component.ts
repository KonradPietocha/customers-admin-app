import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const currentDate = new Date();

@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.scss']
})
export class CustomerEditorComponent {
  @Input() editCustomers: boolean;

  maxBirthDate: string = `${currentDate.getFullYear() - 18}-${currentDate.getMonth()}-${currentDate.getDate()}`;
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    phone: ['', Validators.required, Validators.minLength(9)],
    eMail: ['', Validators.required, Validators.email],
    branch: this.fb.group({
      branch: ['', Validators.required],
      branchCategory: ['', Validators.required],
    })
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
