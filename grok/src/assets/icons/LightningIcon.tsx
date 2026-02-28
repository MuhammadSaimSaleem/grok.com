interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const LightningIcon = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="none" {...props}><path d="M5 14.25L14 4L13 9.75H19L10 20L11 14.25H5Z" stroke="currentColor" stroke-width="2"></path></svg>
);