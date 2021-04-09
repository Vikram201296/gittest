import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgetpasswordComponent } from "./forgetpassword/forgetpassword.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes:Routes =[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forgetpassword',component:ForgetpasswordComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule{

}