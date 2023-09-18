export interface Contact {
  id: string;
  customerId: string;
  contactPerson: string;
  contactEmail: string;
  contactPhoneNumber: string;
  secondaryContactPhoneNumber?: string; // Additional contact number
  position: string;
  department?: string; // Department where the contact person works
  linkedInProfile?: string; // LinkedIn profile of the contact person
  otherSocialMediaProfiles?: { // Other social media profiles
    twitter?: string;
    facebook?: string;
    // ... other platforms as needed
  };
  preferredContactMethod?: string; // Preferred method to contact (Phone, Email, etc.)
  lastContactDate?: Date; // The date when the contact person was last contacted
  upcomingMeetingDate?: Date; // Date of any upcoming meetings/appointments
  notes?: string;
  createdDate: Date;
  modifiedDate?: Date; // Date when the contact information was last updated
}