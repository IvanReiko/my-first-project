import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  department_id:any;
  department_price:any;
  info:any;
  constructor(private route:ActivatedRoute,private router:Router, private http:HttpClient) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.department_id=id;
      let price = parseInt(this.route.snapshot.paramMap.get('price'));
      this.department_price=price;
      this.http.get('http://localhost:8000/api/test/'+id).subscribe(data => this.info = data);

  }

}
