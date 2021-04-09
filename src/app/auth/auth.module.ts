import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[LoginComponent,RegisterComponent, ForgetpasswordComponent],
    imports:[AuthRoutingModule,CommonModule,ReactiveFormsModule,FormsModule],
    exports:[CommonModule]
})
export class Authmodule{

}