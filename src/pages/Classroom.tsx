
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Video, FileText, Clock, Users, PlayCircle } from 'lucide-react';

const courses = [
  {
    id: '1',
    title: 'React for Beginners',
    description: 'Learn the fundamentals of React including components, state, props, and hooks.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    progress: 75,
    modules: 8,
    duration: '6 hours',
    students: 452,
  },
  {
    id: '2',
    title: 'Advanced JavaScript Techniques',
    description: 'Master advanced JavaScript concepts including closures, promises, and async/await.',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    progress: 30,
    modules: 10,
    duration: '8 hours',
    students: 328,
  },
  {
    id: '3',
    title: 'UX/UI Design Principles',
    description: 'Learn the core principles of user experience and interface design.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    progress: 0,
    modules: 6,
    duration: '5 hours',
    students: 215,
  },
];

const Classroom = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Space for header */}
      <div className="h-16"></div>
      
      <Navigation />
      
      <main className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Courses</h1>
          <Button className="bg-brand-purple hover:bg-brand-dark">
            Browse All Courses
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button className="gap-2 bg-white text-brand-purple hover:bg-gray-100">
                    <PlayCircle size={16} />
                    <span>Continue Learning</span>
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  {course.progress > 0 && (
                    <Badge variant="outline" className="ml-2">
                      In Progress
                    </Badge>
                  )}
                </div>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <BookOpen size={14} />
                    <span>{course.modules} modules</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users size={14} />
                    <span>{course.students} students</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  {course.progress > 0 ? 'Continue Course' : 'Start Course'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Classroom;
