export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address?: string;
    createdDate: Date;
  }
