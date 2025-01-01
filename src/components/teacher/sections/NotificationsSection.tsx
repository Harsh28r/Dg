import { Bell, MessageCircle, Calendar, Clock } from 'lucide-react';

type Notification = {
  id: string;
  type: 'message' | 'event' | 'reminder';
  title: string;
  description: string;
  time: string;
  read: boolean;
};

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'message',
    title: 'New Message from Principal',
    description: 'Please submit the quarterly assessment reports by Friday.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    type: 'event',
    title: 'Staff Meeting',
    description: 'Monthly staff meeting scheduled for tomorrow at 9 AM.',
    time: '5 hours ago',
    read: false,
  },
  {
    id: '3',
    type: 'reminder',
    title: 'Exam Schedule',
    description: 'Mid-term examinations start next week.',
    time: '1 day ago',
    read: true,
  },
];

export function NotificationsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageCircle size={18} className="text-blue-600" />;
      case 'event':
        return <Calendar size={18} className="text-green-600" />;
      case 'reminder':
        return <Clock size={18} className="text-yellow-600" />;
      default:
        return <Bell size={18} className="text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        <p className="mt-1 text-sm text-gray-500">Stay updated with latest announcements</p>
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