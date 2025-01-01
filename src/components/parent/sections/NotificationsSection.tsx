import { Bell, MessageCircle, Calendar, AlertCircle } from 'lucide-react';

type Notification = {
  id: string;
  type: 'message' | 'event' | 'alert';
  title: string;
  description: string;
  time: string;
  childName?: string;
  read: boolean;
};

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'alert',
    title: 'Alex - Absent Today',
    description: 'Your child Alex was marked absent for today\'s classes.',
    time: '2 hours ago',
    childName: 'Alex Johnson',
    read: false
  },
  {
    id: '2',
    type: 'message',
    title: 'Message from Math Teacher',
    description: 'Emma has shown great improvement in calculus this month.',
    time: '5 hours ago',
    childName: 'Emma Johnson',
    read: false
  },
  {
    id: '3',
    type: 'event',
    title: 'Parent-Teacher Meeting',
    description: 'Scheduled for next Friday at 3 PM.',
    time: '1 day ago',
    read: true
  }
];

export function NotificationsSection() {
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
        <p className="mt-1 text-sm text-gray-500">Stay updated with your children's activities</p>
      </div>

      <div className="space-y-4">
        {mockNotifications.map((notification) => (
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
                  <div>
                    <h3 className="font-medium text-gray-900">{notification.title}</h3>
                    {notification.childName && (
                      <p className="text-sm text-gray-500">
                        Child: {notification.childName}
                      </p>
                    )}
                  </div>
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