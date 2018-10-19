import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-submit-experience',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <form [formGroup]="submitExperienceForm" (ngSubmit)="onSubmit()" class="filter-form">
          <ul class="list-group">
            <li class="list-group-item">
              <label>Employee Address: </label>
              <input class="form-control" type="text" formControlName="address" placeholder="Employee Address">
            </li>
            <li class="list-group-item">
              <label>Employee Experience: </label>
              <input class="form-control" type="text" formControlName="years" placeholder="Years">
            </li>
            <li class="list-group-item">
              <label>Experience in: </label>
              <input class="form-control" type="text" formControlName="skill" placeholder="Skill: Java, MySQL, etc.">
            </li>            
            <li class="list-group-item">
              <button class="btn btn-primary btn-lg" type="submit"> Submit experience </button>
            </li>
          </ul>
        </form>
      </div>
    </div>      
  </div>
`,
  styles: ['']
})
export class SubmitExperienceComponent implements OnInit {
  submitExperienceForm: FormGroup;
  years: any;
  skill: any;
  address: any;
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
    this.submitExperienceForm = this.fb.group({
      address: new FormControl(this.address),
      skill: new FormControl(this.skill),
      years: new FormControl(this.years)      
    })
  }
  
  onSubmit() {
    console.log(this.submitExperienceForm.value);
  }
}
