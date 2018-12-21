import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private web: HttpClient ) { }

  getdays(): Observable<any> {
    return this.web.get(environment.holidays.url);
  }


}
