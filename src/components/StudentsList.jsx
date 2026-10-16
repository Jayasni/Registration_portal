
import { useEffect, useState } from "react";
import { getStudents } from "../services/registrationApi";

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStudents() {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Students</h2>

      {students.map((student) => (
        <article key={student.id}>
          <h3>
            {student.firstName} {student.lastName}
          </h3>
          <p>{student.email}</p>
        </article>
      ))}
    </section>
  );
}

export default StudentsList;
