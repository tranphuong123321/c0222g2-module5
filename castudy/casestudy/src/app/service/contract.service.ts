import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Contract} from "../model/contract";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }
  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contracts', contract);
  }
  getContract(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contracts');
  }
}
