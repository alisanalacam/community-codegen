
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { 
  Heart, MessageCircle, Share2, MoreHorizontal,
  Image as ImageIcon, Smile, Circle, Clock
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type PostProps = {
  id: string;
  author: {
    name: string;
    avatar?: string;
    initials: string;
    level?: number;
  };
  category: string;
  time: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  liked: boolean;
  unread?: boolean;
  commentsData?: Array<{
    id: string;
    author: {
      name: string;
      avatar?: string;
      initials: string;
    };
    content: string;
    time: string;
  }>;
};

const PostCard: React.FC<PostProps> = ({
  id,
  author,
  category,
  time,
  title,
  content,
  image,
  likes,
  comments,
  liked,
  unread = false,
  commentsData = []
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);
  const [newComment, setNewComment] = useState('');
  const { toast } = useToast();

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prevLikes => prevLikes - 1);
    } else {
      setLikesCount(prevLikes => prevLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      toast({
        title: "Comment added",
        description: "Your comment has been posted successfully"
      });
      setNewComment('');
    }
  };

  return (
    <>
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
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-base font-semibold">{title}</h3>
            {unread && (
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 h-5 px-1.5">
                <Circle size={8} className="fill-blue-600 mr-1" />
                New
              </Badge>
            )}
          </div>
          
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
              className={`h-8 text-xs gap-1 ${isLiked ? 'text-red-500' : ''}`}
              onClick={handleLike}
            >
              <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
              <span>{likesCount}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 text-xs gap-1"
              onClick={() => setIsDialogOpen(true)}
            >
              <MessageCircle size={16} />
              <span>{comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              <Share2 size={16} />
            </Button>
          </div>
          
          {comments > 0 && (
            <div 
              className="text-xs text-gray-500 flex items-center cursor-pointer hover:text-gray-700"
              onClick={() => setIsDialogOpen(true)}
            >
              <Clock size={12} className="mr-1" />
              New comment 32m ago
            </div>
          )}
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <div className="flex items-start space-x-4 mb-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.initials}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">{author.name}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Badge variant="secondary" className="mr-2 text-xs font-normal">
                        {category}
                      </Badge>
                      <span>{time}</span>
                    </div>
                  </div>
                </div>
                
                <p className="mt-2 text-sm">{content}</p>
                
                {image && (
                  <div className="mt-3 rounded-md overflow-hidden">
                    <img src={image} alt="Post content" className="w-full h-auto" />
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mt-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`text-xs gap-1 ${isLiked ? 'text-red-500' : ''}`}
                    onClick={handleLike}
                  >
                    <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
                    <span>{likesCount} Likes</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <MessageCircle size={16} />
                    <span>{comments} Comments</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Comments ({comments})</h4>
              
              {commentsData.map((comment) => (
                <div key={comment.id} className="flex items-start space-x-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.avatar} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.initials}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">{comment.author.name}</p>
                        <span className="text-xs text-gray-500">{comment.time}</span>
                      </div>
                      <p className="text-sm mt-1">{comment.content}</p>
                    </div>
                    
                    <div className="flex items-center mt-1 space-x-2 text-xs text-gray-500">
                      <button className="hover:text-gray-700">Like</button>
                      <button className="hover:text-gray-700">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex items-start space-x-4 mt-6">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Your avatar" />
                  <AvatarFallback>YOU</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <Textarea 
                    placeholder="Write a comment..." 
                    className="min-h-20"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Smile size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ImageIcon size={16} />
                      </Button>
                    </div>
                    
                    <Button 
                      size="sm" 
                      disabled={!newComment.trim()} 
                      onClick={handleCommentSubmit}
                    >
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostCard;
