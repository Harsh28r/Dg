import { CreditCard, Download, AlertCircle } from 'lucide-react';

type ChildFees = {
  id: string;
  name: string;
  fees: {
    id: string;
    type: string;
    amount: number;
    dueDate: string;
    status: 'paid' | 'pending' | 'overdue';
    paidDate?: string;
  }[];
};

const mockFees: ChildFees[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    fees: [
      {
        id: '1',
        type: 'Tuition Fee - March 2024',
        amount: 1200,
        dueDate: '2024-03-15',
        status: 'pending'
      },
      {
        id: '2',
        type: 'Laboratory Fee',
        amount: 200,
        dueDate: '2024-03-10',
        status: 'overdue'
      },
      {
        id: '3',
        type: 'Tuition Fee - February 2024',
        amount: 1200,
        dueDate: '2024-02-15',
        status: 'paid',
        paidDate: '2024-02-14'
      }
    ]
  },
  {
    id: '2',
    name: 'Emma Johnson',
    fees: [
      {
        id: '1',
        type: 'Tuition Fee - March 2024',
        amount: 1000,
        dueDate: '2024-03-15',
        status: 'pending'
      },
      {
        id: '2',
        type: 'Sports Fee',
        amount: 150,
        dueDate: '2024-03-10',
        status: 'paid',
        paidDate: '2024-03-08'
      }
    ]
  }
];

export function FeesSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Fees & Payments</h2>
        <p className="mt-1 text-sm text-gray-500">Manage your children's fee payments</p>
      </div>

      <div className="space-y-6">
        {mockFees.map((child) => (
          <div key={child.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="px-6 py-4 bg-blue-50 border-b">
              <h3 className="font-medium text-gray-900">{child.name}'s Fees</h3>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-yellow-600">
                  <AlertCircle size={20} />
                  <span className="text-sm font-medium">
                    Pending Amount: $
                    {child.fees
                      .filter((fee) => fee.status !== 'paid')
                      .reduce((sum, fee) => sum + fee.amount, 0)}
                  </span>
                </div>
              </div>

              <div className="divide-y">
                {child.fees.map((fee) => (
                  <div key={fee.id} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{fee.type}</p>
                        <p className="text-sm text-gray-500">
                          {fee.status === 'paid'
                            ? `Paid on ${fee.paidDate}`
                            : `Due on ${fee.dueDate}`}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-medium text-gray-900">
                          ${fee.amount.toLocaleString()}
                        </p>
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1
                            ${
                              fee.status === 'paid'
                                ? 'bg-green-100 text-green-800'
                                : fee.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                        >
                          {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    {fee.status !== 'paid' && (
                      <button className="mt-2 w-full py-2 text-center text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                        Pay Now
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}