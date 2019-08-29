import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  info:any;
  constructor(private route:Router, private http:HttpClient) { }

  ngOnInit() {
   this.http.get('http://localhost:8000/api/test').subscribe(data=>this.info= data);
  }

    onSubmit(department){
        this.route.navigate(['/view',department.id,department.price]);
    }

}
