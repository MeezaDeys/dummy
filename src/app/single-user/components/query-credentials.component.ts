import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-query-credentials',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <form [formGroup]="queryCredentialsForm" (ngSubmit)="onSubmit()" class="filter-form">
          <ul class="list-group">            
            <li class="list-group-item">
              <label>Status: </label>
              <input class="form-control" type="text" formControlName="status" placeholder="Status">
            </li>            
            <li class="list-group-item">
              <button class="btn btn-primary btn-lg" type="submit"> Load credentials </button>
            </li>
          </ul>
        </form>
      </div>
    </div>      
  </div>
`,
  styles: []
})
export class QueryCredentialsComponent implements OnInit {
  queryCredentialsForm: FormGroup;
  status: any;  
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
    this.queryCredentialsForm = this.fb.group({
      status: new FormControl(this.status),
    })
  }

  onSubmit() {
    console.log(this.queryCredentialsForm.value);
  }
}
