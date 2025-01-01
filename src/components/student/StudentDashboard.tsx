import { useState } from 'react';
import { User, LineChart, FileText, Clock, CreditCard } from 'lucide-react';
import { ProfileSection } from './sections/ProfileSection';
import { ProgressReportSection } from './sections/ProgressReportSection';
import { TestDetailsSection } from './sections/TestDetailsSection';
import { TimetableSection } from './sections/TimetableSection';
import { FeesSection } from './sections/FeesSection';
import { SidebarToggle } from '../SidebarToggle';
import { useSidebarState } from '../../hooks/useSidebarState';

const navItems = [
  { id: 'profile', label: 'Profile', icon: <User size={20} /> },
  { id: 'progress', label: 'Progress Report', icon: <LineChart size={20} /> },
  { id: 'tests', label: 'Test Details', icon: <FileText size={20} /> },
  { id: 'timetable', label: 'Timetable', icon: <Clock size={20} /> },
  { id: 'fees', label: 'Fees Payment', icon: <CreditCard size={20} /> },
];

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const { isCollapsed, toggleSidebar } = useSidebarState();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSection />;
      case 'progress':
        return <ProgressReportSection />;
      case 'tests':
        return <TestDetailsSection />;
      case 'timetable':
        return <TimetableSection />;
      case 'fees':
        return <FeesSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex h-[calc(100vh-73px)]">
      {/* Sidebar */}
      <div className={`relative bg-white border-r overflow-y-auto transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}>
        <SidebarToggle isCollapsed={isCollapsed} onToggle={toggleSidebar} />
        <nav className="p-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        {renderContent()}
      </div>
    </div>
  );
}