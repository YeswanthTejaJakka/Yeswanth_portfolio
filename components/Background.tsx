import React from 'react';
import LiquidEther from './LiquidEther';
import { useTheme } from '../ThemeContext';

const darkColors = ['#A855F7', '#00F5FF', '#F472B6'];
const lightColors = ['#3B82F6', '#10B981', '#F59E0B'];

const Background: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gray-50 dark:bg-primary">
      <LiquidEther
        colors={theme === 'dark' ? darkColors : lightColors}
        mouseForce={20}
        cursorSize={100}
        resolution={0.5}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        autoResumeDelay={3000}
      />
    </div>
  );
};

export default Background;
