import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wakeup',
  templateUrl: './wakeup.component.html',
  styleUrls: ['./wakeup.component.css']
})
export class WakeupComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  SignIn(){
   
    this.router.navigateByUrl('login');

  }
  SignUp(){
    this.router.navigateByUrl('register');

  }
}
