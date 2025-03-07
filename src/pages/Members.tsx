
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MessageCircle, UserPlus, Star, Users, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const members = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Community Leader',
    avatar: '/placeholder.svg',
    initials: 'SJ',
    level: 8,
    location: 'New York, USA',
    joinDate: 'Mar 2022',
    badges: ['Teacher', 'Contributor'],
    online: true,
  },
  {
    id: '2',
    name: 'Michael Brown',
    role: 'Developer',
    initials: 'MB',
    level: 6,
    location: 'London, UK',
    joinDate: 'Aug 2022',
    badges: ['Helper'],
    online: false,
  },
  {
    id: '3',
    name: 'Jessica Lee',
    role: 'UX Designer',
    avatar: '/placeholder.svg',
    initials: 'JL',
    level: 7,
    location: 'Toronto, Canada',
    joinDate: 'Jan 2023',
    badges: ['Contributor', 'Mentor'],
    online: true,
  },
  {
    id: '4',
    name: 'David Wilson',
    role: 'Student',
    initials: 'DW',
    level: 4,
    location: 'Sydney, Australia',
    joinDate: 'Nov 2022',
    badges: ['Rising Star'],
    online: false,
  },
  {
    id: '5',
    name: 'Emily Rodriguez',
    role: 'Frontend Developer',
    avatar: '/placeholder.svg',
    initials: 'ER',
    level: 5,
    location: 'San Francisco, USA',
    joinDate: 'Apr 2023',
    badges: ['Helper'],
    online: true,
  },
  {
    id: '6',
    name: 'James Chen',
    role: 'Product Manager',
    initials: 'JC',
    level: 6,
    location: 'Berlin, Germany',
    joinDate: 'Feb 2023',
    badges: ['Contributor'],
    online: false,
  },
];

const Members = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Space for header */}
      <div className="h-16"></div>
      
      <Navigation />
      
      <main className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Community Members</h1>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500 flex items-center">
              <Users size={16} className="mr-1" />
              <span>{members.length} members</span>
            </div>
            <Button className="bg-brand-purple hover:bg-brand-dark gap-2">
              <UserPlus size={16} />
              <span>Invite Members</span>
            </Button>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search members..." 
                  className="pl-9"
                />
              </div>
              
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="leader">Community Leader</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon">
                  <Filter size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Members</TabsTrigger>
            <TabsTrigger value="online">Online Now</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="recent">Recently Joined</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member) => (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      {member.online && (
                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="border-amber-300 text-amber-700">
                    Lvl {member.level}
                  </Badge>
                </div>
                
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={14} />
                    <span>Joined {member.joinDate}</span>
                  </div>
                </div>
                
                {member.badges && member.badges.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        <Star size={12} />
                        <span>{badge}</span>
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 flex justify-between">
                  <Button variant="outline" size="sm" className="w-[48%] gap-1">
                    <UserPlus size={14} />
                    <span>Follow</span>
                  </Button>
                  <Button variant="outline" size="sm" className="w-[48%] gap-1">
                    <MessageCircle size={14} />
                    <span>Message</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

// Import CalendarIcon
import { Calendar as CalendarIcon } from 'lucide-react';

export default Members;
