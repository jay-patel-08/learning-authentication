import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Users } from 'src/app/model/users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}

  myForm: FormGroup = new FormGroup({});
  users: Users[] = [];

  loginProcess(x: FormGroup): void {
    console.log('Sending the request to get the data');
    console.log(x.value);
    const userData: Users = x.value;
    userData.id = this.users.length++;
    console.log(userData);
    this.authService.sendData(userData).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.authService.getData().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }
}
