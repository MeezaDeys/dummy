import {Component} from '@angular/core';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls:['./full-layout.component.scss']
})
export class FullLayoutComponent{
  address: any;

  _userToggle: boolean = false;
  public toggleBarIcon:boolean=true;

  constructor(
    public authService: AuthService
  ){ }

  toggle():void{
    let self=this;
    setTimeout(()=>{
      self.toggleBarIcon=!self.toggleBarIcon;

    },500)
  }

  userToggle() {
    if(this._userToggle) {
      this._userToggle = false;
    } else {
      this._userToggle = true;
    }
  }
}
