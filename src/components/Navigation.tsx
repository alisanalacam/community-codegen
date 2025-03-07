
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: 'Community', path: '/' },
  { name: 'Classroom', path: '/classroom' },
  { name: 'Calendar', path: '/calendar' },
  { name: 'Members', path: '/members' },
  { name: 'Leaderboards', path: '/leaderboards' },
  { name: 'About', path: '/about' },
];

const Navigation = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');
  
  // Set the active item based on the current path
  useEffect(() => {
    const path = location.pathname;
    const item = navItems.find(item => item.path === path);
    if (item) {
      setActiveItem(item.name);
    } else {
      // Default to Community for home or unknown routes
      setActiveItem('Community');
    }
  }, [location.pathname]);

  return (
    <nav className="sticky top-16 z-10 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex justify-center overflow-x-auto">
        <ul className="flex space-x-6 py-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "relative px-1 py-2 text-md font-medium transition-colors",
                  activeItem === item.name 
                    ? "text-brand-purple" 
                    : "text-gray-600 hover:text-gray-900"
                )}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
                {activeItem === item.name && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-purple" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
