
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { ChevronUp, Trophy, Award, Star, Info, Calendar, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const leaderboardUsers = [
  {
    id: '1',
    rank: 1,
    name: 'Sarah Johnson',
    avatar: '/placeholder.svg',
    initials: 'SJ',
    level: 8,
    points: 3250,
    progress: 75,
    badges: 12,
    activity: [80, 65, 90, 70, 85, 90, 95],
  },
  {
    id: '2',
    rank: 2,
    name: 'Michael Brown',
    initials: 'MB',
    level: 7,
    points: 2980,
    progress: 60,
    badges: 9,
    activity: [70, 75, 60, 80, 75, 65, 85],
  },
  {
    id: '3',
    rank: 3,
    name: 'Jessica Lee',
    avatar: '/placeholder.svg',
    initials: 'JL',
    level: 7,
    points: 2840,
    progress: 85,
    badges: 10,
    activity: [60, 75, 85, 90, 70, 65, 75],
  },
  {
    id: '4',
    rank: 4,
    name: 'David Wilson',
    initials: 'DW',
    level: 6,
    points: 2120,
    progress: 40,
    badges: 7,
    activity: [50, 65, 70, 55, 60, 75, 65],
  },
  {
    id: '5',
    rank: 5,
    name: 'Emily Rodriguez',
    avatar: '/placeholder.svg',
    initials: 'ER',
    level: 6,
    points: 2050,
    progress: 50,
    badges: 8,
    activity: [70, 60, 50, 65, 80, 75, 60],
  },
];

const Leaderboards = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Space for header */}
      <div className="h-16"></div>
      
      <Navigation />
      
      <main className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Community Leaderboard</h1>
          <div className="flex items-center gap-2">
            <Select defaultValue="weekly">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">This Week</SelectItem>
                <SelectItem value="monthly">This Month</SelectItem>
                <SelectItem value="alltime">All Time</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon">
              <Filter size={16} />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-9">
            <Tabs defaultValue="points">
              <TabsList className="mb-4">
                <TabsTrigger value="points">Points</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="courses">Course Completion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="points">
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="w-16 text-center py-3">Rank</th>
                            <th className="text-left py-3 pl-4">Member</th>
                            <th className="w-32 text-center py-3">Level</th>
                            <th className="w-32 text-center py-3">Points</th>
                            <th className="w-48 text-center py-3">Next Level</th>
                            <th className="w-28 text-center py-3"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {leaderboardUsers.map((user) => (
                            <tr key={user.id} className="border-t hover:bg-muted/20 transition-colors">
                              <td className="text-center py-4">
                                {user.rank === 1 ? (
                                  <Trophy className="mx-auto text-yellow-500" size={20} />
                                ) : user.rank === 2 ? (
                                  <Trophy className="mx-auto text-gray-400" size={20} />
                                ) : user.rank === 3 ? (
                                  <Trophy className="mx-auto text-amber-700" size={20} />
                                ) : (
                                  user.rank
                                )}
                              </td>
                              <td className="py-4 pl-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback>{user.initials}</AvatarFallback>
                                  </Avatar>
                                  <span className="font-medium">{user.name}</span>
                                </div>
                              </td>
                              <td className="text-center py-4">
                                <Badge variant="outline" className="border-amber-300 text-amber-700">
                                  Level {user.level}
                                </Badge>
                              </td>
                              <td className="text-center py-4 font-medium">
                                {user.points.toLocaleString()}
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex flex-col gap-1">
                                  <div className="flex justify-between text-xs text-gray-500">
                                    <span>Progress</span>
                                    <span>{user.progress}%</span>
                                  </div>
                                  <Progress value={user.progress} className="h-2" />
                                </div>
                              </td>
                              <td className="text-center py-4">
                                <Button variant="ghost" size="sm">
                                  View Profile
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="badges">
                <Card className="p-6 text-center">
                  <p className="text-gray-500">The badges leaderboard will show users ranked by badges earned.</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity">
                <Card className="p-6 text-center">
                  <p className="text-gray-500">The activity leaderboard will show users ranked by recent activity.</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="courses">
                <Card className="p-6 text-center">
                  <p className="text-gray-500">The course completion leaderboard will show users ranked by courses completed.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy size={16} className="text-yellow-500" />
                  Your Ranking
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <Badge size="lg" className="px-3 py-1 bg-brand-purple text-white">
                    Rank #42
                  </Badge>
                  <div className="flex items-center text-green-600 text-sm">
                    <ChevronUp size={16} />
                    <span>3 spots</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Total Points</span>
                    <span className="font-medium">1,250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Current Level</span>
                    <Badge variant="outline" className="border-amber-300 text-amber-700">
                      Level 5
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Badges Earned</span>
                    <span className="font-medium">7</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-xs text-gray-500 mb-1">Level Progress</p>
                  <div className="flex items-center gap-2">
                    <Progress value={65} className="h-2 flex-1" />
                    <span className="text-xs text-gray-500">65%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    750 more points until Level 6
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award size={16} className="text-purple-500" />
                  Level Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 border-amber-300 text-amber-700">
                      Lvl 5
                    </Badge>
                    <span className="text-sm">Access to intermediate courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 border-amber-300 text-amber-700">
                      Lvl 6
                    </Badge>
                    <span className="text-sm">Group mentoring sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 border-amber-300 text-amber-700">
                      Lvl 7
                    </Badge>
                    <span className="text-sm">Access to advanced workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 border-amber-300 text-amber-700">
                      Lvl 10
                    </Badge>
                    <span className="text-sm">One-on-one mentoring</span>
                  </li>
                </ul>
                
                <Button variant="ghost" size="sm" className="w-full mt-3 gap-1">
                  <Info size={14} />
                  <span>Learn More</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboards;
