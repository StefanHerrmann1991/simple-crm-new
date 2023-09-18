import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent {
customer: any;
displayedColumns: any;
  saveCustomerDetails() {
    throw new Error('Method not implemented.');
  }

}
