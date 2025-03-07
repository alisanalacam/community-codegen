
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Video, Clock, Users, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

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
    isMainCourse: true,
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
    isMainCourse: false,
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
    isMainCourse: false,
  },
  {
    id: '4',
    title: 'Welcome Course',
    description: 'Introduction to our platform and community features.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    progress: 100,
    modules: 3,
    duration: '1 hour',
    students: 1352,
    isMainCourse: false,
  },
  {
    id: '5',
    title: 'CSS Grid & Flexbox Masterclass',
    description: 'Become proficient in modern CSS layout techniques.',
    image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    progress: 45,
    modules: 7,
    duration: '4 hours',
    students: 198,
    isMainCourse: false,
  },
  {
    id: '6',
    title: 'TypeScript Deep Dive',
    description: 'Learn advanced TypeScript concepts for better application development.',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    progress: 10,
    modules: 9,
    duration: '7 hours',
    students: 173,
    isMainCourse: false,
  },
];

const Classroom = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  
  // Get current courses
  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Determine if Welcome course exists and collect sub-courses
  const welcomeCourse = courses.find(course => course.title === 'Welcome Course');
  const mainCourse = courses.find(course => course.isMainCourse);
  const subCourses = courses.filter(course => !course.isMainCourse && course.title !== 'Welcome Course');
  
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
        
        {/* Course Progress Summary */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            {welcomeCourse && (
              <div className="flex-1">
                <h3 className="font-medium mb-2">Welcome Course</h3>
                <Progress value={welcomeCourse.progress} className="h-2 mb-1" />
                <p className="text-xs text-gray-500">{welcomeCourse.progress}% completed</p>
              </div>
            )}
            
            {mainCourse && (
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{mainCourse.title}</h3>
                  <Badge variant="outline" className="text-xs">Main Course</Badge>
                </div>
                <Progress value={mainCourse.progress} className="h-2 mb-1" />
                <p className="text-xs text-gray-500">{mainCourse.progress}% completed</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map((course) => (
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
                <CardTitle className="text-lg">{course.title}</CardTitle>
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
        
        {/* Pagination */}
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))} 
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
};

export default Classroom;
