
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Users } from "lucide-react";

const ProfileHeader = () => {
  const [openLevelInfo, setOpenLevelInfo] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <Avatar className="w-32 h-32 border-4 border-white shadow-md">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 bg-brand-purple text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shadow">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={() => setOpenLevelInfo(true)} className="w-full h-full rounded-full flex items-center justify-center">
                    Lv1
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>5 points to level up. Click for more info.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        <Dialog open={openLevelInfo} onOpenChange={setOpenLevelInfo}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Level Up Information</DialogTitle>
              <DialogDescription>
                How to level up in the community
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p>You need <strong>5 more points</strong> to reach Level 2</p>
              <h3 className="font-semibold">How to earn points:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Contributing to discussions (+2 points)</li>
                <li>Attending events (+3 points)</li>
                <li>Completing courses (+5 points)</li>
                <li>Helping other members (+3 points)</li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>

        <h2 className="text-xl font-bold mt-4">John Doe</h2>
        <p className="text-gray-500">@johndoe</p>
        
        <div className="w-full mt-4">
          <p className="text-gray-600">
            Product designer and developer. Passionate about creating meaningful experiences through design and code.
          </p>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex items-center gap-1 text-gray-500 text-sm">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span>Online now</span>
      </div>
      
      <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
        <Calendar className="w-4 h-4" />
        <span>Joined January 2023</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4 text-center">
        <div>
          <p className="font-semibold">26</p>
          <p className="text-xs text-gray-500">Contributions</p>
        </div>
        <div>
          <p className="font-semibold">142</p>
          <p className="text-xs text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-semibold">38</p>
          <p className="text-xs text-gray-500">Following</p>
        </div>
      </div>
      
      <Button className="w-full mt-4">Edit Profile</Button>
    </div>
  );
};

export default ProfileHeader;
