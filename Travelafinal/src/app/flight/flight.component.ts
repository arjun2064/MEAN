import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  fromone : Boolean;
  formtwo :Boolean;
  formthree:Boolean;
 
  constructor(private router : Router) { }

  ngOnInit() {
    this.fromone = true;
    this.formtwo = false;
    this.formthree = false; 
  }

  bookflight(){
    this.fromone = false;
    this.formtwo = true;
  }
  payto(){
    this.router.navigateByUrl('/payf');
  }
  booking(){
    this.formthree = true;
    this.fromone = false;
  }
  backto(){
    this.formthree = false;
    this.fromone =true;
  }
}
