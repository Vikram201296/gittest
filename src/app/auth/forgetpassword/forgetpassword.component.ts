import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  show:boolean = false;
  public confirmpassForm: FormGroup;
  public errorMessage: any;
  public phoneNumber:FormControl;

  


  constructor(private fb: FormBuilder,private authservice:Authservice,private router:Router) {
    this.phoneNumber = new FormControl('',Validators.required); 
    this.confirmpassForm = fb.group({
      OTP: ['', Validators.required],
      OTP2: ['', Validators.required],
      OTP3: ['', Validators.required],
      password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    });

  }

  ngOnInit() {
    // var forguser:string =localStorage.getItem('forgetUser');
    // this.phoneNumber.setValue(forguser);
    this.getPhoneorMail();
  }
  getPhoneorMail(){
    this.authservice.testsubject.subscribe(
      res => {
        debugger
        this.phoneNumber.setValue(res)

      }
     )
  }

  showPassword(){
    this.show = !this.show;
  }
  done(){
    this.router.navigate(['auth/login']);
  }
  sendResetMail(){
    let data = {"requestType":"PASSWORD_RESET","email":this.phoneNumber.value}
    this.authservice.SendPassMail(data).subscribe(
      resdat=>{
        console.log(resdat);
      },
      errorMessage=>{
        console.log(errorMessage);
      }
    )
  }

}
