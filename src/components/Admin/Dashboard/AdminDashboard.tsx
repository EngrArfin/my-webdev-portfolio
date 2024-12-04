import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">
            Welcome to Your Admin Dashboard
          </h1>
          <p className="mt-2 text-xl">
            Manage your portfolio, projects, and more.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Manage Projects</h3>
              <span className="text-indigo-600 text-lg">Edit</span>
            </div>
            <p className="text-gray-600 mb-4">
              Add, edit, or remove projects from your portfolio to showcase your
              skills.
            </p>
            <Link href="/admin/projects">
              <p className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                View Projects
              </p>
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">View Messages</h3>
              <span className="text-indigo-600 text-lg">View</span>
            </div>
            <p className="text-gray-600 mb-4">
              Read the latest messages from visitors or clients to stay
              connected.
            </p>
            <Link href="/admin/messages">
              <p className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                View Messages
              </p>
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Manage Profile</h3>
              <span className="text-indigo-600 text-lg">Edit</span>
            </div>
            <p className="text-gray-600 mb-4">
              Edit your personal information and update your profile settings.
            </p>
            <Link href="/admin/profile">
              <p className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Update Profile
              </p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Total Projects</h3>
            <p className="text-indigo-600 text-4xl font-bold">8</p>
            <p className="text-gray-600 mt-2">
              Manage and update your portfolio projects.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">New Messages</h3>
            <p className="text-indigo-600 text-4xl font-bold">5</p>
            <p className="text-gray-600 mt-2">
              Stay in touch with your visitors and clients.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Profile Views</h3>
            <p className="text-indigo-600 text-4xl font-bold">150</p>
            <p className="text-gray-600 mt-2">
              Track the number of times your profile was viewed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
