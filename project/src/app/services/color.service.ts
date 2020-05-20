import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  baseUrl = 'https://ew-color-mixer.herokuapp.com/colors/:2advancesoltions@gmail.com';
  constructor(private http: HttpClient) { }

  getColors(): Observable<any> {
   return this.http.get<any>(this.baseUrl);
  }
}
