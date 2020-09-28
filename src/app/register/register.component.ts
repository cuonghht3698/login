import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { Observable, of } from 'rxjs';
import { AuthentService } from '../service/authent.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/login.component.css'],
})
export class RegisterComponent implements OnInit {
  dataUser;
  constructor(private fb: FormBuilder, private api: AuthentService) {}

  DataRegiter: FormGroup;

  ngOnInit(): void {
    this.api.GetUser().subscribe((data) => {
      this.dataUser = data;
    });

    this.DataRegiter = this.fb.group({
      userName: ['', Validators.compose([Validators.required])],
      passWord1: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      passWord2: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      name: ['', Validators.compose([Validators.required, Validators.min(2)])],
    });
    new FormControl('', Validators.required, this.isUserNameDuplicated);
  }
  isUserNameDuplicated(control: AbstractControl): Observable<ValidationErrors> {
    return of(null);
  }
}
