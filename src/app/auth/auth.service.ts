import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators'; 

export interface AuthResponseData{
  localId: string,
  email: string,
  displayName:string,
  idToken:string,
  registered: boolean,
  refreshToken: string,
  expiresIn:string
}


@Injectable({providedIn:'root'})
export class Authservice{

    public testsubject = new BehaviorSubject<string>(null);
  
    constructor(private http:HttpClient){

    }

    loginUser(credential){
      return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4eHv50p7TbJv6tgh7tOZgj1owv8WaTC4',credential)
      .pipe(
        map((response:any)=>response),catchError(this.handleError)
        )    
    }

    registerUser(data){
      return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4eHv50p7TbJv6tgh7tOZgj1owv8WaTC4',data)
        .pipe(
            map((response:any)=>response),catchError(this.handleError)
          )
    }
    SendPassMail(data){
      return  this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC4eHv50p7TbJv6tgh7tOZgj1owv8WaTC4',data)
      .pipe(
          map((response:any)=>response),catchError(this.handleError)
        )
    }

    private handleError(errorres:HttpErrorResponse){
      debugger;
      let errormessage ="Unown Error Message";
      if(!errorres.error || !errorres.error.error ){
        return throwError(errormessage);
      }
      switch(errorres.error.error.message){
        case 'EMAIL_EXISTS':
          errormessage = "Email Already Exists!!";
          break;
        case 'EMAIL_NOT_FOUND':
            errormessage="Invalid Username!!"
            break;
            case 'INVALID_PASSWORD':
            errormessage="Invalid Password!!"
      }
      return throwError(errormessage);
    }


}