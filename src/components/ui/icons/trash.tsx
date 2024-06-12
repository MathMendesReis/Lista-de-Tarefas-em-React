import * as React from "react"

export interface TrashProps extends React.SVGProps<SVGSVGElement> {

}
function TrashIcon({...props}:TrashProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 3H11v-.5A1.5 1.5 0 009.5 1h-3A1.5 1.5 0 005 2.5V3H2.5a.5.5 0 100 1H3v9a1 1 0 001 1h8a1 1 0 001-1V4h.5a.5.5 0 000-1zM6 2.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V3H6v-.5zM12 13H4V4h8v9zM7 6.5v4a.5.5 0 01-1 0v-4a.5.5 0 111 0zm3 0v4a.5.5 0 01-1 0v-4a.5.5 0 111 0z"
        fill="#6B6572"
      />
    </svg>
  )
}

export default TrashIcon
