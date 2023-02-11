import * as Yup from "yup";

const europeanMobilePhoneRegex = /^((\+|00)\d{2,3}[\s.-]?)?(\d{3,4}[\s.-]?){2,3}(\d{2,3})$/;

export const CouponSingleSchema = Yup.object().shape({
    receiverFullName: Yup.string()
        .required("Full name is a required field")
        .matches(/^[^\d]+$/, 'Full name must not contain numbers')
        .min(2, "Full name must be at least 2 characters"),
    receiverEmail: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    mobilePhone: Yup.string()
        .matches(europeanMobilePhoneRegex, "Invalid mobile phone number")
        .required("Mobile phone is a required field"),
    nominal: Yup.number()
        .required("ID Code is a required field")
        .min(0)
        .max(10000),
    createdAt: Yup.date()
        .required("Created At is a required field"),
    validUntil: Yup.date()
        .required("Valid Until is a required field"),
    // congratulations: Yup.string()
    //     .required("Congratulations is a required field")
    //     .min(1, "Congratulations must be at least 1 characters"),
    senderFullName: Yup.string()
        .required("Full name is a required field")
        .matches(/^[^\d]+$/, 'Full name must not contain numbers')
        .min(2, "Full name must be at least 2 characters"),
    submittedInRestaurant: Yup.string()
        .required("Submitted in restaurant is a required field"),
    submittedBy: Yup.string()
        .required("Submitted by is a required field"),
});