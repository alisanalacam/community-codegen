
import React from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Our Community</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We aim to create a vibrant community where members can learn, connect, and grow together. 
                Our platform combines the best aspects of community building, learning management, and engagement tools.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Founded in 2023, our community has grown from a small group of enthusiasts to a 
                thriving ecosystem of learners and creators. We're constantly evolving to meet the 
                needs of our members.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-8">
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
              <li>Follow all platform rules and terms of service</li>
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
      </main>
    </div>
  );
};

export default About;
