import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryCredentialsComponent } from './components/query-credentials.component';
import { SubmitCredentialsComponent } from './components/submit-credentials.component';
import { QueryJobPostingComponent } from './components/query-job-posting.component';
import { SubmitJobPostingComponent } from './components/submit-job-posting.component';
import { QueryExperienceComponent } from './components/query-experience.component';
import { SubmitExperienceComponent } from './components/submit-experience.component';
import {SingleUserComponent} from "./single-user.component";

const routes: Routes = [
  {
    path: '',
    component: SingleUserComponent
  },
  {
    path:'submit-credentials',
    component: SubmitCredentialsComponent
  },
  {
    path:'query-credentials',
    component: QueryCredentialsComponent
  },
  {
    path:'submit-job-posting',
    component: SubmitJobPostingComponent
  },
  {
    path:'query-job-posting',
    component: QueryJobPostingComponent
  },
  {
    path:'submit-experience',
    component: SubmitExperienceComponent
  },
  {
    path:'query-experience',
    component: QueryExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleUserRoutingModule {}
