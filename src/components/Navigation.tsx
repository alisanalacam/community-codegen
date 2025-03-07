
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, School, Users, Trophy, Info, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { 
      path: "/classroom", 
      name: "Classroom", 
      icon: <School className="h-4 w-4" /> 
    },
    { 
      path: "/calendar", 
      name: "Calendar", 
      icon: <Calendar className="h-4 w-4" /> 
    },
    { 
      path: "/members", 
      name: "Members", 
      icon: <Users className="h-4 w-4" /> 
    },
    { 
      path: "/leaderboards", 
      name: "Leaderboards", 
      icon: <Trophy className="h-4 w-4" /> 
    },
    { 
      path: "/about", 
      name: "About", 
      icon: <Info className="h-4 w-4" /> 
    },
    { 
      path: "/profile", 
      name: "Profile", 
      icon: <User className="h-4 w-4" /> 
    },
  ];

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 mb-6">
      <div className="container mx-auto">
        <nav className="flex overflow-x-auto">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`menu-link flex items-center gap-1 ${
                currentPath === link.path ? "active" : ""
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
