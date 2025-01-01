import { FileText, Download, Edit2, Trash2, Plus, Search, Filter, ArrowRight } from 'lucide-react';

type EnquiryForm = {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  date: string;
};

type AdmissionForm = {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  status: 'pending' | 'under_review' | 'approved' | 'rejected';
  date: string;
  documents: string[];
};

const mockEnquiries: EnquiryForm[] = [
  {
    id: '1',
    studentName: 'Alex Thompson',
    parentName: 'John Thompson',
    phone: '+1 (555) 123-4567',
    email: 'john.t@example.com',
    grade: '11',
    status: 'new',
    date: '2024-03-15'
  },
  {
    id: '2',
    studentName: 'Emma Davis',
    parentName: 'Sarah Davis',
    phone: '+1 (555) 234-5678',
    email: 'sarah.d@example.com',
    grade: '9',
    status: 'contacted',
    date: '2024-03-14'
  }
];

const mockAdmissions: AdmissionForm[] = [
  {
    id: '1',
    studentName: 'Michael Wilson',
    parentName: 'Robert Wilson',
    phone: '+1 (555) 345-6789',
    email: 'robert.w@example.com',
    grade: '10',
    status: 'pending',
    date: '2024-03-15',
    documents: ['birth_certificate.pdf', 'previous_marksheet.pdf']
  },
  {
    id: '2',
    studentName: 'Sophie Brown',
    parentName: 'James Brown',
    phone: '+1 (555) 456-7890',
    email: 'james.b@example.com',
    grade: '12',
    status: 'under_review',
    date: '2024-03-14',
    documents: ['birth_certificate.pdf', 'transfer_certificate.pdf']
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'new':
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'contacted':
    case 'under_review':
      return 'bg-blue-100 text-blue-800';
    case 'converted':
    case 'approved':
      return 'bg-green-100 text-green-800';
    case 'closed':
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function FormsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Forms Management</h2>
        <p className="mt-1 text-sm text-gray-500">Manage admission and enquiry forms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enquiry Forms Card */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="px-6 py-4 bg-blue-50 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="text-blue-600" size={20} />
                <h3 className="font-medium text-gray-900">Enquiry Forms</h3>
              </div>
              <button className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-md">
                View All
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search enquiries..."
                  className="pl-9 pr-4 py-2 w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
                <Plus size={16} className="inline mr-1" />
                New Enquiry
              </button>
            </div>
            <div className="divide-y">
              {mockEnquiries.map((enquiry) => (
                <div key={enquiry.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{enquiry.studentName}</h4>
                      <p className="text-sm text-gray-500">{enquiry.parentName}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(enquiry.status)}`}>
                      {enquiry.status.replace('_', ' ').charAt(0).toUpperCase() + enquiry.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      <p>Grade {enquiry.grade}</p>
                      <p>{enquiry.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admission Forms Card */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="px-6 py-4 bg-blue-50 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="text-blue-600" size={20} />
                <h3 className="font-medium text-gray-900">Admission Forms</h3>
              </div>
              <button className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-md">
                View All
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search admissions..."
                  className="pl-9 pr-4 py-2 w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
                <Plus size={16} className="inline mr-1" />
                New Admission
              </button>
            </div>
            <div className="divide-y">
              {mockAdmissions.map((admission) => (
                <div key={admission.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{admission.studentName}</h4>
                      <p className="text-sm text-gray-500">{admission.parentName}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(admission.status)}`}>
                      {admission.status.replace('_', ' ').charAt(0).toUpperCase() + admission.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      <p>Grade {admission.grade}</p>
                      <p>{admission.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Download size={16} />
                      </button>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}