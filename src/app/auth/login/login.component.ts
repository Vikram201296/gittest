import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { Authservice } from '../auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { Subscription } from 'rxjs';

export interface testi{
  name:string;
  pass:string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show:boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;
  public showprefixnumber:boolean =false;
  public isLoadig:boolean = false;
  public testvar:testi;


  constructor(private fb: FormBuilder,private authservice:Authservice,private router:Router) { 
    this.loginForm = fb.group({
      email: ['', [Validators.required,this.match]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {

    debugger;
    this.testvar = {"name":"","pass" : ""}
    this.testvar.name ="abc";
    this.testvar.pass="123";
    console.log(this.testvar);
  }
  
match(control){
  var regex= /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|^[0-9]{10,11}$/;
  var invalid = regex.test(control.value);
  if(!invalid){
    return { invalidcontrol: true };
  }
  return null;
}
  test(e){
    var charregex = /^[a-z]$/;
    var numregex = /^[0-9]$/;
    
    if(e.Key = "Backspace" && this.loginForm.value.email == ""){
      this.showprefixnumber = false;
    }
    if(charregex.test(e.key)){
      this.showprefixnumber = false;
    }
   else if(numregex.test(e.key)){
      var text = this.loginForm.value.email;
      if(text.length == 1){
        this.showprefixnumber = true;
      }
    }
    
  }  

  showPassword(){
    this.show = !this.show;
  }
  sendmailorphone(){
    if(this.loginForm.value.email == ""){
      Swal.fire({  
        icon: 'error',  
        title: 'Oops...',  
        text: 'Enter valid email or Phone number!',  
      })  
     
    }
    else{
      // localStorage.setItem('forgetUser',this.loginForm.value.email);
      this.authservice.testsubject.next(this.loginForm.value.email);
      this.router.navigate(['auth/forgetpassword'])
    }

  }
  onLogin(){
    this.isLoadig = true;
    const credential = {"email":this.loginForm.value.email,"password":this.loginForm.value.password,"returnSecureToken":true}
    this.authservice.loginUser(credential).subscribe(resdata =>{
      console.log(resdata);
      this.isLoadig = false;
      this.router.navigate(['/systemsetup/']);
    },errormessage =>{
      this.isLoadig = false;
      console.log(errormessage);
      Swal.fire({  
        icon: 'error',  
        title: 'Oops...',  
        text: errormessage,  
      })  
    })
  }



}
