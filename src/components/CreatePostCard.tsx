
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { 
  Image as ImageIcon, Smile, PlusCircle, FileText, 
  Calendar, BarChart, Video
} from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const CreatePostCard = () => {
  const [postContent, setPostContent] = useState('');
  
  return (
    <Card className="post-card mb-6">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="Your avatar" />
            <AvatarFallback>YOU</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <Textarea
              placeholder="Share something with the community..."
              className="min-h-20 border-none shadow-none focus-visible:ring-0 p-0 text-sm"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      
      <Separator />
      
      <CardFooter className="px-4 py-3 flex justify-between">
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <ImageIcon size={16} className="text-blue-500" />
            <span>Photo</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <Video size={16} className="text-green-500" />
            <span>Video</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <FileText size={16} className="text-orange-500" />
            <span>Doc</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <Calendar size={16} className="text-purple-500" />
            <span>Event</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <BarChart size={16} className="text-red-500" />
            <span>Poll</span>
          </Button>
        </div>
        
        <Button 
          size="sm" 
          className="bg-brand-purple hover:bg-brand-dark text-white"
          disabled={postContent.trim() === ''}
        >
          Post
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreatePostCard;
