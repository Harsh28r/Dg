import { useState } from 'react';
import { Mail, Phone, Plus, Trash2, Edit2, ExternalLink, Filter, Search, User } from 'lucide-react';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  interest: string;
  status: 'new' | 'contacted' | 'converted' | 'lost';
  date: string;
  notes?: string;
};

const mockAutoLeads: Lead[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    source: 'Website Form',
    interest: 'Science Program',
    status: 'new',
    date: '2024-03-15',
    notes: 'Interested in admission for next academic year'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 234-5678',
    source: 'Landing Page',
    interest: 'Commerce Stream',
    status: 'contacted',
    date: '2024-03-14',
    notes: 'Following up on fee structure'
  }
];

const mockManualLeads: Lead[] = [
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike.w@example.com',
    phone: '+1 (555) 345-6789',
    source: 'Walk-in',
    interest: 'Arts Program',
    status: 'new',
    date: '2024-03-15',
    notes: 'Visited campus for program information'
  },
  {
    id: '4',
    name: 'Emma Davis',
    email: 'emma.d@example.com',
    phone: '+1 (555) 456-7890',
    source: 'Staff Referral',
    interest: 'Mathematics Program',
    status: 'converted',
    date: '2024-03-13',
    notes: 'Completed admission process'
  }
];

function LeadTable({ leads }: { leads: Lead[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Lead Info
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Interest
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Source
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-500">{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-500">{lead.phone}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{lead.interest}</div>
                <div className="text-xs text-gray-500">{lead.date}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {lead.source}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    lead.status === 'new'
                      ? 'bg-yellow-100 text-yellow-800'
                      : lead.status === 'contacted'
                      ? 'bg-blue-100 text-blue-800'
                      : lead.status === 'converted'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex items-center gap-2">
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LeadSection() {
  const [activeTab, setActiveTab] = useState<'auto' | 'manual'>('auto');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Lead Management</h2>
        <p className="mt-1 text-sm text-gray-500">Track and manage admission inquiries</p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg border">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search leads..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-gray-400" />
          <select className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
          </select>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          Add Lead
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('auto')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'auto'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Auto Leads
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'manual'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Manual Leads
          </button>
        </div>
      </div>

      {/* Lead Tables */}
      <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
        <LeadTable leads={activeTab === 'auto' ? mockAutoLeads : mockManualLeads} />
      </div>
    </div>
  );
}