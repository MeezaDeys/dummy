import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-submit-credentials',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <form [formGroup]="submitCredentialsForm" (ngSubmit)="onSubmit()" class="filter-form">
          <ul class="list-group">
            <li class="list-group-item">
              <label>Issuer: </label>
              <input class="form-control" type="text" formControlName="issuer" placeholder="Issuer">
            </li>
            <li class="list-group-item">
              <label>Recipient: </label>
              <input class="form-control" type="text" formControlName="recipient" placeholder="Recipient">
            </li>
            <li class="list-group-item">
              <label>Status: </label>
              <input class="form-control" type="text" formControlName="status" placeholder="Status">
            </li>
            <li class="list-group-item">
              <label>Upload file: </label><br/>
              <label class="btn btn-default">
                Browse <input type="file" accept="image/png, image/jpeg" hidden>
              </label>
            </li>
            <li class="list-group-item">
              <button class="btn btn-primary btn-lg" type="submit"> Submit credentials </button>
            </li>
          </ul>
        </form>
      </div>
    </div>      
  </div>
`,
  styles: [`
    [hidden] {
      display: none !important;
    }
  `]
})
export class SubmitCredentialsComponent implements OnInit {
  submitCredentialsForm: FormGroup;
  issuer: any;
  recipient: any;
  status: any;
  file: any;

  public submitted:boolean = false;

  constructor(
    private fb:FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    if(!this.authService.mnemonic) {
      this.router.navigate(['/login']);
    }
    this.submitCredentialsForm = this.fb.group({
      issuer: new FormControl(this.issuer),
      recipient: new FormControl(this.recipient),
      status: new FormControl(this.status),
      file: new FormControl()
    })
  }
  
  onSubmit() {
    console.log(this.submitCredentialsForm.value);
  }
}
