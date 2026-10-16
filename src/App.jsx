
import RegistrationForm from "./components/RegistrationForm";
import StudentsList from "./components/StudentsList";

function App() {
  return (
    <main className="portal-page">
      <div className="portal-layout">
        <section className="portal-intro">
          <a href="/" className="brand">
            <span className="brand-icon">S</span>
            SkillConnect
          </a>

          <div className="intro-content">
            <span className="intro-badge">
              YOUR FUTURE STARTS HERE
            </span>

            <h1>
              Learn new skills.
              <br />
              Build your <span>future.</span>
            </h1>

            <p className="intro-description">
              Join our learning community and explore
              technical courses designed to help you grow.
            </p>

            <div className="feature-list">
              <p>✓ Industry-focused courses</p>
              <p>✓ Flexible learning paths</p>
              <p>✓ Learn at your own pace</p>
            </div>
          </div>

          <p className="intro-footer">
            Learn today. Lead tomorrow.
          </p>
        </section>

        <section className="portal-form-section">
          <RegistrationForm />
        </section>
      </div>

      {/* Students fetched using the DummyJSON API */}
      <section className="students-section">
        <StudentsList />
      </section>
    </main>
  );
}

export default App;
