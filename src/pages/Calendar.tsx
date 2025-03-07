
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  
  const upcomingEvents = [
    {
      id: '1',
      title: 'Live Coding Session: React Hooks',
      date: 'Thu, Jun 22',
      time: '3:00 PM - 4:30 PM EST',
      type: 'Workshop',
      location: 'Zoom',
      attendees: 58,
    },
    {
      id: '2',
      title: 'Q&A with Industry Experts',
      date: 'Mon, Jun 26',
      time: '5:00 PM - 6:00 PM EST',
      type: 'Meetup',
      location: 'Discord',
      attendees: 102,
    },
    {
      id: '3',
      title: 'Frontend Development Best Practices',
      date: 'Wed, Jun 28',
      time: '2:00 PM - 3:30 PM EST',
      type: 'Webinar',
      location: 'YouTube Live',
      attendees: 145,
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Space for header */}
      <div className="h-16"></div>
      
      <Navigation />
      
      <main className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Community Calendar</h1>
          <Button className="bg-brand-purple hover:bg-brand-dark gap-2">
            <Plus size={16} />
            <span>Add Event</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-8">
            <Card>
              <CardHeader className="pb-0">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">
                    {currentMonth} {currentYear}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <ChevronLeft size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8">
                      Today
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-7 text-center mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center">
                  {/* Calendar days would be generated dynamically */}
                  {Array.from({ length: 35 }).map((_, index) => {
                    const day = index - 2; // Adjust for month starting position
                    const isCurrentMonth = day > 0 && day <= 30;
                    const isToday = day === today.getDate() && isCurrentMonth;
                    const hasEvent = [10, 15, 22, 26, 28].includes(day);
                    
                    return (
                      <div 
                        key={index}
                        className={`aspect-square p-1 text-sm rounded-md flex flex-col items-center justify-center relative ${
                          isCurrentMonth 
                            ? isToday 
                              ? 'bg-brand-purple text-white' 
                              : 'hover:bg-gray-100 cursor-pointer'
                            : 'text-gray-300'
                        }`}
                      >
                        {isCurrentMonth ? day : day <= 0 ? 31 + day : day - 30}
                        {hasEvent && isCurrentMonth && !isToday && (
                          <div className="absolute bottom-1 w-1 h-1 rounded-full bg-brand-purple"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Upcoming Events */}
          <div className="lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CalendarIcon size={16} className="text-brand-purple" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border rounded-md p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge 
                          variant="outline" 
                          className={`
                            ${event.type === 'Workshop' ? 'border-blue-300 text-blue-700' : ''}
                            ${event.type === 'Meetup' ? 'border-green-300 text-green-700' : ''}
                            ${event.type === 'Webinar' ? 'border-purple-300 text-purple-700' : ''}
                          `}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      
                      <div className="mt-2 space-y-1 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <CalendarIcon size={14} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-3"
                      >
                        RSVP
                      </Button>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="w-full mt-4 text-brand-purple">
                  View all events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calendar;
