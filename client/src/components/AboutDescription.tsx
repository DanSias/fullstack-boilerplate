const HomeDescription: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <header className=" text-gray-800 py-6">
        <div className="container mx-auto px-4">
          <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
                Welcome to Fullstack Boilerplate
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6">
                Build modern web applications with React, Node.js, Prisma, and
                Supabase.
              </p>
              <div>
                <a
                  href="#get-started"
                  className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
                  Get Started
                </a>
              </div>
            </div>
          </section>
          <h1 className="text-4xl font-bold">Fullstack Boilerplate</h1>
          <p className="text-lg mt-2">
            A modern fullstack boilerplate with React, Node.js, Prisma, and
            Supabase.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
          <p className="leading-relaxed">
            This project is designed to provide a robust foundation for building
            fullstack applications. It integrates modern tools and frameworks to
            streamline development and ensure scalability. Whether you're
            building an MVP or a production-grade app, this boilerplate has you
            covered.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>React</strong> for building dynamic and responsive user
              interfaces.
            </li>
            <li>
              <strong>Node.js</strong> with Express for creating a scalable and
              efficient backend.
            </li>
            <li>
              <strong>Prisma</strong> ORM for type-safe database interactions
              with PostgreSQL.
            </li>
            <li>
              <strong>Supabase</strong> for database hosting and additional
              features like authentication.
            </li>
            <li>
              <strong>Tailwind CSS</strong> for fast, responsive, and
              customizable styling.
            </li>
            <li>
              <strong>React Query</strong> for efficient server-state
              management.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Included Packages</h2>
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Package</th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">React</td>
                <td className="border border-gray-300 px-4 py-2">
                  Frontend library for building user interfaces.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  React Router
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Library for routing and navigation.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Prisma</td>
                <td className="border border-gray-300 px-4 py-2">
                  ORM for type-safe and efficient database interactions.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Tailwind CSS
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Utility-first CSS framework for styling.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  React Query
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Data-fetching library for managing server-state.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Supabase</td>
                <td className="border border-gray-300 px-4 py-2">
                  Backend-as-a-service platform built on PostgreSQL.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p>
            To start using this boilerplate, clone the repository and follow the
            setup instructions in the README file. Customize the components and
            configurations to suit your project requirements.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomeDescription;
