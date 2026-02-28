interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const HappyMaskIcon = ({ size = 18, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}  viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path d="M6.15929 14.0953C6.88963 12.7513 7.96772 12.5612 9.11371 13.5744" stroke="currentColor" stroke-width="1.75"></path><path d="M11.0836 13.2271C11.8139 11.8831 12.892 11.693 14.038 12.7062" stroke="currentColor" stroke-width="1.75"></path><path d="M8.65012 16.7026C9.14708 17.222 9.95176 17.4885 10.7934 17.3401C11.635 17.1917 12.3 16.666 12.5894 16.008" stroke="currentColor" stroke-width="1.75"></path><path d="M16.0373 6.76888L2.25 9.19995L3.46554 16.0936C4.13686 19.9009 7.76747 22.443 11.5747 21.7717C15.382 21.1004 17.9242 17.4698 17.2528 13.6625L16.0373 6.76888Z" stroke="currentColor" stroke-width="2"></path><path d="M20.6008 11.3247L21.8163 4.43107L8.02898 2L7.5 5" stroke="currentColor" stroke-width="2"></path></svg>
);