
interface CheckCircleProps extends React.SVGProps<SVGSVGElement> { }

function CircleCheck({...props}:CheckCircleProps) {  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 1.875A8.125 8.125 0 1018.125 10 8.133 8.133 0 0010 1.875zm0 15A6.875 6.875 0 1116.875 10 6.883 6.883 0 0110 16.875z"
        fill="#9359F3"
      />
    </svg>
  )
}

export default CircleCheck
