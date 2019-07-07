import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import canActivate guard services
import { AuthGuard } from "../../shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";

// Import all the components for which navigation service has to be activated 
import { LoginComponent } from '../../authentication/login/login.component';
import { RegisterComponent } from '../../authentication/register/register.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../authentication/verify-email/verify-email.component';
import { auth } from 'firebase';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }