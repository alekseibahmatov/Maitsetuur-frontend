import * as Yup from "yup";

const europeanMobilePhoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

export const initialValuesPersonal = {
    nominal: '',
    fromFullName: '',
    toFullName: '',
    toEmail: '',
    congratsMessage: '',
    termsCheckbox: false,
};

export const validationSchemaPersonal = Yup.object().shape({
    nominal: Yup.string().required('Nominal is required'),
    fromFullName: Yup.string().required('Your Full name is required'),
    toFullName: Yup.string().required("Recipient's Full Name is required"),
    toEmail: Yup.string().email('Invalid email').required("Recipient's email is required"),
    congratsMessage: Yup.string().required("Congratulation Text is required").max(280, 'Congrats message must be 280 characters or less'),
    termsCheckbox: Yup.boolean().oneOf([true], 'You must agree to the Terms of personal data processing'),
});

export const initialValuesBusiness = {
    businessName: '',
    businessCode: '',
    termsCheckbox: false,
};

export const validationSchemaBusiness = Yup.object().shape({
    businessName: Yup.string()
        .required('Business name is required')
        .max(100, 'Business name seems to be incorrect, please contact us')
        .typeError("Input correct business name"),
    businessCode: Yup.string()
        .matches(/^\d{8}$/, 'Invalid Business Code (ID)')
        .required('Business code is required')
        .typeError("Input correct business code"),
    termsCheckbox: Yup.boolean().oneOf([true], 'You must agree to the Terms of personal data processing'),
});
