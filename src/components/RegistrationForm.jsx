
import { useState } from "react";
import { Formik, Form } from "formik";

import FormField from "./FormField";
import Button from "./Button";
import SuccessMessage from "./SuccessMessage";

import registrationSchema from "../Validation/registrationSchema";
import { registerStudent } from "../services/registrationApi";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  password: "",
  confirmPassword: "",
  acceptedTerms: false,
};

const courses = ["React", "Python", "Java", "Full Stack"];

function RegistrationForm() {
  const [notification, setNotification] = useState(null);
  const [registeredName, setRegisteredName] = useState("");

  async function handleSubmit(values, helpers) {
    setNotification({
      type: "loading",
      message: "Please wait while we submit your registration.",
    });

    try {
      const result = await registerStudent(values);

      console.log("Registration API response:", result);

      setRegisteredName(values.fullName);

      setNotification({
        type: "success",
        message: `${values.fullName}, your registration was submitted successfully!`,
      });

      helpers.resetForm();
    } catch (error) {
      console.error("Registration error:", error);

      setNotification({
        type: "error",
        message:
          error.message ||
          "Registration failed. Please check your connection and try again.",
      });
    } finally {
      helpers.setSubmitting(false);
    }
  }

  return (
    <div className="registration-wrapper">
      {/* Registration notification */}
      {notification && (
        <div
          className={`notification notification-${notification.type}`}
          role={notification.type === "error" ? "alert" : "status"}
        >
          <div className="notification-content">
            <strong>
              {notification.type === "success"
                ? "✅ Registration Successful!"
                : notification.type === "error"
                ? "❌ Registration Failed!"
                : "⏳ Registering..."}
            </strong>

            <p>{notification.message}</p>
          </div>

          <button
            type="button"
            className="notification-close"
            aria-label="Close notification"
            onClick={() => setNotification(null)}
          >
            ×
          </button>
        </div>
      )}

      {/* Success screen */}
      {registeredName ? (
        <SuccessMessage
          name={registeredName}
          onReset={() => {
            setRegisteredName("");
            setNotification(null);
          }}
        />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            submitCount,
          }) => (
            <Form className="registration-form" noValidate>
              <div className="form-heading">
                <p className="eyebrow">JOIN SKILLCONNECT</p>
                <h2>Create your account</h2>
                <p>
                  Fill in your details to start your learning journey.
                </p>
              </div>

              {/* Show validation errors after submission */}
              {submitCount > 0 &&
                Object.keys(errors).length > 0 && (
                  <div className="validation-summary" role="alert">
                    Please correct the highlighted fields and try again.
                  </div>
                )}

              <div className="form-grid">
                <FormField
                  label="Full name"
                  name="fullName"
                  placeholder="Enter your full name"
                  autoComplete="name"
                />

                <FormField
                  label="Phone number"
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  autoComplete="tel"
                />

                <div className="full-width">
                  <FormField
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="full-width">
                  <FormField
                    label="Select course"
                    name="course"
                    options={courses}
                  />
                </div>

                <FormField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Minimum 8 characters"
                  autoComplete="new-password"
                />

                <FormField
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter password"
                  autoComplete="new-password"
                />
              </div>

              {/* Terms checkbox */}
              <label
                className="terms-row"
                htmlFor="acceptedTerms"
              >
                <input
                  id="acceptedTerms"
                  name="acceptedTerms"
                  type="checkbox"
                  checked={values.acceptedTerms}
                  onChange={(event) =>
                    setFieldValue(
                      "acceptedTerms",
                      event.target.checked
                    )
                  }
                  onBlur={() =>
                    setFieldTouched("acceptedTerms", true)
                  }
                />

                <span>
                  I agree to the terms and conditions.
                </span>
              </label>

              {touched.acceptedTerms && errors.acceptedTerms && (
                <p className="error-text">
                  {errors.acceptedTerms}
                </p>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Registering..."
                  : "Create Account →"}
              </Button>

              <p className="form-footer">
                Your information will be handled securely.
              </p>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default RegistrationForm;
