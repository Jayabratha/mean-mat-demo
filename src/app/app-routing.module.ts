import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TradesComponent } from './trades/trades.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TransportsComponent } from './transports/transports.component';

const routes: Routes = [
  {path: 'trades', component: TradesComponent},
  {path: 'transfers', component: TransfersComponent},
  {path: 'transports', component: TransportsComponent},
  {path: '', redirectTo: '/trades', pathMatch: 'full'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
