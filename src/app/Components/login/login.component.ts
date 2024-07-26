import { Component, NgModule} from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule, NgModel  } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';



@Component({
  selector: 'app-login',
  standalone: true,
  
  imports: [HttpClientModule,FormsModule , DashboardComponent , RouterLink  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailAddress: string = '';
  password: string = '';

  constructor(private authService : AuthService ,private router : Router){}

  onSubmit(): void {
    
    this.authService.validateLogin(this.emailAddress, this.password).subscribe(
      response => {
           alert('User  Found ');
           this.router.navigate(['/dashboard']);
           localStorage.setItem("UserID", JSON.stringify(response));
        
      },
      error => {
        if (error.status === 404) {
          alert('User Not Found!');
      } else if (error.status === 401) {
          alert('Incorrect Password!');
      } else {
          alert('There is an error!');
      }
      }
    );

  }

}
