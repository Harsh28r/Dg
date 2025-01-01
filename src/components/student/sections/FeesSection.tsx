import { CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';

type FeePayment = {
  id: string;
  type: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  paidOn?: string;
};

const mockFees: FeePayment[] = [
  {
    id: '1',
    type: 'Tuition Fee - March 2024',
    amount: 1500,
    dueDate: '2024-03-15',
    status: 'pending'
  },
  {
    id: '2',
    type: 'Laboratory Fee',
    amount: 300,
    dueDate: '2024-03-10',
    status: 'overdue'
  },
  {
    id: '3',
    type: 'Tuition Fee - February 2024',
    amount: 1500,
    dueDate: '2024-02-15',
    status: 'paid',
    paidOn: '2024-02-14'
  },
  {
    id: '4',
    type: 'Sports Fee',
    amount: 200,
    dueDate: '2024-02-10',
    status: 'paid',
    paidOn: '2024-02-09'
  }
];

export function FeesSection() {
  const totalPending = mockFees
    .filter(fee => fee.status !== 'paid')
    .reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Fees & Payments</h2>
        <p className="mt-1 text-sm text-gray-500">Manage your fee payments and view payment history</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Pending Amount</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">${totalPending}</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Pay Now
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <div className="flex items-center gap-2">
            <CreditCard className="text-blue-600" size={20} />
            <h3 className="font-medium text-gray-900">Payment History</h3>
          </div>
        </div>
        <div className="divide-y">
          {mockFees.map((fee) => (
            <div key={fee.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{fee.type}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {fee.status === 'paid' ? `Paid on ${fee.paidOn}` : `Due on ${fee.dueDate}`}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${fee.amount}</p>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1
                      ${fee.status === 'paid' ? 'bg-green-100 text-green-800' : 
                        fee.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}
                  >
                    {fee.status === 'paid' && <CheckCircle size={14} className="inline mr-1" />}
                    {fee.status === 'pending' && <Clock size={14} className="inline mr-1" />}
                    {fee.status === 'overdue' && <AlertCircle size={14} className="inline mr-1" />}
                    {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}