
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CreatePostCard from '@/components/CreatePostCard';
import PostCard from '@/components/PostCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, Trophy, UserCircle2, Filter, Bookmark, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data
const posts = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      avatar: '/placeholder.svg',
      initials: 'SJ',
    },
    category: 'Discussion',
    time: '2 hours ago',
    content: 'Just completed the latest module in the Advanced React course. The hooks section was particularly enlightening! Has anyone started the final project yet?',
    likes: 24,
    comments: 8,
    liked: true,
  },
  {
    id: '2',
    author: {
      name: 'Michael Brown',
      initials: 'MB',
    },
    category: 'Question',
    time: '5 hours ago',
    content: "I'm having trouble understanding the concept of closures in JavaScript. Can someone explain it in simple terms or recommend a good resource?",
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    likes: 18,
    comments: 12,
    liked: false,
  },
  {
    id: '3',
    author: {
      name: 'Jessica Lee',
      avatar: '/placeholder.svg',
      initials: 'JL',
    },
    category: 'Announcement',
    time: '1 day ago',
    content: "Excited to announce our next live coding session this Friday at 3 PM EST! We'll be building a real-time chat application with React and Firebase. Don't miss it!",
    likes: 42,
    comments: 15,
    liked: true,
  },
];

const trendingTopics = [
  'React Hooks', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Frontend Development'
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Live Coding: Building a Chat App',
    date: 'Friday, 3PM EST',
  },
  {
    id: '2',
    title: 'Q&A Session: Career in Web Dev',
    date: 'Monday, 5PM EST',
  },
];

const topContributors = [
  {
    id: '1',
    name: 'Sarah J.',
    avatar: '/placeholder.svg',
    initials: 'SJ',
    level: 5,
    points: 1250,
  },
  {
    id: '2',
    name: 'Michael B.',
    initials: 'MB',
    level: 4,
    points: 980,
  },
  {
    id: '3',
    name: 'Jessica L.',
    avatar: '/placeholder.svg',
    initials: 'JL',
    level: 4,
    points: 920,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Space for header */}
      <div className="h-16"></div>
      
      <Navigation />
      
      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content Area - Posts */}
          <div className="lg:col-span-8">
            <Tabs defaultValue="all" className="mb-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="all">All Posts</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                </TabsList>
                
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter size={16} />
                  <span>Filter</span>
                </Button>
              </div>
              
              <TabsContent value="all" className="mt-4">
                <CreatePostCard />
                
                {posts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </TabsContent>
              
              <TabsContent value="popular">
                <p className="text-center py-10 text-gray-500">Popular posts will appear here</p>
              </TabsContent>
              
              <TabsContent value="unanswered">
                <p className="text-center py-10 text-gray-500">Unanswered posts will appear here</p>
              </TabsContent>
              
              <TabsContent value="saved">
                <p className="text-center py-10 text-gray-500">Your saved posts will appear here</p>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    placeholder="Search in community..." 
                    className="pl-9"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Trending Topics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap size={16} className="text-yellow-500" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <Badge key={index} variant="secondary" className="font-normal">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Upcoming Events */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar size={16} className="text-brand-purple" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <li key={event.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-gray-500">{event.date}</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-7 text-xs">
                        RSVP
                      </Button>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="w-full mt-3 text-brand-purple">
                  View all events
                </Button>
              </CardContent>
            </Card>
            
            {/* Top Contributors */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy size={16} className="text-amber-500" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="space-y-3">
                  {topContributors.map((user) => (
                    <li key={user.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{user.name}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Badge variant="outline" className="text-xs mr-1 px-1 border-amber-300 text-amber-700">
                              Lvl {user.level}
                            </Badge>
                            <span>{user.points} pts</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="w-full mt-3 text-brand-purple">
                  View leaderboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
