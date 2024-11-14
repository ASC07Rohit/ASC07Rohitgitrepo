import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  email:string = ' ';
  password:string = '';

  constructor(private fb:FormBuilder, private router: Router){  }

  ngOnInit(): void {
  }

  onSubmit():void{
    const email = "rohit@gmail.com";
    const password = '123';

    if(this.email === email && this.password === password){
      sessionStorage.setItem('loggedin','yes');
      this.router.navigate(['/']);
    }else{
      alert("Invalid credential");
    }
  }
}
