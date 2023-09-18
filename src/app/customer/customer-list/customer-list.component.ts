import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrmService } from 'src/app/services/crm.service';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Customer } from 'src/app/interfaces/customer';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})


export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'action'];
  dataSource: any[] = [];

  constructor(
    private CrmService: CrmService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    /*    this.CrmService.getCustomers().subscribe((data: any[]) => {
         this.dataSource = data;
       }); */
  }

  removeCustomer() { }

  openCreateCustomerDialog(): void {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // Hier könntest du eine Methode zum Hinzufügen eines neuen Kunden aufrufen, z.B.:
      // if(result) {
      //   this.customerService.createCustomer(result).subscribe(() => {
      //     this.getCustomerList();  // Aktualisiere die Kundenliste nach dem Hinzufügen eines neuen Kunden
      //   });
      // }
    });
  }



  editCustomer(customer: any): void {
    // Hier könntest du einen Dialog zum Bearbeiten von Kundendetails öffnen
  }

  deleteCustomer(id: number): void {
    // Hier könntest du eine Methode zum Löschen eines Kunden aufrufen, z.B.:
    // this.customerService.deleteCustomer(id).subscribe(() => {
    //   this.getCustomerList();  // Aktualisiere die Kundenliste nach dem Löschen eines Kunden
    // });
  }
}
