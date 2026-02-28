interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const UserIcon = ({ size = 18, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...props}><path d="M18 21a6 6 0 0 0-12 0"></path><circle cx="12" cy="11" r="4"></circle><rect width="18" height="18" x="3" y="3" rx="2"></rect></svg>
);