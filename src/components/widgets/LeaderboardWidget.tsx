
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LeaderboardUser {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  score: number;
  badge?: string;
}

interface LeaderboardWidgetProps {
  title: string;
  period: string;
  users: LeaderboardUser[];
}

const LeaderboardWidget: React.FC<LeaderboardWidgetProps> = ({ 
  title, 
  period, 
  users 
}) => {
  return (
    <Card className="sticky top-96 mt-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Trophy size={16} className="text-amber-500" />
          {title}
          <Badge variant="outline" className="ml-2 text-xs font-normal">
            {period}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-4 pt-0">
        <ul className="space-y-3">
          {users.map((user, index) => (
            <li key={user.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 text-sm font-medium text-gray-500">
                  {index + 1}
                </div>
                
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  {user.badge && (
                    <Badge variant="outline" className="text-xs px-1 border-amber-300 text-amber-700">
                      {user.badge}
                    </Badge>
                  )}
                </div>
              </div>
              
              <span className="font-semibold text-green-600">+{user.score}</span>
            </li>
          ))}
        </ul>
        
        <Link to="/leaderboards">
          <Button variant="ghost" size="sm" className="w-full mt-4 text-brand-purple">
            See Full Leaderboard
            <ChevronRight size={16} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default LeaderboardWidget;
