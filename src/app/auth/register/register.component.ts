import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authservice } from '../auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public show: boolean = false;
  public confirmshow: boolean = false;
  public RegForm: FormGroup;
  public errorMessage: any;

  constructor(private router:Router,private fb: FormBuilder,private authservice:Authservice) {
    this.RegForm = fb.group({
      username :['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone :['',[Validators.required]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  showPassword(){
    this.show = !this.show;
  }
  showConfirmPassword(){
    this.confirmshow = !this.confirmshow;
  }
  
  SignUp(){
    if(this.validateRegister()){
      const credential = {"email":this.RegForm.value.email,"password":this.RegForm.value.password,"returnSecureToken":true}
    this.authservice.registerUser(credential).subscribe(resdata =>{
      Swal.fire({  
        icon: 'sucess',  
        text: 'User registered sucessfully',  
      })  
      this.router.navigate(['auth/login']);
    },errormessage =>{
      Swal.fire({  
        icon: 'error',  
        title: 'Oops...',  
        text: errormessage,  
      })  
    })
    }
  }

  validateRegister(){
    if(this.RegForm.value.password != this.RegForm.value.confirmpassword){
      Swal.fire({  
        icon: 'error',  
        text: 'Password and Confirm Password mismatched!',  
      });
      return false;
    }
    else{
      return true;
    }
  }

}
