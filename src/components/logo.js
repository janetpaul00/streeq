import { twMerge } from "tailwind-merge";

export function Logo({ className }) {
  return (
    <svg
      className={twMerge("h-12 w-12", className)}
      fill="currentColor"
      viewBox="0 0 48 48"
    >
      <path d="M37.879,17.911C37.644,17.358,37.101,17,36.5,17h-7.006l6.3-10.741c0.272-0.464,0.275-1.038,0.008-1.504	C35.534,4.288,35.038,4,34.5,4h-12c-0.547,0-1.051,0.298-1.314,0.777l-11,20c-0.255,0.464-0.247,1.03,0.023,1.486	C10.479,26.72,10.97,27,11.5,27h6.775l-6.162,14.928c-0.275,0.667-0.037,1.435,0.567,1.829C12.932,43.92,13.216,44,13.5,44	c0.397,0,0.792-0.158,1.083-0.462l23-24C37.999,19.104,38.116,18.464,37.879,17.911z"></path>
    </svg>
  );
}