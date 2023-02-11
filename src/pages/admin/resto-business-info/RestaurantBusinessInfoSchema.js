import * as Yup from "yup";

const europeanMobilePhoneRegex = /^((\+|00)\d{2,3}[\s.-]?)?(\d{3,4}[\s.-]?){2,3}(\d{2,3})$/;
const estonianIdCodeRegex = /^[1-6]{1}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$/;

export const RestaurantBusinessInfoSchema = Yup.object().shape({
    fullName: Yup.string()
        .required("Full name is a required field")
        .matches(/^[^\d]+$/, 'Full name must not contain numbers')
        .min(2, "Full name must be at least 2 characters"),
    mobilePhone: Yup.string()
        .matches(europeanMobilePhoneRegex, "Invalid mobile phone number")
        .required("Mobile phone is a required field"),
    idCode: Yup.string()
        .required("ID Code is a required field")
        .matches(estonianIdCodeRegex, "Invalid ID Code"),
    country: Yup.string()
        .required("Country is a required field"),
    city: Yup.string()
        .required("City is a required field"),
    state: Yup.string()
        .required("State is a required field"),
    street: Yup.string()
        .required("Street is a required field"),
    apartmentNumber: Yup.string()
        .required("Apartment number is a required field"),
    postcode: Yup.string()
        .required("Postcode is a required field"),
});