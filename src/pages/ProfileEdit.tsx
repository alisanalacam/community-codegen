
import React from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ProfileEditForm from "@/components/profile/ProfileEditForm";

const ProfileEdit = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <nav className="space-y-1">
                <NavItem href="#" active>Profile</NavItem>
                <NavItem href="#">Communities</NavItem>
                <NavItem href="#">Affiliates</NavItem>
                <NavItem href="#">Account</NavItem>
                <NavItem href="#">Password</NavItem>
                <NavItem href="#">Notifications</NavItem>
                <NavItem href="#">Chat</NavItem>
                <NavItem href="#">Payment Methods</NavItem>
                <NavItem href="#">Payment History</NavItem>
                <NavItem href="#">Theme</NavItem>
              </nav>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ProfileEditForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface NavItemProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, active, children }) => {
  return (
    <a 
      href={href} 
      className={`block px-3 py-2 rounded-md text-sm font-medium ${
        active 
          ? "bg-brand-light text-brand-purple" 
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      {children}
    </a>
  );
};

export default ProfileEdit;
