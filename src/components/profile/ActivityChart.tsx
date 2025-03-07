
import React from "react";

const ActivityChart = () => {
  // Generate a GitHub-like activity chart with random values
  const generateActivityData = () => {
    const weeks = 52;
    const days = 7;
    const data = [];
    
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        // Generate random activity level 0-4
        const level = Math.floor(Math.random() * 5);
        week.push(level);
      }
      data.push(week);
    }
    
    return data;
  };
  
  const activityData = generateActivityData();
  
  // Define color classes for each activity level
  const getColorClass = (level: number) => {
    switch (level) {
      case 0: return "bg-gray-100";
      case 1: return "bg-brand-light";
      case 2: return "bg-brand-lavender/60";
      case 3: return "bg-brand-lavender";
      case 4: return "bg-brand-purple";
      default: return "bg-gray-100";
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Activity Contributions</h2>
      
      <div className="overflow-x-auto">
        <div className="flex gap-1" style={{ minWidth: "900px" }}>
          {activityData.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <div 
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm ${getColorClass(day)}`}
                  title={`${day} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-end gap-2 mt-4">
        <span className="text-xs text-gray-500">Less</span>
        <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
        <div className="w-3 h-3 rounded-sm bg-brand-light"></div>
        <div className="w-3 h-3 rounded-sm bg-brand-lavender/60"></div>
        <div className="w-3 h-3 rounded-sm bg-brand-lavender"></div>
        <div className="w-3 h-3 rounded-sm bg-brand-purple"></div>
        <span className="text-xs text-gray-500">More</span>
      </div>
    </div>
  );
};

export default ActivityChart;
