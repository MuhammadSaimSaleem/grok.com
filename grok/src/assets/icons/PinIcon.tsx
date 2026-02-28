import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const PinIcon = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 20L8.5 15.5M14 20L4 10L5 9L9.06551 8.32242C10.2858 8.11904 11.3433 7.36248 11.9298 6.27324L13.2256 3.86676C13.8608 2.68717 15.4534 2.45342 16.4007 3.40075L20.5993 7.59926C21.5466 8.54658 21.3128 10.1392 20.1332 10.7744L17.7268 12.0702C16.6375 12.6567 15.881 13.7142 15.6776 14.9345L15 19L14 20Z" stroke="currentColor" stroke-linecap="square"></path></svg>

);