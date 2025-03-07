
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Image as ImageIcon, Smile, Link2, FileText, 
  Calendar, BarChart, Video, Youtube, PlusCircle
} from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const CreatePostCard = () => {
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [category, setCategory] = useState('');
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [link, setLink] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const { toast } = useToast();

  const handleExpandClick = () => {
    setIsExpanded(true);
  };

  const handleCancel = () => {
    setIsExpanded(false);
    setPostContent('');
    setPostTitle('');
    setCategory('');
  };

  const handlePost = () => {
    if (!postContent.trim()) {
      toast({
        title: "Cannot post",
        description: "Please write something before posting",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Post created!",
      description: "Your post has been published successfully"
    });

    // Reset form
    setIsExpanded(false);
    setPostContent('');
    setPostTitle('');
    setCategory('');
    setAttachment(null);
    setLink('');
    setYoutubeUrl('');
  };

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
      toast({
        title: "File attached",
        description: `${e.target.files[0].name} has been attached to your post`
      });
      setActiveDialog(null);
    }
  };

  const handleLinkSubmit = () => {
    if (link.trim() !== '') {
      toast({
        title: "Link added",
        description: "Your link has been added to the post"
      });
      setActiveDialog(null);
    }
  };

  const handleYoutubeSubmit = () => {
    if (youtubeUrl.trim() !== '') {
      toast({
        title: "YouTube video added",
        description: "YouTube video has been added to your post"
      });
      setActiveDialog(null);
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setPostContent(prev => prev + emoji);
    setActiveDialog(null);
  };

  const renderAttachmentDialog = () => (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Attach a file</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="file" className="text-right">
            File
          </Label>
          <Input id="file" type="file" onChange={handleAttachmentChange} />
        </div>
      </div>
    </DialogContent>
  );

  const renderLinkDialog = () => (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Add a link</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="url" className="text-right">
            URL
          </Label>
          <Input 
            id="url" 
            placeholder="https://example.com" 
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={handleLinkSubmit}>Add Link</Button>
        </div>
      </div>
    </DialogContent>
  );

  const renderYoutubeDialog = () => (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Add YouTube Video</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="youtube" className="text-right">
            YouTube URL
          </Label>
          <Input 
            id="youtube" 
            placeholder="https://youtube.com/watch?v=..." 
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={handleYoutubeSubmit}>Add Video</Button>
        </div>
      </div>
    </DialogContent>
  );

  const renderEmojiDialog = () => {
    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘'];
    
    return (
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add an emoji</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-7 gap-2 py-4">
          {emojis.map((emoji, index) => (
            <Button 
              key={index} 
              variant="ghost" 
              className="text-2xl h-10 w-10"
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </Button>
          ))}
        </div>
      </DialogContent>
    );
  };

  const renderGifDialog = () => (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Search for GIFs</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <Input placeholder="Search GIFs..." />
        <div className="grid grid-cols-2 gap-2 h-64 overflow-y-auto">
          {/* Placeholder GIFs - in a real app, these would be fetched from a GIF API */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="bg-gray-200 rounded-md h-24 flex items-center justify-center cursor-pointer hover:bg-gray-300"
              onClick={() => {
                toast({
                  title: "GIF added",
                  description: "Your GIF has been added to the post"
                });
                setActiveDialog(null);
              }}
            >
              GIF {i+1}
            </div>
          ))}
        </div>
      </div>
    </DialogContent>
  );

  const renderPollDialog = () => (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Create a Poll</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="question">Question</Label>
          <Input id="question" placeholder="Ask a question..." />
        </div>
        <div className="space-y-2">
          <Label>Options</Label>
          <Input placeholder="Option 1" className="mb-2" />
          <Input placeholder="Option 2" className="mb-2" />
          <Button variant="outline" size="sm" className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Option
          </Button>
        </div>
        <div className="flex justify-end">
          <Button 
            onClick={() => {
              toast({
                title: "Poll created",
                description: "Your poll has been added to the post"
              });
              setActiveDialog(null);
            }}
          >
            Create Poll
          </Button>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <Card className="post-card mb-6">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="Your avatar" />
            <AvatarFallback>YOU</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            {!isExpanded ? (
              <div 
                className="border rounded-md p-3 text-gray-500 cursor-pointer hover:bg-gray-50"
                onClick={handleExpandClick}
              >
                Write something...
              </div>
            ) : (
              <div className="space-y-3">
                <Input
                  placeholder="Title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="font-semibold"
                />
                <Textarea
                  placeholder="Share something with the community..."
                  className="min-h-20"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                
                {attachment && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                    <FileText size={16} />
                    <span>{attachment.name}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="ml-auto h-6 w-6 p-0" 
                      onClick={() => setAttachment(null)}
                    >
                      &times;
                    </Button>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="discussion">Discussion</SelectItem>
                      <SelectItem value="question">Question</SelectItem>
                      <SelectItem value="announcement">Announcement</SelectItem>
                      <SelectItem value="resource">Resource</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      {isExpanded && (
        <>
          <Separator />
          
          <CardFooter className="px-4 py-3 flex justify-between">
            <div className="flex gap-1 overflow-x-auto">
              <Dialog open={activeDialog === 'attachment'} onOpenChange={(open) => setActiveDialog(open ? 'attachment' : null)}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <FileText size={16} className="text-orange-500" />
                    <span>Attachment</span>
                  </Button>
                </DialogTrigger>
                {renderAttachmentDialog()}
              </Dialog>
              
              <Dialog open={activeDialog === 'link'} onOpenChange={(open) => setActiveDialog(open ? 'link' : null)}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <Link2 size={16} className="text-blue-500" />
                    <span>Link</span>
                  </Button>
                </DialogTrigger>
                {renderLinkDialog()}
              </Dialog>
              
              <Dialog open={activeDialog === 'youtube'} onOpenChange={(open) => setActiveDialog(open ? 'youtube' : null)}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <Youtube size={16} className="text-red-500" />
                    <span>YouTube</span>
                  </Button>
                </DialogTrigger>
                {renderYoutubeDialog()}
              </Dialog>
              
              <Dialog open={activeDialog === 'poll'} onOpenChange={(open) => setActiveDialog(open ? 'poll' : null)}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <BarChart size={16} className="text-purple-500" />
                    <span>Poll</span>
                  </Button>
                </DialogTrigger>
                {renderPollDialog()}
              </Dialog>
              
              <Dialog open={activeDialog === 'emoji'} onOpenChange={(open) => setActiveDialog(open ? 'emoji' : null)}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <Smile size={16} className="text-yellow-500" />
                    <span>Emoji</span>
                  </Button>
                </DialogTrigger>
                {renderEmojiDialog()}
              </Dialog>
              
              <Dialog open={activeDialog === 'gif'} onOpenChange={(open) => setActiveDialog(open ? 'gif' : null)}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <ImageIcon size={16} className="text-green-500" />
                    <span>GIF</span>
                  </Button>
                </DialogTrigger>
                {renderGifDialog()}
              </Dialog>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button 
                size="sm" 
                className="bg-brand-purple hover:bg-brand-dark text-white"
                disabled={postContent.trim() === ''}
                onClick={handlePost}
              >
                Post
              </Button>
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default CreatePostCard;
