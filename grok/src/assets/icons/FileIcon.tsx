import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  stroke?: string;
}

export const FileIcon = ({ size = 18, stroke, ...props }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={stroke} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    {/* Top / Lid Part */}
    <path d="M20.5 12V6.5h-5.5L12 4.5H3.5v7.5" />
    
    {/* Bottom / Tray Part */}
    <path d="M3.5 11h17v2.1c0 2.24-1.12 3.36-1.97 4.21-.75.76-1.87 1.19-4.11 1.19H9.58c-2.24 0-3.36-.43-4.11-1.19-.85-.85-1.97-1.97-1.97-4.21V11z" />
  </svg>
);