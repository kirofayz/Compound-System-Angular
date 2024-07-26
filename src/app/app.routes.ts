import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { BuyUnitComponent } from './Components/buy-unit/buy-unit.component';


export const routes: Routes = [ {path:'login' , component : LoginComponent} 
    , { path: 'dashboard', component: DashboardComponent },
    {path:'unit-details/:id',component:BuyUnitComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' } ,
    
];



