import { BarChart3, Users, BookOpen, Calendar } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        <div className="text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
}

export function AdminOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Overview Dashboard</h2>
        <p className="mt-1 text-sm text-gray-500">Overview of your institute's performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Teachers"
          value="45"
          icon={<Users size={24} />}
          description="+5 this month"
        />
        <StatCard
          title="Total Students"
          value="850"
          icon={<Users size={24} />}
          description="+12% from last month"
        />
        <StatCard
          title="Active Courses"
          value="24"
          icon={<BookOpen size={24} />}
          description="Across all departments"
        />
        <StatCard
          title="Upcoming Events"
          value="8"
          icon={<Calendar size={24} />}
          description="Next 30 days"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900">Recent Activities</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="text-sm font-medium">New Course Added</p>
                <p className="text-xs text-gray-500">Advanced Mathematics</p>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="text-sm font-medium">Teacher Onboarded</p>
                <p className="text-xs text-gray-500">Sarah Johnson - Physics</p>
              </div>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium">Event Scheduled</p>
                <p className="text-xs text-gray-500">Annual Science Fair</p>
              </div>
              <span className="text-xs text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Performance Overview</h3>
            <BarChart3 className="text-blue-600" size={20} />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Student Attendance</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Course Completion Rate</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Teacher Engagement</span>
                <span className="text-sm font-medium">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}