import React from 'react';
import Hyperspeed, { hyperspeedPresets } from './Hyperspeed';
import { useTheme } from '../ThemeContext';

const Background: React.FC = () => {
  const { theme } = useTheme();

  // Custom light preset to look better on a light background
  const lightPreset = {
    ...hyperspeedPresets.five,
    colors: {
      ...hyperspeedPresets.five.colors,
      background: 0xf9fafb, // bg-gray-50
      roadColor: 0xe5e7eb, // gray-200
      islandColor: 0xd1d5db, // gray-300
      shoulderLines: 0x9ca3af, // gray-400
      brokenLines: 0x9ca3af, // gray-400
      sticks: 0x3b82f6, // blue-500
    }
  };

  const effectOptions = theme === 'dark' ? hyperspeedPresets.one : lightPreset;

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gray-50 dark:bg-black">
      <Hyperspeed effectOptions={effectOptions} />
    </div>
  );
};

export default Background;
