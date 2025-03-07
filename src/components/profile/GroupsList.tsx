
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

interface GroupsListProps {
  onSelectGroup: (groupName: string) => void;
}

const GroupsList: React.FC<GroupsListProps> = ({ onSelectGroup }) => {
  const [showAll, setShowAll] = useState(false);
  
  // Mock group data
  const groups = [
    { id: 1, name: "Prompt Monkey", members: 4832, image: "https://images.unsplash.com/photo-1517849845537-4d257902454a" },
    { id: 2, name: "Design Systems", members: 2376, image: "https://images.unsplash.com/photo-1534670007418-bc7b2a6429cf" },
    { id: 3, name: "Frontend Masters", members: 5291, image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12" },
    { id: 4, name: "React Enthusiasts", members: 3842, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee" },
    { id: 5, name: "UX Research", members: 1922, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
    { id: 6, name: "AI Creators", members: 2145, image: "https://images.unsplash.com/photo-1677442340598-4dd26ffd62e4" },
  ];
  
  const displayGroups = showAll ? groups : groups.slice(0, 3);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Groups</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {displayGroups.map((group) => (
          <Card key={group.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => onSelectGroup(group.name)}>
            <div className="h-24 overflow-hidden">
              <img 
                src={group.image} 
                alt={group.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-xs text-gray-500">{group.members.toLocaleString()} members</p>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={group.image} />
                  <AvatarFallback>{group.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {!showAll && groups.length > 3 && (
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setShowAll(true)}
        >
          Show More Groups
        </Button>
      )}
      
      {showAll && (
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setShowAll(false)}
        >
          Show Less
        </Button>
      )}
    </div>
  );
};

export default GroupsList;
