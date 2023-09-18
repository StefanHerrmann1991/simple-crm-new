import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { LeadManagementComponent } from './lead-management/lead-management.component';
import { CampaignManagementComponent } from './campaign-management/campaign-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact-details/:id', component: ContactDetailsComponent },
  { path: 'lead-management', component: LeadManagementComponent },
  { path: 'campaign-management', component: CampaignManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
