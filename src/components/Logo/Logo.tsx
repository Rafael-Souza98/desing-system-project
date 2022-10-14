import { SVGAttributes } from "react";



interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={180}
      height={180}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M78.75 129.375H22.5a11.25 11.25 0 01-11.25-11.25V67.5A11.25 11.25 0 0122.5 56.25h56.25M78.75 151.875H45M146.25 50.625h-22.5M146.25 73.125h-22.5M163.125 28.125h-56.25a5.625 5.625 0 00-5.625 5.625v112.5a5.624 5.624 0 005.625 5.625h56.25a5.624 5.624 0 005.625-5.625V33.75a5.625 5.625 0 00-5.625-5.625zM61.875 129.375v22.5"
        stroke="#53F777"
        strokeWidth={11.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M135 135a8.438 8.438 0 100-16.876A8.438 8.438 0 00135 135z"
        fill="#53F777"
      />
    </svg>
  )
}

