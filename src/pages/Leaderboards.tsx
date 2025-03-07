
import React from "react";
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ChevronUp, Trophy, Award, Star, Info, Calendar, Filter, Users } from 'lucide-react';

const Leaderboards = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Leaderboards</h1>
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                </div>

                {/* Member Levels Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Member Levels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center"><Trophy className="mr-2 h-5 w-5 text-yellow-500" /> Beginner Level</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">42%</div>
                                <div className="text-sm text-gray-500">Of members</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center"><Award className="mr-2 h-5 w-5 text-blue-500" /> Intermediate Level</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">28%</div>
                                <div className="text-sm text-gray-500">Of members</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center"><Star className="mr-2 h-5 w-5 text-purple-500" /> Advanced Level</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">18%</div>
                                <div className="text-sm text-gray-500">Of members</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center"><Info className="mr-2 h-5 w-5 text-green-500" /> Expert Level</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">12%</div>
                                <div className="text-sm text-gray-500">Of members</div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Profile Section */}
                <section className="mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="mb-4 md:mb-0 md:mr-6 text-center">
                                    <Avatar className="h-24 w-24 mb-2">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="Current User" />
                                        <AvatarFallback>CU</AvatarFallback>
                                    </Avatar>
                                    <div className="text-lg font-semibold">Level 12</div>
                                    <div className="text-sm text-gray-500">5 points to level up</div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1">John Doe</h3>
                                    <p className="text-gray-500 mb-2">@johndoe</p>
                                    <div className="mb-2">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Level Progress</span>
                                            <span>75%</span>
                                        </div>
                                        <Progress value={75} className="h-2" />
                                    </div>
                                    <p className="text-sm text-gray-600">Ranked #3 this month with 4,850 points</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Time Period Leaderboards */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Leaderboards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 7 Days Leaderboard */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Trophy className="mr-2 h-5 w-5 text-yellow-500" /> 
                                    Last 7 Days
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[...Array(5)].map((_, i) => (
                                        <li key={`week-${i}`} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-3">{i+1}.</span>
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage src={`https://avatars.githubusercontent.com/u/${10000000 + i}?v=4`} />
                                                    <AvatarFallback>{`U${i}`}</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">User {i+1}</span>
                                            </div>
                                            <Badge variant="outline" className="ml-2">{950 - i*50} pts</Badge>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* 30 Days Leaderboard */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Trophy className="mr-2 h-5 w-5 text-blue-500" /> 
                                    Last 30 Days
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[...Array(5)].map((_, i) => (
                                        <li key={`month-${i}`} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-3">{i+1}.</span>
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage src={`https://avatars.githubusercontent.com/u/${20000000 + i}?v=4`} />
                                                    <AvatarFallback>{`U${i}`}</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">User {i+1}</span>
                                            </div>
                                            <Badge variant="outline" className="ml-2">{2500 - i*150} pts</Badge>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* All Time Leaderboard */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Trophy className="mr-2 h-5 w-5 text-purple-500" /> 
                                    All Time
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[...Array(5)].map((_, i) => (
                                        <li key={`alltime-${i}`} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-3">{i+1}.</span>
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage src={`https://avatars.githubusercontent.com/u/${30000000 + i}?v=4`} />
                                                    <AvatarFallback>{`U${i}`}</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">User {i+1}</span>
                                            </div>
                                            <Badge variant="outline" className="ml-2">{12000 - i*750} pts</Badge>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Last 10 Members */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Last 10 Members</h2>
                    <Card>
                        <CardContent className="p-6">
                            <ul className="divide-y divide-gray-200">
                                {[...Array(10)].map((_, i) => (
                                    <li key={`last-${i}`} className="py-3 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Avatar className="h-10 w-10 mr-3">
                                                <AvatarImage src={`https://avatars.githubusercontent.com/u/${40000000 + i}?v=4`} />
                                                <AvatarFallback>{`U${i}`}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">New Member {i+1}</p>
                                                <p className="text-sm text-gray-500">Joined {i+1} day{i !== 0 ? 's' : ''} ago</p>
                                            </div>
                                        </div>
                                        <Badge variant="outline">{150 - i*10} pts</Badge>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    );
};

export default Leaderboards;
