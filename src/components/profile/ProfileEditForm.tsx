
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";

const ProfileEditForm = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    bio: "Product designer and developer. Passionate about creating meaningful experiences through design and code.",
    location: "San Francisco, CA",
    website: "https://johndoe.design",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", profileData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Profile Picture</h2>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-white shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button 
              size="icon" 
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
              type="button"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Upload a new profile picture (JPG, PNG, GIF)
            </p>
            <div className="flex gap-2">
              <Button type="button" variant="outline" size="sm">
                Upload New Image
              </Button>
              <Button type="button" variant="outline" size="sm" className="text-destructive">
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input 
            id="firstName" 
            name="firstName" 
            value={profileData.firstName} 
            onChange={handleChange} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input 
            id="lastName" 
            name="lastName" 
            value={profileData.lastName} 
            onChange={handleChange} 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <div className="flex">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
            @
          </span>
          <Input 
            id="username" 
            name="username" 
            value={profileData.username} 
            onChange={handleChange} 
            className="rounded-l-none"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          This will be your public profile URL: example.com/@{profileData.username}
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          value={profileData.email} 
          onChange={handleChange} 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea 
          id="bio" 
          name="bio" 
          value={profileData.bio} 
          onChange={handleChange} 
          rows={4} 
        />
        <p className="text-xs text-muted-foreground">
          Brief description about yourself. Markdown is supported.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input 
            id="location" 
            name="location" 
            value={profileData.location} 
            onChange={handleChange} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input 
            id="website" 
            name="website" 
            value={profileData.website} 
            onChange={handleChange} 
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline">Cancel</Button>
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
};

export default ProfileEditForm;
