interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TrashIcon = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2.99561 7H20.9956" stroke="currentColor"></path><path d="M9.99561 11V17M13.9956 11V17" stroke="currentColor"></path><path d="M8 6.5L8.68917 4.08792C8.87315 3.44397 9.46173 3 10.1315 3H13.8685C14.5383 3 15.1268 3.44397 15.3108 4.08792L16 6.5" stroke="currentColor"></path><path d="M5 7L5.80098 18.2137C5.91312 19.7837 7.21944 21 8.79336 21H15.2066C16.7806 21 18.0869 19.7837 18.199 18.2137L19 7" stroke="currentColor"></path>  
  </svg>

);