import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TradesComponent } from './trades/trades.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TransportsComponent } from './transports/transports.component';
import { AuthGuard } from './shared/guards/auth-guard.service';

const routes: Routes = [
  {path: 'trades', component: TradesComponent, canActivate: [AuthGuard]},
  {path: 'transfers', component: TransfersComponent, canActivate: [AuthGuard]},
  {path: 'transports', component: TransportsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/trades', pathMatch: 'full'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
