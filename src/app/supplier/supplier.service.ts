import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl = 'http://127.0.0.1:5000/api/';
  endPoint = 'suppliers/'
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllSupplierLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPoint}`, { headers: this.httpHeaders });
  }

  getSupplierById(supplierId): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPoint}${supplierId}`, { headers: this.httpHeaders });
  }

  getSupplierByName(name: string): Observable<any> {
    const myparams = new HttpParams().append('name', name);
    return this.http.get(`${this.baseUrl}${this.endPoint}`, { headers: this.httpHeaders, params: myparams });
  }

  putSupplier(supplierData): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endPoint}${supplierData.id}`, JSON.stringify(supplierData), { headers: this.httpHeaders });
  }
  
  postNewSupplierObject(newSupplierData): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.endPoint}`, newSupplierData, { headers: this.httpHeaders });
  }
}
