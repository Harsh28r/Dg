import { FileText, Calendar, AlertCircle } from 'lucide-react';

type Test = {
  id: string;
  subject: string;
  type: string;
  date: string;
  status: 'upcoming' | 'completed';
  score?: number;
  totalMarks: number;
};

const mockTests: Test[] = [
  {
    id: '1',
    subject: 'Mathematics',
    type: 'Mid-term Exam',
    date: '2024-03-25',
    status: 'upcoming',
    totalMarks: 100
  },
  {
    id: '2',
    subject: 'Physics',
    type: 'Unit Test',
    date: '2024-03-15',
    status: 'completed',
    score: 85,
    totalMarks: 100
  },
  {
    id: '3',
    subject: 'Chemistry',
    type: 'Quiz',
    date: '2024-03-10',
    status: 'completed',
    score: 92,
    totalMarks: 50
  }
];

export function TestDetailsSection() {
  const upcomingTests = mockTests.filter(test => test.status === 'upcoming');
  const completedTests = mockTests.filter(test => test.status === 'completed');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Test Details</h2>
        <p className="mt-1 text-sm text-gray-500">View upcoming and completed test information</p>
      </div>

      {upcomingTests.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="px-6 py-4 bg-yellow-50 border-b">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-yellow-600" size={20} />
              <h3 className="font-medium text-yellow-900">Upcoming Tests</h3>
            </div>
          </div>
          <div className="divide-y">
            {upcomingTests.map((test) => (
              <div key={test.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{test.subject}</p>
                    <p className="text-sm text-gray-500">{test.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-500">{test.date}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Total Marks: {test.totalMarks}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <div className="flex items-center gap-2">
            <FileText className="text-blue-600" size={20} />
            <h3 className="font-medium text-gray-900">Completed Tests</h3>
          </div>
        </div>
        <div className="divide-y">
          {completedTests.map((test) => (
            <div key={test.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{test.subject}</p>
                  <p className="text-sm text-gray-500">{test.type}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                    {test.score} / {test.totalMarks}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">{test.date}</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${(test.score! / test.totalMarks) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}