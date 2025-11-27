import Link from 'next/link';

export default function Home() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Full Stack Developer',
      location: 'San Francisco, CA',
      avatar: 'JD',
      gradient: 'from-blue-400 to-purple-600',
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      location: 'New York, NY',
      avatar: 'JS',
      gradient: 'from-pink-400 to-red-600',
      status: 'active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Backend Developer',
      location: 'Austin, TX',
      avatar: 'MJ',
      gradient: 'from-green-400 to-teal-600',
      status: 'inactive',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Product Manager',
      location: 'Seattle, WA',
      avatar: 'SW',
      gradient: 'from-purple-400 to-indigo-600',
      status: 'active',
    },
    {
      id: 5,
      name: 'David Brown',
      role: 'DevOps Engineer',
      location: 'Boston, MA',
      avatar: 'DB',
      gradient: 'from-orange-400 to-yellow-600',
      status: 'active',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">User Profiles</h1>
            </div>
            <Link
              href="/admin"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Talented professionals working together to build amazing products
          </p>
        </div>

        {/* User Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/user/${user.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-800"
            >
              {/* Cover */}
              <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              {/* Content */}
              <div className="relative px-6 pb-6">
                {/* Avatar */}
                <div className="relative -mt-16 mb-4">
                  <div className="inline-block rounded-full border-4 border-white dark:border-slate-800">
                    <div
                      className={`flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${user.gradient} text-xl font-bold text-white`}
                    >
                      {user.avatar}
                    </div>
                  </div>
                  {user.status === 'active' && (
                    <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-white bg-green-500 dark:border-slate-800"></div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {user.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {user.role}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {user.location}
                  </div>
                </div>

                {/* View Profile Button */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    View Profile
                  </span>
                  <svg
                    className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute right-4 top-4">
                {user.status === 'active' ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                    Inactive
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Add New User Card */}
        <div className="mt-8">
          <Link
            href="/admin"
            className="group flex items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-700"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-blue-600 dark:bg-slate-700">
              <svg
                className="h-6 w-6 text-slate-600 transition-colors group-hover:text-white dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Manage Users
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Go to admin dashboard to add or edit users
              </p>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-slate-800">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{users.length}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Total Users</p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-slate-800">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
              {users.filter((u) => u.status === 'active').length}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Active Now</p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-slate-800">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <svg
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">245</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Total Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
