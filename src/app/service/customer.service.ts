import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  api = "/";

  constructor(private http: HttpClient) {
  }

  getCustomers() {
    this.http.get<any>('http://localhost:64579/customer').subscribe(
      response => {
        console.log(response);
        // this.customers = response;
      }
    );
  }
}
