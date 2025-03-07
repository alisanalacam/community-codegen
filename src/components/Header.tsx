
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Bell, MessageSquare, ChevronDown, 
  User, Settings, HelpCircle, LogOut, Plus, Compass
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NotificationsDropdown from './NotificationsDropdown';
import MessagesDropdown from './MessagesDropdown';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3);
  const [unreadNotifications, setUnreadNotifications] = useState(5);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'header-scrolled py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Community Dropdown */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 focus:outline-none">
                  <div className="w-8 h-8 rounded bg-brand-purple text-white flex items-center justify-center font-bold">S</div>
                  <span className="font-medium">SkoolClone</span>
                  <ChevronDown size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <div className="px-2 py-1.5">
                  <Input 
                    type="search" 
                    placeholder="Search communities..." 
                    className="h-8 text-sm" 
                  />
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus size={16} className="mr-2" />
                  <span>Create community</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Compass size={16} className="mr-2" />
                  <span>Explore communities</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Search - Only visible when scrolled */}
          {scrolled && (
            <div className="flex-grow max-w-md mx-4">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-9 h-9 w-full"
                />
              </div>
            </div>
          )}
          
          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            {/* Messages Dropdown */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <MessageSquare size={20} />
                    {unreadMessages > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {unreadMessages}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <MessagesDropdown />
              </DropdownMenu>
            </div>
            
            {/* Notifications Dropdown */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell size={20} />
                    {unreadNotifications > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {unreadNotifications}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <NotificationsDropdown />
              </DropdownMenu>
            </div>
            
            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 p-0">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User size={16} className="mr-2" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings size={16} className="mr-2" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <HelpCircle size={16} className="mr-2" />
                  <span>Help Center</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Plus size={16} className="mr-2" />
                  <span>Create a community</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Compass size={16} className="mr-2" />
                  <span>Discover communities</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 focus:text-red-500">
                  <LogOut size={16} className="mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
