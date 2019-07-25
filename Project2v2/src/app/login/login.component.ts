import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../user.model';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginForm: FormGroup;
  username:string;
  password:string;
  currUser:User;
  userObject:Object;

  constructor(
    private loginService : LoginService
    //private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    /*
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });*/
  }

  //get f() { return this.loginForm.controls; }

  /*
  onSubmit(){
    this.username = this.f.username.value;
    this.password = this.f.password.value;
    console.log("Username: "+this.username);
    console.log("Password: "+this.password);
    this.doLogin(this.username,this.password);
  }*/

  doLogin(username:string,password:string){
    return this.loginService.doLogin(username,password).subscribe(data => this.userObject = data);
  }

}
