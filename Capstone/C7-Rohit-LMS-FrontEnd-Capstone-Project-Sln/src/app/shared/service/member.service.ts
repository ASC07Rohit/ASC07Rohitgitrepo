import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../model/member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private apiUrl = 'http://localhost:8080/api/members';

  constructor(private http: HttpClient) {}

  // addMember()
  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.apiUrl, member);
  }

  // getMember()
  getMember(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  deleteMember(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTotalMembers():Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/count`);
  }
}
