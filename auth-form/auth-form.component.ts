import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

    login: string;
    password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  Ok() {
    document.getElementById("Auth").style.display="none";
    this.router.navigate(['people']);
    
    
  }


}
