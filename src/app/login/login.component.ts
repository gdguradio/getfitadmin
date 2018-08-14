import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface myData{
  obj: Object
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault();
    const  target = event.target;
    const username = target.querySelector('#inputEmail').value;
    const password = target.querySelector('#inputPassword').value;
    console.log(username,password)

    this.Auth.getUserDetails(username,password).subscribe(data =>{
      console.log(data.hasOwnProperty('success').valueOf())
      if(data.success){
        this.router.navigate(['dashboard']);
        this.Auth.setLoggedIn(true);
      }else{
        window.alert(data.secret);
        
      }
    })
  }
}
