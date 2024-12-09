import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/api/reviews'; // Change to your backend URL

  constructor(private http: HttpClient) {}


  addReview(review: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, review);
  }

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deletReview(id:string):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
  
}
 