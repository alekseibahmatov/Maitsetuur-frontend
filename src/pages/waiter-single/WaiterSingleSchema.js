import * as Yup from "yup";

const europeanMobilePhoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const estonianIdCodeRegex = /^[1-6]{1}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$/;

export const WaiterSingleSchema = Yup.object().shape({
    fullName: Yup.string()
        .required("Full name is a required field")
        .matches(/^[^\d]+$/, 'Full name must not contain numbers')
        .min(2, "Full name must be at least 2 characters"),
    phone: Yup.string()
        .matches(europeanMobilePhoneRegex, "Invalid phone number (use country code as well)")
        .required("Mobile phone is a required field"),
    personalCode: Yup.string()
        .required("Personal Code is a required field")
        .matches(estonianIdCodeRegex, "Invalid Personal Code"),
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
    zipCode: Yup.string()
        .required("Postcode is a required field"),
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    restaurantName: Yup.string()
        .required("Restaurant name is a required field")
});
