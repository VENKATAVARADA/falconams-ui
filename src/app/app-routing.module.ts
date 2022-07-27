import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubmissionComponent } from './components/add-submission/add-submission.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'cash',
        component: InvoicesComponent,
        children: [
          { path: 'submit', component: InvoicesComponent },
          { path: 'ledger', component: InvoicesComponent },
        ],
      },
      { path: 'checks', component: InvoicesComponent },
      { path: 'invoice', component: InvoicesComponent },
      { path: 'journal', component: InvoicesComponent },
      { path: 'account', component: InvoicesComponent },
      { path: 'balance', component: InvoicesComponent },
      { path: 'preclose', component: InvoicesComponent },
      { path: 'messages', component: InvoicesComponent },
      { path: 'claims', component: ClaimsComponent },
      { path: 'settings', component: InvoicesComponent },
      { path: 'reports', component: InvoicesComponent },
      { path: 'intrestrate', component: InvoicesComponent },
      { path: 'addSubmission', component: AddSubmissionComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
