import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentDto } from '../../Interfaces/payment-dto';
import { PaymentService } from '../../Services/payment.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-buy-unit',
  standalone: true,
  imports: [NgFor , FormsModule , NgIf , DatePipe , CurrencyPipe ],
  templateUrl: './buy-unit.component.html',
  styleUrl: './buy-unit.component.css'
})
export class BuyUnitComponent implements OnInit  {
  unitId: number = 0;
  userId : any = null;
  paymentData = null;
  showTable = false;




  installmentPlans = [
    { id: 1, label: 'Yearly' },
    { id: 2, label: 'Quarterly' },
    { id: 3, label: 'Semi-Annual' },
    { id: 4, label: 'Monthly' }
  ];

 

  constructor(private route: ActivatedRoute , private paymentService : PaymentService , private router : Router) {
    this.userId = localStorage.getItem("UserID");
    //console.log(this.userId);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.unitId = +id;
      }
    });
  }

 

  onSubmit(form : any): void {
    if (form.valid) {
    

      const paymentList : PaymentDto = {
        price: Number(form.value.price),
        installmentStartDate: form.value.startDate,
        yearsCount: form.value.yearsCount,
        userId: Number(this.userId),
        unitId: this.unitId,
        installmentPlanId: Number(form.value.installmentPlan)
      };

      this.paymentService.createPayment(paymentList).subscribe(
        response => {
          this.paymentData = response;
          alert('Payment created successfully');
          
          this.showTable = true;

        },
        error => {
          console.error('Error creating payment:', error);
        }
      );

      


     
    } else {
      console.log('Form is invalid');
    }
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
