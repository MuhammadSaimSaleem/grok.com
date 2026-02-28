interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const CrossIcon = ({ size = 18, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 6L18 18M18 6L6 18" stroke="currentColor"></path></svg>
);