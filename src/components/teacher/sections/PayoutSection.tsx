import { DollarSign, Download } from 'lucide-react';

type PaySlip = {
  month: string;
  salary: number;
  status: 'paid' | 'pending';
  date: string;
};

const mockPaySlips: PaySlip[] = [
  { month: 'March 2024', salary: 5000, status: 'paid', date: '2024-03-30' },
  { month: 'February 2024', salary: 5000, status: 'paid', date: '2024-02-28' },
  { month: 'January 2024', salary: 5000, status: 'paid', date: '2024-01-30' },
];

export function PayoutSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Salary & Payouts</h2>
        <p className="mt-1 text-sm text-gray-500">View your salary history and download pay slips</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-3 text-lg font-medium text-gray-900">
          <DollarSign className="text-blue-600" />
          <span>Current Salary: $5,000/month</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h3 className="font-medium text-gray-900">Payment History</h3>
        </div>
        <div className="divide-y">
          {mockPaySlips.map((slip, index) => (
            <div key={index} className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{slip.month}</p>
                <p className="text-sm text-gray-500">Paid on {slip.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg font-medium text-gray-900">
                  ${slip.salary.toLocaleString()}
                </span>
                <button
                  className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 rounded-md hover:bg-blue-50"
                >
                  <Download size={16} />
                  Payslip
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}