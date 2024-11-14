import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/data.model';

@Injectable({
  providedIn: 'root',
})
export class dataService {
  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }

  getIssue(id: number): Observable<Data> {
    return this.http.get<Data>(`${this.apiUrl}/${id}`);
  }

  addData(newIssue: Data): Observable<Data> {
    return this.http.post<Data>(this.apiUrl, newIssue);
  }

  updateData(id: number, updatedIssue: Data): Observable<Data> {
    return this.http.put<Data>(`${this.apiUrl}/${id}`, updatedIssue);
  }

  deleteData(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
