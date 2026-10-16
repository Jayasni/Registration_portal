import { useField } from "formik";

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  options,
}) {
  const [field, meta] = useField(name);

  const autoCompleteValues = {
    fullName: "name",
    email: "email",
    phone: "tel",
    password: "new-password",
    confirmPassword: "new-password",
  };

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      {options ? (
        <select
          {...field}
          id={name}
          autoComplete="off"
          className="form-input"
        >
          <option value="">Select {label}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...field}
          id={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoCompleteValues[name] || "off"}
          className="form-input"
        />
      )}

      {meta.touched && meta.error && (
        <p className="error-text">{meta.error}</p>
      )}
    </div>
  );
}

export default FormField;