import React from "react";
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { ChevronUp, Trophy, Award, Star, Info, Calendar, Filter } from 'lucide-react';

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

                {/* General Stats Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">General Stats</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center"><Trophy className="mr-2 h-5 w-5 text-yellow-500" /> Total Points</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">12,456</div>
                                <div className="text-sm text-gray-500">+3% from last month</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center"><Award className="mr-2 h-5 w-5 text-blue-500" /> Active Members</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">342</div>
                                <div className="text-sm text-gray-500">+8 members this week</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center"><Star className="mr-2 h-5 w-5 text-purple-500" /> Top Contributor</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xl font-semibold">Alex Johnson</div>
                                <div className="text-sm text-gray-500">1,234 points</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center"><Info className="mr-2 h-5 w-5 text-green-500" /> Avg. Points per Member</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">36.4</div>
                                <div className="text-sm text-gray-500">Based on last 30 days</div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Upcoming Events Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center"><Calendar className="mr-2 h-5 w-5" /> Next Community Call</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-semibold">Topic: AI in Education</div>
                            <div className="text-sm text-gray-500">Date: July 15, 2023</div>
                            <div className="text-sm text-gray-500">Time: 2:00 PM EST</div>
                            <Button variant="secondary" className="mt-4">Join Call</Button>
                        </CardContent>
                    </Card>
                </section>

                {/* Top Members Leaderboard Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Top Members</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Rank
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Member
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Points
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Recent Activity
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="Lucian Avram" />
                                                    <AvatarFallback>LA</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    John Doe
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            5,300
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Shared a helpful resource
                                        </p>
                                        <Badge className="bg-green-100 text-green-800 text-xs py-1">+25 points</Badge>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <Button variant="ghost" size="sm">View Profile</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    2
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <Avatar>
                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/10407377?v=4" alt="Lucian Avram" />
                                                    <AvatarFallback>LA</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Jane Smith
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            4,800
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Answered questions in the forum
                                        </p>
                                        <Badge className="bg-green-100 text-green-800 text-xs py-1">+15 points</Badge>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <Button variant="ghost" size="sm">View Profile</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    3
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <Avatar>
                                                    <AvatarImage src="https://images.unsplash.com/photo-1502823403499-6ccfcf4cdca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Lucian Avram" />
                                                    <AvatarFallback>LA</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Alice Brown
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            4,250
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Contributed to a project
                                        </p>
                                        <Badge className="bg-green-100 text-green-800 text-xs py-1">+30 points</Badge>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <Button variant="ghost" size="sm">View Profile</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Leaderboards;
