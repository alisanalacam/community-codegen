
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [activeItem, setActiveItem] = useState('Community');

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex justify-center overflow-x-auto">
        <ul className="flex space-x-1 py-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "menu-link",
                  activeItem === item.name && "active"
                )}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
