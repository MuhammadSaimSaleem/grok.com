 import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ArrowIcon = ({ size = 18, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path d="M6 9L12 15L18 9" strokeWidth={2} stroke="currentColor" stroke-linecap="square"></path></svg>
);