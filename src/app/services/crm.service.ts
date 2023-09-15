import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Costumer } from '../interfaces/costumer';
import { Contact } from '../interfaces/contacts';
import { Firestore, collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc, orderBy, where, query, limit } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  constructor() { }
}
