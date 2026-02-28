import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const AddFileIcon = ({ size = 18, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path d="M11 20H8C5.79086 20 4 18.2091 4 16V10.6569C4 9.59599 4.42143 8.57857 5.17157 7.82843L7.82843 5.17157C8.57857 4.42143 9.59599 4 10.6569 4H16C18.2091 4 20 5.79086 20 8V11" stroke="currentColor" stroke-width="2"></path><path d="M21 18L18 18M18 18L15 18M18 18L18 15M18 18L18 21" stroke-width="2" stroke-linecap="square" stroke="currentColor"></path><path d="M10 4V8C10 9.10457 9.10457 10 8 10H4" stroke-width="2" stroke="currentColor"></path></svg>
);