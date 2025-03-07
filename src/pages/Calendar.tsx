
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Calendar utilities
  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  
  // Events data
  const events = [
    {
      id: '1',
      title: 'Live Coding Session: React Hooks',
      date: new Date(year, month, 22),
      time: '3:00 PM - 4:30 PM EST',
      type: 'Workshop',
      location: 'Zoom',
      attendees: 58,
    },
    {
      id: '2',
      title: 'Q&A with Industry Experts',
      date: new Date(year, month, 26),
      time: '5:00 PM - 6:00 PM EST',
      type: 'Meetup',
      location: 'Discord',
      attendees: 102,
    },
    {
      id: '3',
      title: 'Frontend Development Best Practices',
      date: new Date(year, month, 28),
      time: '2:00 PM - 3:30 PM EST',
      type: 'Webinar',
      location: 'YouTube Live',
      attendees: 145,
    },
    {
      id: '4',
      title: 'Community Town Hall',
      date: new Date(year, month, 15),
      time: '1:00 PM - 2:00 PM EST',
      type: 'Meeting',
      location: 'Discord',
      attendees: 87,
    },
    {
      id: '5',
      title: 'New Member Orientation',
      date: new Date(year, month, 10),
      time: '4:00 PM - 5:00 PM EST',
      type: 'Meetup',
      location: 'Zoom',
      attendees: 32,
    },
  ];
  
  // Navigate to previous or next month
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };
  
  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Get day of week for first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  // Create calendar grid
  const createCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const grid = [];
    
    // Previous month days (if needed)
    const prevMonthDays = firstDayOfMonth;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
    
    for (let i = 0; i < prevMonthDays; i++) {
      grid.push({
        day: daysInPrevMonth - prevMonthDays + i + 1,
        isCurrentMonth: false,
        isToday: false,
        events: []
      });
    }
    
    // Current month days
    const today = new Date();
    const isCurrentMonthAndYear = today.getMonth() === month && today.getFullYear() === year;
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = isCurrentMonthAndYear && today.getDate() === day;
      
      // Find events for this day
      const dayEvents = events.filter(event => 
        event.date.getDate() === day && 
        event.date.getMonth() === month && 
        event.date.getFullYear() === year
      );
      
      grid.push({
        day,
        isCurrentMonth: true,
        isToday,
        events: dayEvents
      });
    }
    
    // Next month days (to fill remaining cells in a 6-row grid)
    const remainingCells = 42 - grid.length; // 6 rows x 7 columns = 42 cells
    
    for (let day = 1; day <= remainingCells; day++) {
      grid.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        events: []
      });
    }
    
    return grid;
  };
  
  const calendarGrid = createCalendarGrid();
  
  // Get upcoming events (sorted by date)
  const upcomingEvents = [...events]
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime());
  
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
                    {monthName} {year}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => navigateMonth('prev')}>
                      <ChevronLeft size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setCurrentMonth(new Date())}
                    >
                      Today
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => navigateMonth('next')}>
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
                  {calendarGrid.map((day, index) => {
                    const hasEvents = day.events.length > 0;
                    
                    return (
                      <div 
                        key={index}
                        className={`p-1 h-24 border rounded-md flex flex-col ${
                          day.isCurrentMonth 
                            ? day.isToday 
                              ? 'bg-brand-purple bg-opacity-10 border-brand-purple' 
                              : 'hover:bg-gray-100 cursor-pointer'
                            : 'text-gray-300 bg-gray-50'
                        }`}
                      >
                        <div className={`text-right p-1 ${
                          day.isToday ? 'bg-brand-purple text-white rounded-full w-6 h-6 flex items-center justify-center ml-auto' : ''
                        }`}>
                          {day.day}
                        </div>
                        
                        {hasEvents && (
                          <div className="flex-grow flex flex-col gap-1 p-1 overflow-hidden">
                            {day.events.slice(0, 2).map((event, idx) => (
                              <div 
                                key={idx}
                                className={`text-left text-xs p-1 rounded truncate ${
                                  event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                                  event.type === 'Webinar' ? 'bg-purple-100 text-purple-800' :
                                  event.type === 'Meetup' ? 'bg-green-100 text-green-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {event.title}
                              </div>
                            ))}
                            {day.events.length > 2 && (
                              <div className="text-xs text-gray-500 text-left px-1">
                                +{day.events.length - 2} more
                              </div>
                            )}
                          </div>
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
                  {upcomingEvents.slice(0, 5).map((event) => (
                    <div key={event.id} className="border rounded-md p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge 
                          variant="outline" 
                          className={`
                            ${event.type === 'Workshop' ? 'border-blue-300 text-blue-700' : ''}
                            ${event.type === 'Meetup' ? 'border-green-300 text-green-700' : ''}
                            ${event.type === 'Webinar' ? 'border-purple-300 text-purple-700' : ''}
                            ${event.type === 'Meeting' ? 'border-orange-300 text-orange-700' : ''}
                          `}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      
                      <div className="mt-2 space-y-1 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <CalendarIcon size={14} />
                          <span>
                            {event.date.toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
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
