import { Component } from '@angular/core';
import { UnitsService } from '../../Services/units.service';
import { UnitDto } from '../../Interfaces/unit-dto';
import { NgFor, NgIf, NgStyle } from '@angular/common';

import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor , NgIf , NgStyle],
  templateUrl: './dashboard.component.html',
  styleUrl:  './dashboard.component.css' ,
})
export class DashboardComponent {


  units: UnitDto[] = [];
  constructor(private unitService:UnitsService , private router: Router ) {
   }

   ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(
      data => {
        
        this.units = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  navigateToDetails(unitId: number) {
    this.router.navigate(['/unit-details', unitId]);
  }



}
