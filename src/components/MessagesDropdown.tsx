
import React, { useState } from 'react';
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageCircle, Check } from 'lucide-react';

type Message = {
  id: string;
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  content: string;
  time: string;
  read: boolean;
};

const messages: Message[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Johnson',
      avatar: '/placeholder.svg',
      initials: 'SJ',
    },
    content: 'Hey! Can you help me with the course module?',
    time: '11h',
    read: false,
  },
  {
    id: '2',
    user: {
      name: 'Michael Brown',
      initials: 'MB',
    },
    content: 'Thanks for your comment on my post!',
    time: '3h',
    read: false,
  },
  {
    id: '3',
    user: {
      name: 'Jessica Lee',
      avatar: '/placeholder.svg',
      initials: 'JL',
    },
    content: 'Are you coming to the meetup next week?',
    time: '1d',
    read: true,
  },
];

const MessagesDropdown = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const unreadMessages = messages.filter(msg => !msg.read);
  const readMessages = messages.filter(msg => msg.read);
  
  return (
    <DropdownMenuContent align="end" className="w-80 p-0">
      <div className="flex items-center justify-between p-3 border-b">
        <h3 className="font-medium">Messages</h3>
        <Button variant="ghost" size="sm" className="text-xs text-brand-purple">
          Mark all as read
        </Button>
      </div>
      
      <div className="p-2 border-b">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users..."
            className="pl-9 h-8 text-sm"
          />
        </div>
      </div>
      
      <Tabs defaultValue="unread">
        <TabsList className="w-full">
          <TabsTrigger value="unread" className="flex-1">
            Unread ({unreadMessages.length})
          </TabsTrigger>
          <TabsTrigger value="all" className="flex-1">
            All
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="unread" className="max-h-[320px] overflow-y-auto m-0">
          {unreadMessages.length > 0 ? (
            unreadMessages.map((message) => (
              <MessageItem key={message.id} message={message} />
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No unread messages
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="all" className="max-h-[320px] overflow-y-auto m-0">
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </TabsContent>
      </Tabs>
      
      <div className="p-2 text-center border-t">
        <Button variant="ghost" size="sm" className="text-sm text-brand-purple">
          View all messages
        </Button>
      </div>
    </DropdownMenuContent>
  );
};

const MessageItem = ({ message }: { message: Message }) => {
  return (
    <div className={`flex items-start p-3 gap-3 border-b hover:bg-gray-50 transition-colors ${
      !message.read ? 'bg-brand-light/30' : ''
    }`}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={message.user.avatar} alt={message.user.name} />
        <AvatarFallback>{message.user.initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium truncate">{message.user.name}</p>
          <span className="text-xs text-gray-500">{message.time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{message.content}</p>
        <Button variant="ghost" size="sm" className="mt-1 h-6 text-xs px-2 text-brand-purple">
          Message
        </Button>
      </div>
      
      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
        {message.read ? <Check size={16} /> : <MessageCircle size={16} />}
      </Button>
    </div>
  );
};

export default MessagesDropdown;
