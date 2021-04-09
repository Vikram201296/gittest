import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { QuestionnaireactionComponent } from "./questionnaireaction/questionnaireaction.component";
import { SystemsetupmainComponent } from "./systemsetupmain/systemsetupmain.component";



const routes:Routes =[
        {path:'',component:SystemsetupmainComponent,children:[
        {path:'questionnaire',component:QuestionnaireComponent},
        {path:'questionnaireaction/:id',component:QuestionnaireactionComponent},
    ]}
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SytemSetupRoutingModule{

}