import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-job-posting',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <form [formGroup]="queryJobPostForm" (ngSubmit)="onSubmit()" class="filter-form">
          <ul class="list-group">            
            <li class="list-group-item">
              <label>Job post:: </label>
              <input class="form-control" type="text" formControlName="post" placeholder="Post: Java, ReactJS, NodeJs, etc.">
            </li>            
            <li class="list-group-item">
              <button class="btn btn-primary btn-lg" type="submit"> Load Job </button>
            </li>
          </ul>
        </form>
      </div>
    </div>      
  </div>
`,
  styles: ['']
})
export class QueryJobPostingComponent implements OnInit {
  queryJobPostForm: FormGroup;
  post: any;  
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    if(!this.authService.mnemonic) {
      this.router.navigate(['/login']);
      return;
    }    
    this.queryJobPostForm = this.fb.group({
      post: new FormControl(this.post),
    })
  }

  onSubmit() {
    console.log(this.queryJobPostForm.value);
  }
}
