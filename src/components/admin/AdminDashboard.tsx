import { useState } from 'react';
import { 
  BarChart3, Users, BookOpen, Calendar, ClipboardList, 
  DollarSign, Box, FileText, Video, CheckSquare, Brain,
  Bell
} from 'lucide-react';
import { AdminOverview } from './sections/AdminOverview';
import { TeacherSection } from './sections/TeacherSection';
import { StudentSection } from './sections/StudentSection';
import { TimeTableSection } from './sections/TimeTableSection';
import { LeadSection } from './sections/LeadSection';
import { PaystubSection } from './sections/PaystubSection';
import { InventorySection } from './sections/InventorySection';
import { FormsSection } from './sections/FormsSection';
import { ResourceSection } from './sections/ResourceSection';
import { AttendanceSection } from './sections/AttendanceSection';
import { QuestionPaperSection } from './sections/QuestionPaperSection';
import { NotificationsSection } from '../common/NotificationsSection';
import { SidebarToggle } from '../SidebarToggle';
import { useSidebarState } from '../../hooks/useSidebarState';
import { MobileHeader } from '../MobileHeader';

const navItems = [
  { id: 'overview', label: 'Overview', icon: <BarChart3 size={20} /> },
  { id: 'teachers', label: 'Teachers', icon: <Users size={20} /> },
  { id: 'students', label: 'Students', icon: <Users size={20} /> },
  { id: 'timetable', label: 'Timetable', icon: <Calendar size={20} /> },
  { id: 'leads', label: 'Lead Management', icon: <ClipboardList size={20} /> },
  { id: 'paystub', label: 'Paystub', icon: <DollarSign size={20} /> },
  { id: 'inventory', label: 'Inventory', icon: <Box size={20} /> },
  { id: 'forms', label: 'Forms', icon: <FileText size={20} /> },
  { id: 'resources', label: 'Resources', icon: <Video size={20} /> },
  { id: 'attendance', label: 'Attendance', icon: <CheckSquare size={20} /> },
  { id: 'question-paper', label: 'Question Paper', icon: <Brain size={20} /> },
  { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
];

interface AdminDashboardProps {
  instituteId?: string;
}

export function AdminDashboard({ instituteId }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const { isCollapsed, isMobileOpen, toggleSidebar, toggleMobile } = useSidebarState();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  const currentInstituteId = instituteId || user.instituteId;

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AdminOverview instituteId={currentInstituteId} />;
      case 'teachers':
        return <TeacherSection instituteId={currentInstituteId} />;
      case 'students':
        return <StudentSection instituteId={currentInstituteId} />;
      case 'timetable':
        return <TimeTableSection instituteId={currentInstituteId} />;
      case 'leads':
        return <LeadSection instituteId={currentInstituteId} />;
      case 'paystub':
        return <PaystubSection instituteId={currentInstituteId} />;
      case 'inventory':
        return <InventorySection instituteId={currentInstituteId} />;
      case 'forms':
        return <FormsSection instituteId={currentInstituteId} />;
      case 'resources':
        return <ResourceSection instituteId={currentInstituteId} />;
      case 'attendance':
        return <AttendanceSection instituteId={currentInstituteId} />;
      case 'question-paper':
        return <QuestionPaperSection instituteId={currentInstituteId} />;
      case 'notifications':
        return <NotificationsSection role="ADMIN" />;
      default:
        return <AdminOverview instituteId={currentInstituteId} />;
    }
  };

  return (
    <div className="h-[calc(100vh-73px)]">
      <MobileHeader isSidebarOpen={isMobileOpen} toggleSidebar={toggleMobile} />
      <div className="flex h-full">
        {/* Sidebar - Hidden on mobile by default */}
        <div
          className={`
            fixed lg:relative
            inset-y-0 left-0 z-50
            transform lg:transform-none
            transition-transform duration-300 ease-in-out
            ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            bg-white border-r overflow-y-auto
            ${isCollapsed ? 'lg:w-16' : 'lg:w-64'}
          `}
        >
          <SidebarToggle isCollapsed={isCollapsed} onToggle={toggleSidebar} />
          <nav className="p-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (isMobileOpen) toggleMobile();
                  }}
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

        {/* Overlay for mobile */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
            onClick={toggleMobile}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}