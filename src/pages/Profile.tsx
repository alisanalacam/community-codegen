
import React, { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ActivityChart from "@/components/profile/ActivityChart";
import GroupsList from "@/components/profile/GroupsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-6">Profile Activity</h1>
            
            <ActivityChart />
            
            <Separator className="my-8" />
            
            {selectedGroup ? (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">8 contributions to {selectedGroup}</h2>
                  <button 
                    className="text-brand-purple text-sm"
                    onClick={() => setSelectedGroup(null)}
                  >
                    View all groups
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-500">Activity in this group will appear here.</p>
                </div>
              </div>
            ) : (
              <GroupsList onSelectGroup={setSelectedGroup} />
            )}
          </div>
          
          <div className="md:col-span-1">
            <ProfileHeader />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
