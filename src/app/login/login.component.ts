import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router) { }

  loginForm: any;

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.authService.setAuthorized(username, password).subscribe((isAuthorized) => {
        console.log(isAuthorized);
        if (isAuthorized) {
          this.router.navigate(['/trades']);
        }
      })
    }
  }

}
