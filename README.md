# 📦Survey Application

## 📚 Navigation

1. [Task](#task)
2. [Requirements](#requirements)
3. [Flexibility Considerations](#flexibility-considerations)
4. [Technical Stack](#technical-stack)
5. [Installation and Running the Project](#installation-and-running-the-project)
6. [Features](#features)
7. [Folder Structure](#folder-structure)
8. [JSON Configuration Example](#json-configuration-example)
9. [Linting and Formatting](#linting-and-formatting)
10. [License](#license)

## Task

This project implements a survey application with the following functionality:

- Screens for each survey question.
- Logic to navigate between questions based on user responses.
- Storage of user responses.

## Requirements

- Use [Figma](https://www.figma.com/design/pLPedeHKj4l1wxtfy8IWO4/OBRIO_Front_End_Test?node-id=0-1&p=f&t=QpwHBD4vXFeg99dp-0) to create pages.
- Pages should be responsive for mobile and desktop (tablet view is not required). No pixel-perfect design is required.
- Pages must be generated using Next.js `generateStaticParams` (App Router).
- Store user responses in a state manager.
- The survey configuration (questions, answers, navigation conditions) must be stored in a separate JSON file and be flexible.
- Dynamic placeholders such as “{Gender}” must be displayed based on answers from previous screens.
- After completing the survey, user responses must be displayed (in any convenient format).

## Flexibility Considerations

- Assume there will be 10 different survey configurations in the project.
- Each question screen should not rely on responses from previous or future screens. There should be no hardcoded dependencies.
- The project should support adding new screen types, such as a date input field, by leveraging the `screenType` field in the survey configuration.

---

## Technical Stack

This project uses the following technologies:

- **Next.js (App Router)**
- **TypeScript**
- **Redux Toolkit**
- **ESLint**
- **Prettier**
- **SCSS (modules approach)**
---

## Installation and Running the Project

### Development Environment

1. Clone the repository:

   ```bash
   git clone https://github.com/KhromenkoDaniel/obrio-questionnaire.git
   ```

2. Navigate to the project directory:

   ```bash
   cd obrio-questionnaire
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:

   ```
   http://localhost:3000
   ```

### Production Environment

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

3. 🚀 Open http://localhost:3000 to view it in the browser.

---

## Features

1. **Dynamic Question Screens**:

    - Screens are generated dynamically using the configuration JSON file.
    - Each screen type is defined by `screenType` to support extensibility.

2. **State Management**:

    - User responses are managed using RTK, ensuring scalability and performance.

3. **Flexible Configuration**:

    - All questions, answers, and navigation logic are defined in a single JSON file for easy customization.

4. **Dynamic Placeholder Replacement**:

    - Dynamic values such as `{Gender}` are populated based on user responses.
    - Placeholder logic ensures screens remain independent of each other.

5. **Responsive Design**:

    - The application is optimized for mobile and desktop devices.

---

## Folder Structure

```plaintext
/obrio-questionnaire
├── components         # Reusable UI components
├── configs            # Survey configuration JSON
├── lib                # Helper functions and hooks
├── app                # Application pages (App Router)
├── public             # Static assets
├── styles             # Global and component-specific styles
├── types              # TypeScript type definitions
└── utils              # Utility functions (e.g., placeholder replacement)
```

---

## JSON Configuration Example

Below is an example of a survey question configuration:

```json
{
  "id": "q1",
  "screenType": "singleChoice",
  "question": "Select your gender:",
   "placeholders": {
      "Gender": "q2",
      "who_have_children": {
         "condition": 5,
         "valueIfTrue": "who have children",
         "valueIfFalse": ""
      }
   },
   "answers": [
    { "id": 1, "name": "Male", "reference": "q2" },
    { "id": 2, "name": "Female", "reference": "q2" }
  ]
}
```

## Linting and Formatting

- Run ESLint and Prettier:

  ```bash
  npm run lint
  ```

---

## License

This project is licensed under the MIT License.

