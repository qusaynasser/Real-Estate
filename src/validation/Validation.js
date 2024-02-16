import * as yup from 'yup';

export const loginSchema=yup.object({
    email:yup.string().required("Email is required"),
    password:yup.string().required("Password is required").min(8,"password must be at least 8 characters").max(13,"password must be max 13 characters"),
})

export const registerSchema=yup.object({
    firstName:yup.string().required("First Name is required"),
    lastName:yup.string().required("Last Name is required"),
    email:yup.string().required("Email is required"),
    city:yup.string().required("City is required"),
    password:yup.string().required("Password is required").min(8,"password must be at least 8 characters").max(13,"password must be max 13 characters"),
});