import { useState } from 'react';
import { 
  Search, Filter, Plus, Video, FileText, Book, Download, 
  ExternalLink, Edit2, Trash2, File 
} from 'lucide-react';

type ResourceType = 'video' | 'document' | 'ebook' | 'worksheet';

type Resource = {
  id: string;
  title: string;
  type: ResourceType;
  subject: string;
  grade: string;
  description: string;
  uploadedBy: string;
  uploadDate: string;
  fileSize: string;
  downloadCount: number;
  url: string;
};

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Advanced Calculus Introduction',
    type: 'video',
    subject: 'Mathematics',
    grade: '12',
    description: 'Comprehensive introduction to advanced calculus concepts',
    uploadedBy: 'John Smith',
    uploadDate: '2024-03-15',
    fileSize: '250 MB',
    downloadCount: 128,
    url: '#'
  },
  {
    id: '2',
    title: 'Chemical Bonding Notes',
    type: 'document',
    subject: 'Chemistry',
    grade: '11',
    description: 'Detailed notes on chemical bonding and molecular structures',
    uploadedBy: 'Sarah Johnson',
    uploadDate: '2024-03-14',
    fileSize: '2.5 MB',
    downloadCount: 245,
    url: '#'
  },
  {
    id: '3',
    title: 'Physics Formula Handbook',
    type: 'ebook',
    subject: 'Physics',
    grade: '11-12',
    description: 'Complete handbook of physics formulas and concepts',
    uploadedBy: 'Michael Brown',
    uploadDate: '2024-03-13',
    fileSize: '5.8 MB',
    downloadCount: 567,
    url: '#'
  },
  {
    id: '4',
    title: 'English Grammar Practice',
    type: 'worksheet',
    subject: 'English',
    grade: '11',
    description: 'Practice worksheets for advanced English grammar',
    uploadedBy: 'Emma Davis',
    uploadDate: '2024-03-12',
    fileSize: '1.2 MB',
    downloadCount: 189,
    url: '#'
  },
  {
    id: '5',
    title: 'Biology Lab Experiments',
    type: 'video',
    subject: 'Biology',
    grade: '12',
    description: 'Video demonstrations of important lab experiments',
    uploadedBy: 'Robert Wilson',
    uploadDate: '2024-03-11',
    fileSize: '180 MB',
    downloadCount: 156,
    url: '#'
  },
  {
    id: '6',
    title: 'History Timeline Charts',
    type: 'document',
    subject: 'History',
    grade: '11',
    description: 'Visual timeline charts of major historical events',
    uploadedBy: 'Lisa Anderson',
    uploadDate: '2024-03-10',
    fileSize: '3.4 MB',
    downloadCount: 234,
    url: '#'
  }
];

const getResourceIcon = (type: ResourceType) => {
  switch (type) {
    case 'video':
      return <Video className="text-blue-600" />;
    case 'document':
      return <FileText className="text-green-600" />;
    case 'ebook':
      return <Book className="text-purple-600" />;
    case 'worksheet':
      return <File className="text-orange-600" />;
  }
};

export function ResourceSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const subjects = Array.from(new Set(mockResources.map(r => r.subject)));
  const types = Array.from(new Set(mockResources.map(r => r.type)));

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubject = subjectFilter === 'all' ? true : resource.subject === subjectFilter;
    const matchesType = typeFilter === 'all' ? true : resource.type === typeFilter;

    return matchesSearch && matchesSubject && matchesType;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Educational Resources</h2>
        <p className="mt-1 text-sm text-gray-500">Manage and organize learning materials</p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg border">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Subjects</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
            ))}
          </select>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Plus size={20} />
            Add Resource
          </button>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg border shadow-sm p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {getResourceIcon(resource.type)}
                <div>
                  <h3 className="font-medium text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-500">{resource.subject} - Grade {resource.grade}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit2 size={16} />
                </button>
                <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{resource.description}</p>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{resource.fileSize}</span>
              <span>{resource.downloadCount} downloads</span>
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <div className="text-xs text-gray-500">
                <p>Uploaded by: {resource.uploadedBy}</p>
                <p>Date: {resource.uploadDate}</p>
              </div>
              <div className="flex items-center gap-2">
                {resource.type === 'video' ? (
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <ExternalLink size={16} />
                  </button>
                ) : (
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <Download size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}