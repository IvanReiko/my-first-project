import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

import {NewService} from '../../services/new/new.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  employ:any;

  constructor(private __service: NewService) {
    console.log('test constuctor');
  }

  ngOnInit() {
      console.log('test ngInit');
  }

    ngOnChanges(changes : SimpleChanges) {
        console.log(1);
        console.log(changes);
    }

  infoUser(email,value)
  {
      this.__service.getEmploy(email,value).subscribe(data=>this.employ= data);
      console.log(this.employ);
      return false;
  }



}
