import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren:()=> import('./auth/auth.module').then(m =>m.Authmodule)},
  {path:'systemsetup',loadChildren:()=>import('./systemsetup/systemsetup.module').then(m =>m.SystemSetupModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
