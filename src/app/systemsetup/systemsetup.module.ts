import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SytemSetupRoutingModule } from "./systemsetup-routing.module";
import { SystemsetupmainComponent } from './systemsetupmain/systemsetupmain.component';
import { RolesComponent } from './roles/roles.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { QuestionnaireactionComponent } from './questionnaireaction/questionnaireaction.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DropdownDirective } from "../shared/dropdown.directive";




@NgModule({
    imports:[CommonModule,ReactiveFormsModule,FormsModule,SytemSetupRoutingModule],
    exports:[],
    declarations: [SystemsetupmainComponent, RolesComponent, HeaderComponent, SideNavComponent, QuestionnaireactionComponent, QuestionnaireComponent,DropdownDirective]
})
export class SystemSetupModule{
    
}