import { useState } from 'react';
import { User, Users, Clock, CreditCard, Bell } from 'lucide-react';
import { ProfileSection } from './sections/ProfileSection';
import { ChildrenSection } from './sections/ChildrenSection';
import { AttendanceSection } from './sections/AttendanceSection';
import { FeesSection } from './sections/FeesSection';
import { NotificationsSection } from './sections/NotificationsSection';
import { SidebarToggle } from '../SidebarToggle';
import { useSidebarState } from '../../hooks/useSidebarState';

const navItems = [
  { id: 'profile', label: 'Profile', icon: <User size={20} /> },
  { id: 'children', label: 'Children', icon: <Users size={20} /> },
  { id: 'attendance', label: 'Attendance', icon: <Clock size={20} /> },
  { id: 'fees', label: 'Fees', icon: <CreditCard size={20} /> },
  { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
];

export function ParentDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const { isCollapsed, toggleSidebar } = useSidebarState();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSection />;
      case 'children':
        return <ChildrenSection />;
      case 'attendance':
        return <AttendanceSection />;
      case 'fees':
        return <FeesSection />;
      case 'notifications':
        return <NotificationsSection />;
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