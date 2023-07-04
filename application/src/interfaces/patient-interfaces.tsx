
export interface ContactDetailsProps {
    telephone: string;
    email: string;
}

export interface AddressProps {
    street: string;
    postcode: string;
    city: string;
    county: string;
}

export interface GpProps {
    title: string;
    firstName: string;
    practice: PracticeProps;

}

export interface PracticeProps {
    name: string;
    address: AddressProps;
}

export interface MedicationProps {
    medication: string;
    endDate: string;
    startDate: string;
}

export interface PatientProps {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    avatar: string;
    dob: string;
    contactDetails: ContactDetailsProps;
    address: AddressProps;
    gp: GpProps;
    medication: MedicationProps;
}