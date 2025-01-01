import { User } from '../types/auth';
import { AdminDashboard } from './admin/AdminDashboard';
import { SuperAdminDashboard } from './superadmin/SuperAdminDashboard';
import { TeacherDashboard } from './teacher/TeacherDashboard';
import { StudentDashboard } from './student/StudentDashboard';
import { ParentDashboard } from './parent/ParentDashboard';

export function Dashboard() {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');

  const renderDashboardContent = () => {
    switch (user.role) {
      case 'SUPER_ADMIN':
        return <SuperAdminDashboard />;
      case 'ADMIN':
        return <AdminDashboard />;
      case 'TEACHER':
        return <TeacherDashboard />;
      case 'STUDENT':
        return <StudentDashboard />;
      case 'PARENT':
        return <ParentDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <div className="h-full">
      {renderDashboardContent()}
    </div>
  );
}