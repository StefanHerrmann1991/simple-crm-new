export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  secondaryPhoneNumber?: string;
  companyName?: string;
  profileImageURL?: string;
  type?: string;
  createdDate: Date;
  lastContactDate?: Date;
  birthDate?: Date;
  notes?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  socialMediaProfiles?: {
    linkedIn?: string;
    twitter?: string;
    facebook?: string; 
  };  
}
