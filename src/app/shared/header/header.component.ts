import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  links:Array<any> = [
    {name: 'trade', path: '/trades'},
    {name: 'transfers', path: '/transfers'},
    {name: 'transports', path: '/transports'}];

  userName:string = "";

  ngOnInit() {
    this.authService.getAuthUser().subscribe((user) => {
      console.log(user);
      if (user) {
        this.userName = user;
      } else {
        console.log("test");
        this.router.navigate(['/login']);
      }    
    });
  }

  logout() {
    this.authService.logout();
  }
}
