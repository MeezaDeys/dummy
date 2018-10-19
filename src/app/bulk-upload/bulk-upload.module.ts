import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { BulkUploadComponent} from "./bulk-upload.component";
import { BulkUploadService} from "./bulk-upload.service";
import { BulkUploadRoutingModule} from "./bulk-upload-routing";


@NgModule({
  imports: [
    BulkUploadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [ BulkUploadComponent],
  providers: [ BulkUploadService ]
})
export class BulkUploadModule { }
