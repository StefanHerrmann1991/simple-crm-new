import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrmService } from 'src/app/services/crm.service';
import { Customer } from 'src/app/interfaces/customer';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.sass']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  showAdditionalInfo = false;



  constructor(
    private fb: FormBuilder,
    private CrmService: CrmService,
    public dialogRef: MatDialogRef<CreateCustomerComponent>,
  ) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      secondaryPhoneNumber: [''],
      companyName: [''],
      profileImageURL: [''],
      type: [''],
      createdDate: [new Date(), Validators.required],
      lastContactDate: [''],
      birthDate: [''],
      notes: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        postalCode: [''],
        country: [''],
      }),
      socialMediaProfiles: this.fb.group({
        linkedIn: [''],
        twitter: [''],
        facebook: [''],
      }),
      websiteURL: [''],
    });
  }

  toggleAdditionalInfo() {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      this.addCustomer()
    }
  }




  addCustomer() {
    let customer: Customer = {
      id: '', // you might want to generate a unique ID here or let Firestore do it
      firstName: this.customerForm.get('firstName').value,
      lastName: this.customerForm.get('lastName').value,
      email: this.customerForm.get('email').value,
      phoneNumber: this.customerForm.get('phoneNumber').value,
      companyName: this.customerForm.get('companyName').value,
      profileImageURL: this.customerForm.get('profileImageURL').value,
      type: this.customerForm.get('type').value,
      createdDate: this.customerForm.get('createdDate').value,
      lastContactDate: this.customerForm.get('lastContactDate').value,
      birthDate: this.customerForm.get('birthDate').value,
      notes: this.customerForm.get('notes').value,
      address: this.customerForm.get('address').value,
      socialMediaProfiles: this.customerForm.get('socialMediaProfiles').value, 
    }
    this.CrmService.addCustomer(customer, 'customers'); // assuming your service and method names
    this.closeDialog();
  }


  closeDialog() {
    this.dialogRef.close();
  }

}