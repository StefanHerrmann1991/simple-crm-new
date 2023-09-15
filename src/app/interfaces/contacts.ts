export interface Contact {
    id: string;
    customerId: string;
    contactPerson: string;
    contactEmail: string;
    contactPhoneNumber: string;
    position: string;
    notes?: string;
    createdDate: Date;
}
