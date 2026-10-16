function SuccessMessage({ name, onReset }) {
  return (
    <div className="success-card">
      <h2>Registration successful!</h2>
      <p>Welcome, {name}. Your registration was submitted.</p>

      <button
        type="button"
        className="primary-button"
        onClick={onReset}
      >
        Register another student
      </button>
    </div>
  );
}

export default SuccessMessage;