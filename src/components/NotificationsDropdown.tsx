
import React from 'react';
import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Bell, Check } from 'lucide-react';

type Notification = {
  id: string;
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  action: string;
  content: string;
  time: string;
  read: boolean;
};

const notifications: Notification[] = [
  {
    id: '1',
    user: {
      name: 'John Smith',
      initials: 'JS',
    },
    action: 'following',
    content: 'new post',
    time: '11h',
    read: false,
  },
  {
    id: '2',
    user: {
      name: 'Sara Johnson',
      avatar: '/placeholder.svg',
      initials: 'SJ',
    },
    action: 'mentioned you',
    content: 'in a comment',
    time: '3h',
    read: false,
  },
  {
    id: '3',
    user: {
      name: 'Mike Davis',
      initials: 'MD',
    },
    action: 'replied',
    content: 'to your comment',
    time: '1d',
    read: true,
  },
];

const NotificationsDropdown = () => {
  return (
    <DropdownMenuContent align="end" className="w-80 p-0">
      <div className="flex items-center justify-between p-3 border-b">
        <h3 className="font-medium">Notifications</h3>
        <Button variant="ghost" size="sm" className="text-xs text-brand-purple">
          Mark all as read
        </Button>
      </div>
      
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className={`flex items-start p-3 gap-3 border-b hover:bg-gray-50 transition-colors ${
              !notification.read ? 'bg-brand-light/30' : ''
            }`}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
              <AvatarFallback>{notification.user.initials}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium truncate">
                  {notification.user.name}
                  <span className="font-normal text-gray-500 ml-1">
                    ({notification.action})
                  </span>
                </p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{notification.content}</p>
            </div>
            
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
              {notification.read ? <Check size={16} /> : <Bell size={16} />}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="p-2 text-center">
        <Button variant="ghost" size="sm" className="text-sm text-brand-purple">
          View all notifications
        </Button>
      </div>
    </DropdownMenuContent>
  );
};

export default NotificationsDropdown;
