interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const BlocksIcon = ({ size = 18, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...props}><rect x="4" y="4" width="5" height="5" stroke="currentColor" stroke-width="2"></rect><rect x="15" y="4" width="5" height="5" stroke="currentColor" stroke-width="2"></rect><rect x="15" y="15" width="5" height="5" stroke="currentColor" stroke-width="2"></rect><path d="M11 18H10C7.79086 18 6 16.2091 6 14V13" stroke="currentColor" stroke-width="2"></path></svg>
);