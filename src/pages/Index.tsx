
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CreatePostCard from '@/components/CreatePostCard';
import PostCard from '@/components/PostCard';
import GroupWidget from '@/components/widgets/GroupWidget';
import LeaderboardWidget from '@/components/widgets/LeaderboardWidget';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, Filter, Bookmark, 
  Flame, MessageCircle
} from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Sample data for group
const groupData = {
  name: "Prompt Monkey",
  slug: "promptmonkey",
  description: "A community of AI prompt engineers sharing tips, tricks, and best practices.",
  image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  members: 4576,
  online: 15,
  admins: 6
};

// Sample data for leaderboard
const leaderboardUsers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '/placeholder.svg',
    initials: 'SJ',
    score: 135,
    badge: "Top Contributor"
  },
  {
    id: '2',
    name: 'Michael Brown',
    initials: 'MB',
    score: 108
  },
  {
    id: '3',
    name: 'Jessica Lee',
    avatar: '/placeholder.svg',
    initials: 'JL',
    score: 97
  },
  {
    id: '4',
    name: 'David Wilson',
    initials: 'DW',
    score: 82
  },
  {
    id: '5',
    name: 'Emily Parker',
    avatar: '/placeholder.svg',
    initials: 'EP',
    score: 76
  }
];

// Sample posts data with comments
const posts = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      avatar: '/placeholder.svg',
      initials: 'SJ',
    },
    category: 'Discussion',
    time: '21h ago',
    title: 'Advanced Prompt Engineering Techniques',
    content: 'Just completed the latest module in the Advanced React course. The hooks section was particularly enlightening! Has anyone started the final project yet?',
    likes: 24,
    comments: 8,
    liked: true,
    unread: true,
    commentsData: [
      {
        id: 'c1',
        author: {
          name: 'Michael Brown',
          initials: 'MB',
        },
        content: 'Great insights! I've been experimenting with a similar approach but hadn't considered the context length implications.',
        time: '19h ago'
      },
      {
        id: 'c2',
        author: {
          name: 'Jessica Lee',
          avatar: '/placeholder.svg',
          initials: 'JL',
        },
        content: 'Have you tried using chain-of-thought prompting with this method? I'd be curious to see how that affects the results.',
        time: '32m ago'
      }
    ]
  },
  {
    id: '2',
    author: {
      name: 'Michael Brown',
      initials: 'MB',
    },
    category: 'Question',
    time: '5h ago',
    title: 'Understanding Closures in JavaScript',
    content: "I'm having trouble understanding the concept of closures in JavaScript. Can someone explain it in simple terms or recommend a good resource?",
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    likes: 18,
    comments: 12,
    liked: false,
    commentsData: [
      {
        id: 'c3',
        author: {
          name: 'Sarah Johnson',
          avatar: '/placeholder.svg',
          initials: 'SJ',
        },
        content: 'A closure is a function that has access to its outer function's variables even after the outer function has returned. It's like a backpack of variables that a function carries around with it.',
        time: '4h ago'
      }
    ]
  },
  {
    id: '3',
    author: {
      name: 'Jessica Lee',
      avatar: '/placeholder.svg',
      initials: 'JL',
    },
    category: 'Announcement',
    time: '1d ago',
    title: 'Live Coding Session This Friday',
    content: "Excited to announce our next live coding session this Friday at 3 PM EST! We'll be building a real-time chat application with React and Firebase. Don't miss it!",
    likes: 42,
    comments: 15,
    liked: true,
    commentsData: []
  },
  {
    id: '4',
    author: {
      name: 'David Wilson',
      initials: 'DW',
    },
    category: 'Resource',
    time: '2d ago',
    title: 'Curated List of AI Tools for Developers',
    content: "I've compiled a list of AI tools that have significantly improved my workflow as a developer. From code completion to debugging assistance, these tools have saved me countless hours.",
    likes: 31,
    comments: 7,
    liked: false,
    unread: true,
    commentsData: []
  },
];

// Categories for filtering
const categories = ['Discussion', 'Question', 'Announcement', 'Resource', 'Tutorial'];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter posts by category if one is selected
  const filteredPosts = activeCategory 
    ? posts.filter(post => post.category === activeCategory)
    : posts;
  
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
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Community Feed</h1>
                
                <div className="relative w-64">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    placeholder="Search posts..." 
                    className="pl-9"
                  />
                </div>
              </div>
              
              <CreatePostCard />
            </div>
            
            <Tabs defaultValue="all" className="mb-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="all">All Posts</TabsTrigger>
                  <TabsTrigger value="popular">
                    <Flame size={16} className="mr-1" />
                    Popular
                  </TabsTrigger>
                  <TabsTrigger value="unanswered">
                    <MessageCircle size={16} className="mr-1" />
                    Unanswered
                  </TabsTrigger>
                  <TabsTrigger value="saved">
                    <Bookmark size={16} className="mr-1" />
                    Saved
                  </TabsTrigger>
                </TabsList>
                
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter size={16} />
                  <span>Filter</span>
                </Button>
              </div>
              
              <div className="mt-4 mb-6 flex flex-wrap gap-2">
                <Button 
                  variant={activeCategory === null ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setActiveCategory(null)}
                >
                  All Categories
                </Button>
                
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <TabsContent value="all" className="mt-0">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
                
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
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
            {/* Group Widget */}
            <GroupWidget group={groupData} />
            
            {/* Leaderboard Widget */}
            <LeaderboardWidget 
              title="Leaderboard" 
              period="30 days" 
              users={leaderboardUsers} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
