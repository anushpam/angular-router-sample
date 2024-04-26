import { FakereviewpanelComponent } from './fakereviewpanel/fakereviewpanel.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/reviewlist');
  }



  postReview(textData: string): Observable<string> {
    // Replace 'your-api-endpoint' with your actual API endpoint
    return this.http.post<string>('http://127.0.0.1:8000/detectFakeReview', { "reviewText": textData });
  }
}
