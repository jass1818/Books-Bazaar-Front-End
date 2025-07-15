import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',     
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton?.addEventListener('click', () => {
      container?.classList.add("right-panel-active");
    });

    signInButton?.addEventListener('click', () => {
      container?.classList.remove("right-panel-active");
    });
  }

  login(): void {
    this.router.navigate(['/home']);
  }

  signUp(): void {
    this.router.navigate(['/home']);
  }
}
