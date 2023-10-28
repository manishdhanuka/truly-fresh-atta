"use client";

import { useState, useEffect } from "react";

const AnnouncementBar = ({ announcements }) => {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  // Function to cycle through announcements
  const cycleAnnouncements = () => {
    setCurrentAnnouncementIndex(
      (prevIndex) => (prevIndex + 1) % announcements.length
    );
  };

  // Set up a timer to cycle through announcements at a certain interval
  useEffect(() => {
    const interval = setInterval(cycleAnnouncements, 5000); // Change the duration as needed
    return () => clearInterval(interval);
  }, [announcements]);

  return (
    <div className="bg-[#2e7d32] text-sm text-center text-white font-medium p-3 top-0 w-full">
      {announcements.length > 0 && (
        <div className="announcement">
          {announcements[currentAnnouncementIndex].map((announcement) => (
            <span key={announcement}>{announcement}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementBar;
