import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-query-experience',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <form [formGroup]="queryExperienceForm" (ngSubmit)="onSubmit()" class="filter-form">
          <ul class="list-group">            
            <li class="list-group-item">
              <label>Employee Experience: </label>
              <input class="form-control" type="text" formControlName="years" placeholder="Years">
            </li>
            <li class="list-group-item">
              <label>Experience in: </label>
              <input class="form-control" type="text" formControlName="skill" placeholder="Skill: Java, MySQL, etc.">
            </li>            
            <li class="list-group-item">
              <button class="btn btn-primary btn-lg" type="submit"> Load experience </button>
            </li>
          </ul>
        </form>
      </div>
    </div>      
  </div>
  `,
  styles: ['']
})
export class QueryExperienceComponent implements OnInit {
  queryExperienceForm: FormGroup;
  years: any;
  skill: any;
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
    this.queryExperienceForm = this.fb.group({
      skill: new FormControl(this.skill),
      years: new FormControl(this.years)      
    })
  }
  
  onSubmit() {
    console.log(this.queryExperienceForm.value);
  }
}
