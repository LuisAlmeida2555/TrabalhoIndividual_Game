import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(router : Router) { this.router = router;}

  router :Router;

  ngOnInit(): void {
  }

  //Funçao para ir para o Sign In
  gotosignIn(){
    this.router.navigate(['/signin']);
  }

  //Funçao para ir para o Sign Up
  gotosignUp(){
    this.router.navigate(['/signup']);
  }
}
