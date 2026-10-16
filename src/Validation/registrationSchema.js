
import * as Yup from "yup";

const registrationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email address is required"),

  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),

  course: Yup.string()
    .oneOf(
      ["React", "Python", "Java", "Full Stack"],
      "Please select a valid course"
    )
    .required("Please select a course"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),

  acceptedTerms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

export default registrationSchema;
