import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
export class Customer {
  constructor(
    public id: number,
    public customerCode: string,
    public customerName: string,
    public emailAddress: string,
    public contactNumber: string
  ) {
  }
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers!: Customer[];


  constructor(
    private httpClient: HttpClient,
  // private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.httpClient.get<any>('/api_customer').subscribe(
      response => {
        console.log(response);
        this.customers = response;
      }
    );
  }
}
