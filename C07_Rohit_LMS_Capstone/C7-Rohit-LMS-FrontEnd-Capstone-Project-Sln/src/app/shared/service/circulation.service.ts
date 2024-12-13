import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circulation } from '../model/circulation.model';

@Injectable({
  providedIn: 'root',
})
export class CirculationService {
  private baseUrl = 'http://localhost:8080/api/circulations';

  constructor(private http: HttpClient) {}

  getCirculations(): Observable<Circulation[]> {
    return this.http.get<Circulation[]>(this.baseUrl);
  }

  addCirculation(data: Circulation): Observable<Circulation> {
    return this.http.post<Circulation>(this.baseUrl, data);
  }

  returnBook(data: Circulation): Observable<Circulation> {
    console.log(data);
    const date = new Date();
    const dateString = date.toISOString().split('T')[0];
    console.log(dateString);
    data.returnDate = dateString;
    return this.http.put<Circulation>(`${this.baseUrl}`, data);
  }

  getTotalCirculations(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

  getTotalBorrowedBook(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/borrowed-book`);
  }

  getTotalReturnedBook(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/returned-book`);
  }

  deleteCirculation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
