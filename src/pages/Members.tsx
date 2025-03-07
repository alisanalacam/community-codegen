
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MessageCircle, UserPlus, Star, Users, MapPin, Calendar as CalendarIcon, Trophy, Crown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const members = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Community Leader',
    slug: '@sarahj',
    bio: 'UX Designer passionate about creating intuitive interfaces',
    avatar: '/placeholder.svg',
    initials: 'SJ',
    level: 8,
    score: 1250,
    location: 'New York, USA',
    joinDate: 'Mar 2022',
    badges: ['Teacher', 'Contributor'],
    online: true,
  },
  {
    id: '2',
    name: 'Michael Brown',
    role: 'Developer',
    slug: '@mikebrown',
    bio: 'Full-stack developer with a focus on React and Node.js',
    initials: 'MB',
    level: 6,
    score: 890,
    location: 'London, UK',
    joinDate: 'Aug 2022',
    badges: ['Helper'],
    online: false,
    lastOnline: '3 days ago'
  },
  {
    id: '3',
    name: 'Jessica Lee',
    role: 'UX Designer',
    slug: '@jesslee',
    bio: 'Creating user-centered designs for web and mobile applications',
    avatar: '/placeholder.svg',
    initials: 'JL',
    level: 7,
    score: 1125,
    location: 'Toronto, Canada',
    joinDate: 'Jan 2023',
    badges: ['Contributor', 'Mentor'],
    online: true,
  },
  {
    id: '4',
    name: 'David Wilson',
    role: 'Student',
    slug: '@davidw',
    bio: 'Learning web development and UX design',
    initials: 'DW',
    level: 4,
    score: 450,
    location: 'Sydney, Australia',
    joinDate: 'Nov 2022',
    badges: ['Rising Star'],
    online: false,
    lastOnline: '1 hour ago'
  },
  {
    id: '5',
    name: 'Emily Rodriguez',
    role: 'Frontend Developer',
    slug: '@emilyrod',
    bio: 'Specializing in React and CSS animations',
    avatar: '/placeholder.svg',
    initials: 'ER',
    level: 5,
    score: 680,
    location: 'San Francisco, USA',
    joinDate: 'Apr 2023',
    badges: ['Helper'],
    online: true,
  },
  {
    id: '6',
    name: 'James Chen',
    role: 'Product Manager',
    slug: '@jameschen',
    bio: 'Building products that solve real problems',
    initials: 'JC',
    level: 6,
    score: 820,
    location: 'Berlin, Germany',
    joinDate: 'Feb 2023',
    badges: ['Contributor'],
    online: false,
    lastOnline: '5 hours ago'
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content (Left Column) - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
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
            
            {/* Member List */}
            <div className="space-y-4">
              {members.map((member) => (
                <Card key={member.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="relative">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          {member.online && (
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="mt-2 text-center">
                          <Badge variant="outline" className="border-amber-300 text-amber-700 flex items-center justify-center gap-1">
                            <Trophy size={12} />
                            <span>{member.score}</span>
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg flex items-center gap-2">
                              {member.name}
                              {member.level >= 7 && (
                                <Crown size={16} className="text-amber-500" />
                              )}
                            </h3>
                            <p className="text-sm text-gray-500">{member.slug} · {member.role}</p>
                            <p className="text-sm mt-1">{member.bio}</p>
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
                            {member.online ? (
                              <>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Online now</span>
                              </>
                            ) : (
                              <>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                <span>Last online {member.lastOnline}</span>
                              </>
                            )}
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
                        
                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="gap-1">
                            <MessageCircle size={14} />
                            <span>Message</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Sidebar (Right Column) - 1/3 width */}
          <div className="lg:col-span-1">
            {/* Community Stats */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gray-900">4,576</div>
                    <div className="text-xs text-gray-500">Members</div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gray-900">6</div>
                    <div className="text-xs text-gray-500">Admins</div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">15</div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Top Contributors */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  {members
                    .sort((a, b) => b.score - a.score)
                    .slice(0, 3)
                    .map((member, index) => (
                      <div key={member.id} className="flex items-center gap-3">
                        <div className="font-bold text-gray-400 w-5 text-center">{index + 1}</div>
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.slug}</div>
                        </div>
                        <div className="text-amber-600 font-semibold">{member.score}</div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Newest Members */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Newest Members</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  {members
                    .sort((a, b) => new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime())
                    .slice(0, 3)
                    .map((member) => (
                      <div key={member.id} className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-gray-500">Joined {member.joinDate}</div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <MessageCircle size={14} />
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Members;
