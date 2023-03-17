import * as Yup from "yup";

const europeanMobilePhoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const estonianIdCodeRegex = /^[1-6]{1}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$/;

export const RestaurantBusinessInfoSchema = Yup.object().shape({
    restaurantName: Yup.string()
        .required("Restaurant Name is a required field"),
    restaurantDescription: Yup.string()
        .required("Restaurant Description is a required field")
        .max(100, "Restaurant Description must not exceed 100 characters"),
    restaurantEmail: Yup.string()
        .required("Restaurant Email is a required field")
        .email("Invalid email format"),
    restaurantPhone: Yup.string()
        .matches(europeanMobilePhoneRegex, "Invalid phone number")
        .required("Restaurant Phone Number is a required field"),
    country: Yup.string()
        .required("Country is a required field"),
    state: Yup.string()
        .required("State is a required field"),
    street: Yup.string()
        .required("Street is a required field"),
    city: Yup.string()
        .required("City is a required field"),
    postalCode: Yup.string()
        .required("Postcode is a required field"),
    workingHours: Yup.string()
        .required("Postcode is a required field"),
    averageBill: Yup.string()
        .required("Average Bill is a required field"),
    categories: Yup.array().required('Please pick at least one category'),
    photo: Yup.mixed()
        .required('Please upload a jpeg/png photo')
        .test('fileFormat', 'Unsupported file format', (value) => {
        if (!value) return;
        return ['image/jpeg', 'image/png'].includes(value.type);
    }),
    contract: Yup.mixed()
        .required('Please upload a PDF file')
        .test('fileFormat', 'Unsupported file format', (value) => {
        if (!value) return;
        return ['application/pdf'].includes(value.type);
    })
});