import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  department_id:any;
  department_price:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.department_id=id;
      let price = parseInt(this.route.snapshot.paramMap.get('price'));
      this.department_price=price;
  }

}
