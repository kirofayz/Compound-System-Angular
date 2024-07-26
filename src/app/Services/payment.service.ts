import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentDto } from '../Interfaces/payment-dto';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'https://localhost:44329/api/UserPaymentUnits/CreatePayment';

  constructor(private http : HttpClient) { }
  createPayment(paymentDto: PaymentDto): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, paymentDto);
  }
}
