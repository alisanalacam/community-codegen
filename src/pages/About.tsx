
import React from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, DollarSign } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-6">About Our Community</h1>
            
            {/* Group Header */}
            <Card className="mb-6 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Community" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="flex items-center">
                    <Users className="mr-1 h-3 w-3" /> Private
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <Users className="mr-1 h-3 w-3" /> 4.6k members
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <DollarSign className="mr-1 h-3 w-3" /> Free
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" /> Created by John Doe
                  </Badge>
                </div>
                
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  We aim to create a vibrant community where members can learn, connect, and grow together. 
                  Our platform combines the best aspects of community building, learning management, and engagement tools
                  to provide a unique space for collaboration and personal development.
                </p>
              </CardContent>
            </Card>
            
            {/* Gallery Section */}
            <h2 className="text-2xl font-semibold mb-4">Community Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-video rounded-md overflow-hidden bg-gray-200">
                  <img 
                    src={`https://images.unsplash.com/photo-${1649972904349 + i}-6e44c42644a7`} 
                    alt={`Gallery item ${i+1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Video Section */}
            <h2 className="text-2xl font-semibold mb-4">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="aspect-video rounded-md overflow-hidden bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-500">Video {i+1} Placeholder</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Community Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm text-gray-500">CATEGORY</h3>
                    <p>Learning & Education</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-500">FOUNDED</h3>
                    <p>January 2023</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-500">LOCATION</h3>
                    <p>Global (Online)</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-500">WEBSITE</h3>
                    <p className="text-brand-purple">www.ourcommunity.com</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Community</Button>
              </CardFooter>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Be respectful and kind to other members</li>
                  <li>Share knowledge and help others learn</li>
                  <li>Give credit when using others' content or ideas</li>
                  <li>Keep discussions relevant to the community focus</li>
                  <li>Respect privacy and confidentiality</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Have questions about our community? Reach out to us via:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Email:</strong> support@community.com</p>
                  <p className="text-gray-600"><strong>Support Hours:</strong> Monday-Friday, 9am-5pm EST</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
