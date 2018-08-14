import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router : Router) { }

  ngOnInit() {
  }
  registerUser(event){
    event.preventDefault();
    const error= [];
    const  target = event.target;
    const username = target.querySelector('#inputEmail').value;
    const password = target.querySelector('#inputPassword').value;
    const confirmpassword = target.querySelector('#inputConfirmPassword').value;
    console.log(username,password)

    // this.Auth.getUserDetails(username,password).subscribe(data =>{
    //   console.log(data.hasOwnProperty('success').valueOf())
    //   if(data.success){
    //     this.router.navigate(['dashboard']);
    //     this.Auth.setLoggedIn(true);
    //   }else{
    //     window.alert(data.secret);
        
    //   }
    // })
    if(password != confirm){
      error.push("Password does not match!");
    }

    if(error.length == 0){
      this.Auth.registerUser(username,password).subscribe(data=>{
        //process data
        console.log(data);
        if(data.success){
          this.router.navigate(['dashboard'])
        }
      });
    }
  }
}
