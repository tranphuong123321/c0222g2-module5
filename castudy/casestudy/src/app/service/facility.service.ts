import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {environment} from "../../environments/environment";
import {Facility} from "../model/facility";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor(private http: HttpClient) { }
  getFacility(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilitys');
  }
  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/facilitys/${id}`);
  }
  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facilitys', facility);
  }
}
