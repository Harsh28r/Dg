import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarToggleProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function SidebarToggle({ isCollapsed, onToggle }: SidebarToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute -right-3 top-10 bg-white border rounded-full p-1 hover:bg-gray-50"
    >
      {isCollapsed ? (
        <ChevronRight size={16} className="text-gray-600" />
      ) : (
        <ChevronLeft size={16} className="text-gray-600" />
      )}
    </button>
  );
}