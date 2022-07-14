import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilitys/${id}`);
  }
  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facilitys', facility);
  }
  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(`${API_URL}/facilitys/${id}`);
  }
  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${API_URL}/facilitys/${id}`, facility);
  }
}
