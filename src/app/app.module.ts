import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmissionService } from './services/submission.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './components/common/data-table/data-table.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { AddSubmissionComponent } from './components/add-submission/add-submission.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { FCCommonModule } from './components/common/fc-common.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    DashboardComponent,
    MainLayoutComponent,
    InvoicesComponent,
    AddSubmissionComponent,
    ClaimsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FCCommonModule
  ],
  providers: [SubmissionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
