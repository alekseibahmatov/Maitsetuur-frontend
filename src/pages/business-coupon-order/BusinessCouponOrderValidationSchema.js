import * as Yup from "yup";

export const validationSchema = Yup.object({
    coupons: Yup.array().of(
        Yup.object({
            greeting: Yup.string()
                .required("Recipient Greeting is required")
                .max(35, "General greeting can't be longer than 35 symbols"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
            nominalValue: Yup.number()
                .integer("Nominal value must be a whole number")
                .typeError("Nominal value must be a valid number")
                .min(1, "Coupon nominal must be at least 1")
                .max(5000, "Contact us, in case you need bigger than 5000€ nominal, please")
                .required("Coupon nominal is required"),
            greetingsText: Yup.string()
                .max(250, "Congratulations text cannot exceed 250 characters")
                .required("Congratulations text is required"),
        })
    ),
});