import { Bell, MessageCircle, Calendar, AlertCircle } from 'lucide-react';
import type { UserRole } from '../../types/auth';

type Notification = {
  id: string;
  type: 'message' | 'event' | 'alert' | 'reminder';
  title: string;
  description: string;
  time: string;
  read: boolean;
};

const mockNotifications: Record<UserRole, Notification[]> = {
  'SUPER_ADMIN': [
    {
      id: '1',
      type: 'alert',
      title: 'New Institute Registration',
      description: 'A new institute has requested registration approval.',
      time: '1 hour ago',
      read: false
    },
    {
      id: '2',
      type: 'message',
      title: 'System Update',
      description: 'New features have been deployed successfully.',
      time: '3 hours ago',
      read: false
    }
  ],
  'ADMIN': [
    {
      id: '1',
      type: 'alert',
      title: 'Teacher Absence',
      description: 'Mathematics teacher reported sick leave for today.',
      time: '2 hours ago',
      read: false
    },
    {
      id: '2',
      type: 'event',
      title: 'Staff Meeting',
      description: 'Monthly staff meeting scheduled for tomorrow.',
      time: '5 hours ago',
      read: false
    }
  ],
  'TEACHER': [
    {
      id: '1',
      type: 'message',
      title: 'New Message from Principal',
      description: 'Please submit the quarterly assessment reports by Friday.',
      time: '2 hours ago',
      read: false
    },
    {
      id: '2',
      type: 'event',
      title: 'Parent-Teacher Meeting',
      description: 'Meeting scheduled for next week.',
      time: '1 day ago',
      read: true
    }
  ],
  'STUDENT': [
    {
      id: '1',
      type: 'alert',
      title: 'Assignment Due',
      description: 'Mathematics assignment due tomorrow.',
      time: '3 hours ago',
      read: false
    },
    {
      id: '2',
      type: 'event',
      title: 'Exam Schedule',
      description: 'Mid-term exams start next week.',
      time: '1 day ago',
      read: true
    }
  ],
  'PARENT': [
    {
      id: '1',
      type: 'alert',
      title: 'Attendance Alert',
      description: 'Your child was marked absent today.',
      time: '2 hours ago',
      read: false
    },
    {
      id: '2',
      type: 'message',
      title: 'Teacher\'s Note',
      description: 'Your child has shown improvement in mathematics.',
      time: '1 day ago',
      read: true
    }
  ]
};

interface NotificationsSectionProps {
  role: UserRole;
}

export function NotificationsSection({ role }: NotificationsSectionProps) {
  const notifications = mockNotifications[role];

  const getIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageCircle size={18} className="text-blue-600" />;
      case 'event':
        return <Calendar size={18} className="text-green-600" />;
      case 'alert':
        return <AlertCircle size={18} className="text-red-600" />;
      default:
        return <Bell size={18} className="text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        <p className="mt-1 text-sm text-gray-500">Stay updated with latest updates and announcements</p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-lg shadow-sm border p-4 ${
              !notification.read ? 'border-l-4 border-l-blue-600' : ''
            }`}
          >
            <div className="flex gap-4">
              <div className="mt-1">{getIcon(notification.type)}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-gray-900">{notification.title}</h3>
                  <span className="text-sm text-gray-500">{notification.time}</span>
                </div>
                <p className="mt-1 text-gray-600">{notification.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="text-sm text-blue-600 hover:text-blue-700">
          View All Notifications
        </button>
      </div>
    </div>
  );
}