
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { 
  Heart, MessageCircle, Share2, MoreHorizontal,
  Image as ImageIcon, Smile, PlusCircle 
} from 'lucide-react';

type PostProps = {
  id: string;
  author: {
    name: string;
    avatar?: string;
    initials: string;
  };
  category: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  liked: boolean;
};

const PostCard: React.FC<PostProps> = ({
  author,
  category,
  time,
  content,
  image,
  likes,
  comments,
  liked
}) => {
  return (
    <Card className="post-card mb-4">
      <CardHeader className="px-4 py-3 flex flex-row items-start space-y-0 gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.initials}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{author.name}</p>
              <div className="flex items-center text-xs text-gray-500 mt-0.5">
                <Badge variant="secondary" className="mr-2 text-xs font-normal">
                  {category}
                </Badge>
                <span>{time}</span>
              </div>
            </div>
            
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 py-2">
        <p className="text-sm">{content}</p>
        
        {image && (
          <div className="mt-3 rounded-md overflow-hidden">
            <img src={image} alt="Post content" className="w-full h-auto" />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-4 py-2 border-t flex justify-between">
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 text-xs gap-1 ${liked ? 'text-red-500' : ''}`}
          >
            <Heart size={16} fill={liked ? "currentColor" : "none"} />
            <span>{likes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 text-xs gap-1">
            <MessageCircle size={16} />
            <span>{comments}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 text-xs">
            <Share2 size={16} />
          </Button>
        </div>
        
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Smile size={16} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ImageIcon size={16} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
