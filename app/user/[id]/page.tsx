'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  phone: string;
  location: string;
  bio: string;
  skills: string[];
  followers: number;
  following: number;
  projects: number;
}

// Mock database - trong thực tế sẽ fetch từ API
const mockUsers: Record<number, User> = {
  1: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Full Stack Developer',
    status: 'active',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate developer with 5+ years of experience building web applications. I love creating beautiful and functional user interfaces with modern technologies. Always learning and exploring new tools and frameworks.',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'],
    followers: 1200,
    following: 345,
    projects: 87,
  },
  2: {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'UI/UX Designer',
    status: 'active',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY',
    bio: 'Creative designer focused on user experience. Specializing in creating intuitive and beautiful interfaces that users love. 8 years of experience in digital design.',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Design Systems'],
    followers: 2800,
    following: 520,
    projects: 142,
  },
  3: {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.j@example.com',
    role: 'Backend Developer',
    status: 'inactive',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    bio: 'Specialized in scalable backend systems and database architecture. Love solving complex problems and optimizing performance.',
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'GraphQL', 'Microservices'],
    followers: 890,
    following: 234,
    projects: 56,
  },
  4: {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah.w@example.com',
    role: 'Product Manager',
    status: 'active',
    phone: '+1 (555) 456-7890',
    location: 'Seattle, WA',
    bio: 'Experienced PM with technical background. Bridging the gap between business needs and technical solutions.',
    skills: ['Agile', 'Jira', 'Product Strategy', 'User Stories', 'Roadmapping', 'Stakeholder Management'],
    followers: 1560,
    following: 678,
    projects: 94,
  },
  5: {
    id: 5,
    name: 'David Brown',
    email: 'david.b@example.com',
    role: 'DevOps Engineer',
    status: 'active',
    phone: '+1 (555) 567-8901',
    location: 'Boston, MA',
    bio: 'Infrastructure and automation specialist. Building reliable and scalable cloud infrastructure.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
    followers: 1120,
    following: 445,
    projects: 73,
  },
};

export default function UserProfilePage() {
  const params = useParams();
  const router = useRouter();
  const userId = parseInt(params.id as string);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundUser = mockUsers[userId];
      setUser(foundUser || null);
      setLoading(false);
    }, 500);
  }, [userId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
            <svg
              className="h-10 w-10 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">User Not Found</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            The user profile you are looking for does not exist.
          </p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
            <button
              onClick={() => router.push('/admin')}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            >
              Admin Dashboard
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 sm:h-64"></div>

          {/* Profile Info */}
          <div className="relative px-6 pb-8 sm:px-8">
            {/* Avatar */}
            <div className="relative -mt-20 sm:-mt-24">
              <div className="inline-block rounded-full border-4 border-white dark:border-slate-800">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-600 text-2xl font-bold text-white sm:h-40 sm:w-40 sm:text-3xl">
                  {getInitials(user.name)}
                </div>
              </div>
              {user.status === 'active' && (
                <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-4 border-white bg-green-500 dark:border-slate-800"></div>
              )}
            </div>

            {/* Name and Title */}
            <div className="mt-4">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                  {user.name}
                </h1>
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
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{user.role}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{user.location}</p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-slate-200 py-6 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {user.followers >= 1000 ? `${(user.followers / 1000).toFixed(1)}K` : user.followers}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{user.following}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{user.projects}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">About</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{user.bio}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                Follow
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                Message
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {/* Skills */}
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Contact</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="text-sm">{user.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Social</h3>
              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm">github.com/{user.name.toLowerCase().replace(' ', '')}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-sm">linkedin.com/in/{user.name.toLowerCase().replace(' ', '')}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span className="text-sm">twitter.com/{user.name.toLowerCase().replace(' ', '')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            {/* Recent Activity */}
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
              <div className="mt-4 space-y-4">
                <div className="flex gap-4 border-l-2 border-blue-500 pl-4">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Completed project: E-Commerce Platform
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">2 days ago</p>
                  </div>
                </div>
                <div className="flex gap-4 border-l-2 border-green-500 pl-4">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Published article on Medium</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">1 week ago</p>
                  </div>
                </div>
                <div className="flex gap-4 border-l-2 border-purple-500 pl-4">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Contributed to open source project
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Projects</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 p-4 transition-shadow hover:shadow-md dark:border-slate-700">
                  <div className="h-32 rounded-md bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">E-Commerce Platform</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Full-featured online store with payment integration
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 transition-shadow hover:shadow-md dark:border-slate-700">
                  <div className="h-32 rounded-md bg-gradient-to-br from-purple-400 to-purple-600"></div>
                  <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">Task Management App</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Collaborative project management tool
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 transition-shadow hover:shadow-md dark:border-slate-700">
                  <div className="h-32 rounded-md bg-gradient-to-br from-pink-400 to-pink-600"></div>
                  <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">Social Media Dashboard</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Analytics and content management platform
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 transition-shadow hover:shadow-md dark:border-slate-700">
                  <div className="h-32 rounded-md bg-gradient-to-br from-green-400 to-green-600"></div>
                  <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">Weather App</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Real-time weather forecasting application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
