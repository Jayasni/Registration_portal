
const API_URL = "https://dummyjson.com";

const STORAGE_KEY = "skillconnect_students";

// POST: Send registration to DummyJSON
// Then keep the registration in this browser.
export async function registerStudent(formData) {
  const requestBody = {
    firstName: formData.fullName.trim(),
    email: formData.email,
    phone: formData.phone,
    course: formData.course,
  };

  const response = await fetch(`${API_URL}/users/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  const student = {
    id: data.id ?? Date.now(),
    fullName: formData.fullName.trim(),
    email: formData.email,
    phone: formData.phone,
    course: formData.course,
  };

  const students = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );

  students.push(student);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));

  console.log("DummyJSON API response:", data);
  console.log("Saved registration:", student);

  return student;
}

// GET: Retrieve all registrations saved in this browser
export async function getStudents() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

// GET: Retrieve one registration by ID
export async function getStudentById(id) {
  const students = await getStudents();

  const student = students.find(
    (item) => String(item.id) === String(id)
  );

  if (!student) {
    throw new Error("Student not found");
  }

  return student;
}
