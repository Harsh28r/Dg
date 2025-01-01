import { Menu } from 'lucide-react';

interface MobileHeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function MobileHeader({ isSidebarOpen, toggleSidebar }: MobileHeaderProps) {
  return (
    <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-gray-100 rounded-md"
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>
    </div>
  );
}