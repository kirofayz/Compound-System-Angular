import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UnitDto } from '../Interfaces/unit-dto';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private apiUrl = 'https://localhost:44329/api/Units/GetAllUnit';
  constructor(private http : HttpClient) { }

  getAllUnits(): Observable<UnitDto[]> {
    return this.http.get<UnitDto[]>(`${this.apiUrl}`).pipe(
      
    );
  }
  
}
