import * as Yup from "yup";

export const validationSchemaPersonal = Yup.object().shape({
    fullName: Yup.string()
        .required('Full name is required'),
    mobilePhone: Yup.string()
        .required('Mobile phone is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    country: Yup.string()
        .required('Country is required'),
    city: Yup.string()
        .required('City is required'),
    state: Yup.string()
        .required('State is required'),
    street: Yup.string()
        .required('Street is required'),
    apartmentNumber: Yup.string()
        .required('Apartment number is required'),
    postcode: Yup.string()
        .required('Postcode is required'),
    recipientFullName: Yup.string()
        .required("Recipient's full name is required"),
    recipientMobilePhone: Yup.string()
        .required("Recipient's mobile phone is required"),
    recipientEmail: Yup.string()
        .email('Invalid email')
        .required("Recipient's email is required"),
});



