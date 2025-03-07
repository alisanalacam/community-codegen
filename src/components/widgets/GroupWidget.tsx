
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, ShieldCheck } from 'lucide-react';

interface GroupWidgetProps {
  group: {
    name: string;
    slug: string;
    description: string;
    image: string;
    members: number;
    online: number;
    admins: number;
  };
}

const GroupWidget: React.FC<GroupWidgetProps> = ({ group }) => {
  return (
    <Card className="sticky top-24">
      <div className="h-32 overflow-hidden rounded-t-lg">
        <img 
          src={group.image} 
          alt={group.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="pb-2 pt-4">
        <h3 className="text-lg font-semibold">{group.name}</h3>
        <p className="text-sm text-gray-500">@{group.slug}</p>
      </CardHeader>
      
      <CardContent className="pb-4 pt-0 space-y-4">
        <p className="text-sm text-gray-700">{group.description}</p>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
            <div className="flex items-center gap-1 text-gray-700 mb-1">
              <Users size={14} />
              <span className="text-xs">Members</span>
            </div>
            <span className="font-semibold">{group.members.toLocaleString()}</span>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
            <div className="flex items-center gap-1 text-gray-700 mb-1">
              <Clock size={14} />
              <span className="text-xs">Online</span>
            </div>
            <span className="font-semibold">{group.online}</span>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
            <div className="flex items-center gap-1 text-gray-700 mb-1">
              <ShieldCheck size={14} />
              <span className="text-xs">Admins</span>
            </div>
            <span className="font-semibold">{group.admins}</span>
          </div>
        </div>
        
        <Button className="w-full" variant="outline">
          Visit Group
        </Button>
      </CardContent>
    </Card>
  );
};

export default GroupWidget;
