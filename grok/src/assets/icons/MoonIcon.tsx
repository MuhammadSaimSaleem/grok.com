interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const MoonIcon = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);