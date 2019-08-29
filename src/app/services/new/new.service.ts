import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employ} from '../../Employ';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http:HttpClient) { }

  getEmploy(email,value):Observable<Employ[]>{
    return this.http.get<Employ[]>('https://api.github.com/users/'+value);
  }

    getListHome():Observable<Employ[]>{
        return this.http.get<Employ[]>('http://localhost:8000/api/test');
    }
}
