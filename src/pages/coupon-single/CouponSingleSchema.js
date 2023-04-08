import * as Yup from "yup";

const europeanMobilePhoneRegex = /^((\+|00)\d{2,3}[\s.-]?)?(\d{3,4}[\s.-]?){2,3}(\d{2,3})$/;

export const CouponSingleSchema = Yup.object().shape({
    toFullName: Yup.string()
        .required("Receiver Full name is a required field")
        .matches(/^[^\d]+$/, 'Full name must not contain numbers')
        .min(2, "Full name must be at least 2 characters"),
    fromFullName: Yup.string()
        .required("Receiver Full name is a required field")
        .matches(/^[^\d]+$/, 'Full name must not contain numbers')
        .min(2, "Full name must be at least 2 characters"),
    toEmail: Yup.string()
        .required("Receiver Email is a required field")
        .email("Invalid email format"),
    toPhone: Yup.string()
        .matches(europeanMobilePhoneRegex, "Invalid mobile phone number")
        .required("Mobile phone is a required field"),
    value: Yup.number()
        .required("Nominal is a required field")
        .min(0)
        .max(10000),
    remainingValue: Yup.number()
        .required("Remaining Value is a required field")
        .min(0)
        .max(10000),
    description: Yup.string()
        .required("Congratulations is a required field")
        .max(100, "Congratulations must not exceed 100 characters")
        .min(1, "Congratulations must be at least 1 characters"),
    createdAt: Yup.date()
        .required("Created At is a required field"),
    validUntil: Yup.date()
        .required("Valid Until is a required field"),
});