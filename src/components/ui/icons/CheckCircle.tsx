import * as React from "react"
interface CheckCircleProps extends React.SVGProps<SVGSVGElement> { }

function CheckCircle({...props}:CheckCircleProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 1.875A8.125 8.125 0 1018.125 10 8.133 8.133 0 0010 1.875zm3.567 6.692l-4.375 4.375a.626.626 0 01-.884 0l-1.875-1.875a.625.625 0 11.884-.884l1.433 1.433 3.933-3.933a.626.626 0 01.884.884z"
        fill="#479C6E"
      />
    </svg>
  )
}

export default CheckCircle
