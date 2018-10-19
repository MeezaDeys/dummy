import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import * as Papa  from '../../assets/js/papaparse.min.js';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css']
})
export class BulkUploadComponent implements OnInit {
  bulkUploadForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    if(!this.authService.mnemonic) {
      this.router.navigate(['/login']);
    }
    this.bulkUploadForm = this.fb.group({
      csvFile: new FormControl(),
      imgFile: new FormControl()
    });
  }

  onSubmit() {
    console.log('bunnies!');
  }

  onFileChange(event) {
    var file = event.target.files[0]; 
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        console.log(results.data);
      }
    });
  }

}
