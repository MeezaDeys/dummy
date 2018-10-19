import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SingleUserComponent} from "./single-user.component";
import {SingleUserService} from "./single-user.service";
import {SingleUserRoutingModule} from "./single-user-routing";
import { QueryCredentialsComponent } from './components/query-credentials.component';
import { SubmitCredentialsComponent } from './components/submit-credentials.component';
import { QueryJobPostingComponent } from './components/query-job-posting.component';
import { SubmitJobPostingComponent } from './components/submit-job-posting.component';
import { QueryExperienceComponent } from './components/query-experience.component';
import { SubmitExperienceComponent } from './components/submit-experience.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    SingleUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,        
    CommonModule,    
  ],
  declarations: [ 
    SingleUserComponent,
    SubmitExperienceComponent,
    QueryExperienceComponent,
    SubmitJobPostingComponent,
    QueryJobPostingComponent,
    SubmitCredentialsComponent,
    QueryCredentialsComponent
  ],
  providers: [ SingleUserService ]
})
export class SingleUserModule { }
