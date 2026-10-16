# SkillConnect – Student Registration Portal

A responsive student registration portal built using React, Vite, Tailwind CSS, Formik, and Yup. The application allows students to register for courses, validates form inputs, submits registration details to the DummyJSON API, and displays registered student information.

## Features

- **Responsive UI:** Modern registration interface that works across desktop, tablet, and mobile screens.
- **Reusable Components:** Modular React components for form fields, buttons, success messages, and registered student details.
- **Form Validation:** Formik manages form state and submission, while Yup validates user inputs.
- **Course Selection:** Students can choose from React, Python, Java, and Full Stack.
- **API Integration:** Uses the DummyJSON API to demonstrate POST requests and API responses.
- **Registration Storage:** Saves submitted registration details in browser localStorage.
- **Registered Students List:** Displays registrations saved in the current browser.
- **Success and Error Feedback:** Shows registration status and error messages.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- Formik
- Yup
- Fetch API
- DummyJSON API
- Browser localStorage

## Project Structure

```text
skillconnect-registration/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── FormField.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── RegisteredStudents.jsx
│   │   └── SuccessMessage.jsx
│   ├── services/
│   │   └── registrationApi.js
│   ├── Validation/
│   │   └── registrationSchema.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Note: The structure above is a reference. Adjust filenames and folders to match your actual project.*

## Installation and Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project folder

```bash
cd skillconnect-registration
```

### 3. Install dependencies

```bash
npm install
```

If the dependencies are not already installed, run:

```bash
npm install formik yup
npm install tailwindcss @tailwindcss/vite
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## API Integration

This project uses the DummyJSON API to demonstrate registration requests.

**API endpoint:**

```text
https://dummyjson.com/users/add
```

**HTTP method:** POST

Example request body:

```json
{
  "firstName": "Jayasni",
  "email": "student@example.com",
  "phone": "9876543210",
  "course": "React"
}
```

The application sends the registration details using the Fetch API and processes the response.

### Important Note About Data Storage

DummyJSON simulates adding a user and does not permanently store newly submitted users on its server.

To display registrations within this application, the submitted details are also saved in browser `localStorage`. This allows the data to remain available after refreshing the same browser.

- DummyJSON provides a simulated API response.
- `localStorage` stores registration details locally in the current browser.
- The application does not provide shared server-side storage.
- Do not store passwords or other sensitive information in localStorage.

## Form Validation

Formik and Yup are used together to manage form data and validation.

The form includes validation for:

- Full name
- Email address
- Phone number
- Course selection
- Password length
- Password confirmation
- Acceptance of terms and conditions

Validation messages are displayed when the user enters invalid or incomplete information.

## Available Scripts

| Command | Description |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint checks, if configured |

## Future Improvements

- Add a permanent backend using FastAPI or Node.js.
- Store registrations in a database such as SQLite or PostgreSQL.
- Add student login and authentication.
- Add a student details page with individual registration IDs.
- Add registration search and filtering.
- Deploy the application to a hosting platform.

## Learning Objectives

This project demonstrates practical usage of:

- React components and props
- React state management with `useState`
- Form handling with Formik
- Schema validation with Yup
- REST API requests using Fetch
- Asynchronous JavaScript with `async` and `await`
- Browser storage using localStorage
- Responsive styling with Tailwind CSS

