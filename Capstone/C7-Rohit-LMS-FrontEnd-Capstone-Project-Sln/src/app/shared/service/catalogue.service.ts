import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../model/catalogue.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private apiUrl = 'http://localhost:8080/catalogue';

  constructor(private http: HttpClient) {}

  getCatalogue(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>(this.apiUrl);
  }

  addCatalogue(catalogue: Catalogue): Observable<Catalogue> {
    return this.http.post<Catalogue>(this.apiUrl, catalogue);
  }

  getTotalCatalogues(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

  deleteCatalogue(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getCatalogueById(id: string): Observable<Catalogue> {
    return this.http.get<Catalogue>(`${this.apiUrl}/${id}`);
  }

  updateCatalogue(id: string, catalogue: Catalogue) {
    return this.http.put(`${this.apiUrl}/${id}`, catalogue);
  }

  searchCatalogueByTitle(title: string): Observable<any> {
    console.log(">>> " , `${this.apiUrl}/search?title=${title}`)
    return this.http.get(
      `${this.apiUrl}/search?title=${title.trim()}`
    );
    // return this.http.get(`${this.apiUrl}/search`, { params: { title } });
  }
}
