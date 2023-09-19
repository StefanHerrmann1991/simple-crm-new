import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';
import { Contact } from '../interfaces/contacts';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  where,
  query,
  limit,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrmService {

  customers: Customer[] = [];
  contacts: Contact[] = [];

  firestore: Firestore = inject(Firestore);

  unsubCustomers: any;
  unsubContacts: any;

  constructor() {
    this.unsubCustomers = this.subCustomersList();
    this.unsubContacts = this.subContactsList();
  }

  ngOnDestroy() {
    this.unsubCustomers();
    this.unsubContacts();
  }

  getCustomers() { }

  subCustomersList() {
    const q = query(
      collection(this.firestore, 'customers'),
      orderBy('lastName'),
      limit(100)
    );
    return (this.unsubCustomers = onSnapshot(q, (list: any) => {
      this.customers = [];
      list.forEach((element: any) => {
        this.customers.push(this.setCustomerObj(element.data(), element.id));
      });
    }));
  }

  subList(array: any, unsubArray: any, col: string, sort: string) {
    const q = query(
      collection(this.firestore, col),
      orderBy(sort),
      limit(100)
    );
    return (unsubArray = onSnapshot(q, (list: any) => {
      array = [];
      list.forEach((element: any) => {
        array.push(this.setContactObj(element.data(), element.id));
      });
    }));
  }



  async addCustomer(item: {}, ref: string) {
    await addDoc(this.getRef(ref), item)
  }

  getRef(ref) {
    return collection(this.firestore, ref);
  }



  subContactsList() {
    const q = query(
      collection(this.firestore, 'contacts'),
      orderBy('contactPerson'),
      limit(100)
    );
    return (this.unsubContacts = onSnapshot(q, (list: any) => {
      this.contacts = [];
      list.forEach((element: any) => {
        this.contacts.push(this.setContactObj(element.data(), element.id));
      });
    }));
  }

  setCustomerObj(obj: any, id: string): Customer {
    return {
      id: id || '',
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      email: obj.email || '',
      phoneNumber: obj.phoneNumber || '',
      address: obj.address || null,
      createdDate: obj.createdDate || new Date(),
    };
  }

  setContactObj(obj: any, id: string): Contact {
    return {
      id: id || '',
      customerId: obj.customerId || '',
      contactPerson: obj.contactPerson || '',
      contactEmail: obj.contactEmail || '',
      contactPhoneNumber: obj.contactPhoneNumber || '',
      position: obj.position || '',
      notes: obj.notes || null,
      createdDate: obj.createdDate || new Date(),
    };
  }

  async addEntity(item: {}, ref: string) {
    await addDoc(collection(this.firestore, ref), item)
      .catch((err) => {
        console.log(err);
      })
      .then((docRef: any) => {
        console.log('Document written with ID', docRef?.id);
      });
  }

  async updateEntity(entity: any) {
    if (entity.id) {
      let docRef = doc(
        collection(this.firestore, this.getColIdFromEntity(entity)),
        entity.id
      );
      await updateDoc(docRef, entity)
        .catch((err) => {
          console.log(err);
        })
        .then(() => { });
    }
  }

  getColIdFromEntity(entity: Customer | Contact) {
    if ('contactPerson' in entity) return 'contacts';
    else return 'customers';
  }

  async deleteEntity(colId: 'customers' | 'contacts', docId: string) {
    await deleteDoc(doc(collection(this.firestore, colId), docId)).catch(
      (err) => {
        console.log(err);
      }
    );
  }
}
