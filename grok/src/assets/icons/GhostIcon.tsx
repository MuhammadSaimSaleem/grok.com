interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  stroke?: string;
}

export const GhostIcon = ({ size = 18, stroke, ...props }: IconProps) => (
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
    <ellipse cx="10" cy="10.25" rx="1.25" ry="1.75" fill="currentColor"></ellipse><ellipse cx="14" cy="10.25" rx="1.25" ry="1.75" fill="currentColor"></ellipse><path d="M12 4C4 4 8.07627 10.7212 3 13C3 14.6491 4.40343 14.5 4.93 15.77C5.37046 16.8323 4.27588 18.9597 4 20H8L12 21L16 20H20C19.6222 18.7198 18.8092 17.1437 19.075 15.7742C19.3479 14.3681 21 14.742 21 13C15.9237 10.7212 20 4 12 4Z" stroke="currentColor"></path>
    </svg>
);