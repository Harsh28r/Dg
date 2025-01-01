import { useState } from 'react';
import { DollarSign, Users, Receipt, FileText, Tags, Building2, CreditCard, Search, Filter } from 'lucide-react';
import { FeeManagementTab } from './paystub/FeeManagementTab';
import { SalaryManagementTab } from './paystub/SalaryManagementTab';
import { ExpensesTab } from './paystub/ExpensesTab';
import { MiscellaneousTab } from './paystub/MiscellaneousTab';

const tabs = [
  { id: 'fee', label: 'Fee Management', icon: <CreditCard size={20} /> },
  { id: 'salary', label: 'Salary Management', icon: <DollarSign size={20} /> },
  { id: 'expenses', label: 'Expenses', icon: <Receipt size={20} /> },
  { id: 'misc', label: 'Miscellaneous', icon: <Tags size={20} /> },
];

export function PaystubSection() {
  const [activeTab, setActiveTab] = useState('fee');

  const renderContent = () => {
    switch (activeTab) {
      case 'fee':
        return <FeeManagementTab />;
      case 'salary':
        return <SalaryManagementTab />;
      case 'expenses':
        return <ExpensesTab />;
      case 'misc':
        return <MiscellaneousTab />;
      default:
        return <FeeManagementTab />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Financial Management</h2>
        <p className="mt-1 text-sm text-gray-500">Manage all financial aspects of your institute</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-xl font-semibold text-gray-900">$128,500</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Fee Collection</p>
              <p className="text-xl font-semibold text-gray-900">$95,400</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Receipt className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Expenses</p>
              <p className="text-xl font-semibold text-gray-900">$32,800</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Building2 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Balance</p>
              <p className="text-xl font-semibold text-gray-900">$95,700</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>{renderContent()}</div>
    </div>
  );
}