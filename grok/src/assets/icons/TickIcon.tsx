interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TickIcon = ({ size = 18, ...props }: IconProps) => (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.7998 6.59961L10.1221 19.5039L4.30762 13.9219L5.69238 12.4785L9.87793 16.4961L18.2002 5.40039L19.7998 6.59961Z" fill="currentColor"></path></svg>
);