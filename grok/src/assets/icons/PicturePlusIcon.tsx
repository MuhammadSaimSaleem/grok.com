import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const PicturePlusIcon = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" {...props}><path d="M12 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V12" stroke="currentColor"></path><path d="M4 15.3333L8 12L16.4706 20" stroke="currentColor"></path><circle cx="14" cy="10" r="1.75" fill="currentColor"></circle><path d="M21.0355 5.49989L18.5 5.49989M18.5 5.49989L15.9645 5.49989M18.5 5.49989L18.5 2.96436M18.5 5.49989L18.5 8.03542" stroke="currentColor" stroke-linecap="square"></path></svg>
);