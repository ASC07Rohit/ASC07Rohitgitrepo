import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admin } from "../model/admin.model";
import { Observable } from "rxjs";



@Injectable({
    providedIn:'root',
})

export class AdminService{
    private apiurl="http://localhost:8080/admin"

    constructor(private http: HttpClient){}

    getAdminData():Observable<Admin[]>  {
        return this.http.get<Admin[]>(this.apiurl);
    }

    addAdminData(admin:Admin):Observable<Admin>{
        return this.http.post<Admin>(this.apiurl,admin);
    }

    deleteAdmin(id: string):Observable<void>{
        return this.http.delete<void>(`${this.apiurl}/${id}`)
    }
}