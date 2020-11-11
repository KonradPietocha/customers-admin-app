import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Customer } from './interface/customer';
import { CUSTOMERS } from '../mock/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }
}
