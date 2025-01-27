# Fullstack Boilerplate

A robust and modern full-stack boilerplate designed to accelerate web application development. This project seamlessly integrates a React frontend, an Express backend, and powerful tooling to ensure a smooth development experience.

## Highlights

### Problems It Solves

- **Tedious Project Setup**: Skip the repetitive work of setting up frontend and backend environments; this boilerplate gets you started immediately.
- **Streamlined Development Workflow**: The tooling ensures smooth integration between client and server, reducing context switching.
- **Modern Development Stack**: Use the latest technologies for scalability, performance, and developer happiness.
- **Consistent Styling**: Tailwind CSS simplifies styling, offering a consistent and responsive design system out of the box.

### Technology Stack

- **Frontend**:
  - [React](https://reactjs.org/) with [Vite](https://vitejs.dev/): Fast, lightweight, and modern frontend framework.
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for efficient styling.

- **Backend**:
  - [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/): Flexible and lightweight backend solution.

- **Tooling**:
  - [Concurrently](https://www.npmjs.com/package/concurrently): Simplifies running frontend and backend servers simultaneously.
  - [npm scripts](https://docs.npmjs.com/misc/scripts): Optimized commands for setup and development.

## Included Packages and Their Impact

### Frontend Dependencies

- **@headlessui/react**: Provides accessible, unstyled UI components to accelerate building custom designs.
- **@tanstack/react-query**: Simplifies data fetching and state management with caching, synchronization, and server-state utilities.
- **axios**: Lightweight HTTP client for making API requests.
- **react-hook-form**: Minimal, performant library for building forms with controlled and uncontrolled inputs.
- **react-router-dom**: Enables powerful client-side routing for single-page applications.

### Backend Dependencies

- **@prisma/client**: Seamlessly integrates with Prisma ORM for database interaction and schema management.
- **bcrypt**: Provides secure password hashing for user authentication.
- **cors**: Enables Cross-Origin Resource Sharing for smooth API communication.
- **dotenv**: Manages environment variables for secure configuration.
- **express-rate-limit**: Adds basic rate limiting to improve API security and performance.
- **jsonwebtoken**: Facilitates JWT-based authentication and authorization mechanisms.

### DevDependencies

- **@eslint/js**: Helps maintain code quality with linting.
- **@testing-library/react**: Provides utilities for testing React components, promoting best testing practices.
- **@vitejs/plugin-react-swc**: Enhances Vite with SWC support for faster React builds.
- **jest**: Robust testing framework for running unit and integration tests.
- **ts-jest**: Integrates Jest with TypeScript for type-safe testing.
- **typescript**: Adds type safety and improved developer tooling to the project.
- **nodemon**: Facilitates automatic server restarts during development.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   npm run install-all
   ```

3. **Run the Application:**
   ```bash
   npm run dev
   ```

   This command runs both the client and server in development mode using `concurrently`.

### Project Structure

```
project-folder/
├── client/       # React frontend
├── server/       # Node.js backend
├── package.json  # Project configuration and dependencies
└── README.md     # Project documentation
```

### Customization

- **Styling**: Update Tailwind configuration in `client/tailwind.config.js` to fit your project needs.
- **Backend Routes**: Modify or add API routes in `server/routes/`.

## Future Enhancements

- Add advanced role-based access control.
- Expand API testing coverage.
- Optimize database performance using Prisma features.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to suggest changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
