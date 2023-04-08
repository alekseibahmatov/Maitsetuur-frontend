import * as Yup from "yup";

export const initialValuesIndividual = {
    nominal: '',
    fromFullName: '',
    toFullName: '',
    toEmail: '',
    toPhone: '',
    congratsMessage: '',
    termsCheckbox: false,
};

export const validationSchemaIndividual = Yup.object().shape({
    nominal: Yup.string().required('Nominal is required'),
    fromFullName: Yup.string().required('Your Full name is required'),
    toFullName: Yup.string().required("Recipient's Full Name is required"),
    toEmail: Yup.string().email('Invalid email').required("Recipient's email is required"),
    toPhone: Yup.string().matches(/^[0-9]+$/, 'Phone number must only contain digits').min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number must be at most 15 digits').required("Recipient's phone number is required"),
    congratsMessage: Yup.string().required("Congratulation Text is required").max(280, 'Congrats message must be 280 characters or less'),
    termsCheckbox: Yup.boolean().oneOf([true], 'You must agree to the Terms of personal data processing'),
});

export const initialValuesBusiness = {
    nominal: '',
    fromFullName: '',
    toFullName: '',
    toEmail: '',
    toPhone: '',
    congratsMessage: '',
    termsCheckbox: false,
};

export const validationSchemaBusiness = Yup.object().shape({
    nominal: Yup.string().required('Nominal is required'),
    fromFullName: Yup.string().required('Your Full name is required'),
    toFullName: Yup.string().required("Recipient's Full Name is required"),
    toEmail: Yup.string().email('Invalid email').required("Recipient's email is required"),
    toPhone: Yup.string().matches(/^[0-9]+$/, 'Phone number must only contain digits').min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number must be at most 15 digits').required("Recipient's phone number is required"),
    congratsMessage: Yup.string().required("Congratulation Text is required").max(280, 'Congrats message must be 280 characters or less'),
    termsCheckbox: Yup.boolean().oneOf([true], 'You must agree to the Terms of personal data processing'),
});