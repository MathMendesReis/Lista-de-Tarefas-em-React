import * as React from "react"
interface Logo extends React.SVGProps<SVGSVGElement> { }

function LogoSvg({...props}:Logo) {
  return (
    <svg
      width={210}
      height={72}
      viewBox="0 0 210 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M84.775 24.409v7.67H64.128v-7.67h20.647zm-16.321-7.841h10.419v30.277c0 .64.1 1.157.298 1.555.213.384.518.66.916.831.398.157.874.235 1.428.235.397 0 .817-.036 1.257-.107.454-.085.795-.156 1.022-.213l1.577 7.521c-.497.142-1.2.32-2.11.533-.894.213-1.966.348-3.216.405-2.444.113-4.539-.17-6.286-.852-1.733-.697-3.061-1.776-3.984-3.24-.91-1.462-1.35-3.302-1.321-5.518V16.568zM105.016 57.754c-3.437 0-6.392-.703-8.864-2.11-2.457-1.42-4.353-3.394-5.688-5.923-1.321-2.542-1.982-5.49-1.982-8.842 0-3.366.66-6.314 1.982-8.842 1.335-2.543 3.231-4.517 5.689-5.924 2.471-1.42 5.426-2.13 8.863-2.13 3.438 0 6.385.71 8.842 2.13 2.472 1.407 4.368 3.381 5.689 5.924 1.336 2.528 2.003 5.476 2.003 8.842 0 3.352-.667 6.3-2.003 8.842a14.373 14.373 0 01-5.689 5.924c-2.457 1.406-5.404 2.109-8.842 2.109zm.064-7.862c1.25 0 2.308-.384 3.175-1.15.866-.768 1.527-1.833 1.981-3.197.469-1.364.703-2.94.703-4.73 0-1.818-.234-3.41-.703-4.773-.454-1.363-1.115-2.429-1.981-3.196-.867-.767-1.925-1.15-3.175-1.15-1.293 0-2.386.383-3.281 1.15-.881.767-1.556 1.833-2.024 3.196-.455 1.364-.682 2.955-.682 4.773 0 1.79.227 3.367.682 4.73.468 1.364 1.143 2.43 2.024 3.196.895.767 1.988 1.15 3.281 1.15z"
        fill="#479C6E"
      />
      <path
        d="M138.841 57.605c-2.415 0-4.61-.625-6.584-1.875-1.975-1.25-3.551-3.125-4.73-5.625-1.179-2.5-1.769-5.604-1.769-9.311 0-3.85.611-7.017 1.833-9.503 1.221-2.486 2.819-4.325 4.794-5.518 1.988-1.194 4.126-1.79 6.413-1.79 1.719 0 3.189.298 4.411.895 1.221.582 2.23 1.335 3.025 2.258.796.924 1.399 1.883 1.811 2.877h.213V13.5h10.419v43.636h-10.312v-5.305h-.32a10.219 10.219 0 01-1.875 2.834c-.809.88-1.825 1.59-3.047 2.13-1.207.54-2.635.81-4.282.81zm3.622-8.118c1.264 0 2.344-.355 3.238-1.065.895-.725 1.584-1.74 2.067-3.047.483-1.307.725-2.84.725-4.602 0-1.79-.242-3.331-.725-4.624-.469-1.293-1.157-2.287-2.067-2.983-.894-.696-1.974-1.044-3.238-1.044-1.293 0-2.387.355-3.281 1.066-.895.71-1.577 1.711-2.046 3.004-.454 1.292-.682 2.82-.682 4.58 0 1.762.235 3.296.703 4.603.469 1.307 1.144 2.322 2.025 3.047.894.71 1.988 1.065 3.281 1.065zM180.543 57.754c-3.437 0-6.392-.703-8.863-2.11-2.458-1.42-4.354-3.394-5.689-5.922-1.321-2.543-1.982-5.49-1.982-8.843 0-3.366.661-6.314 1.982-8.842 1.335-2.543 3.231-4.517 5.689-5.923 2.471-1.42 5.426-2.131 8.863-2.131 3.438 0 6.385.71 8.843 2.13 2.471 1.407 4.368 3.381 5.689 5.924 1.335 2.528 2.003 5.476 2.003 8.842 0 3.352-.668 6.3-2.003 8.843a14.38 14.38 0 01-5.689 5.923c-2.458 1.406-5.405 2.11-8.843 2.11zm.064-7.862c1.25 0 2.309-.384 3.175-1.15.867-.768 1.527-1.833 1.982-3.197.468-1.363.703-2.94.703-4.73 0-1.818-.235-3.409-.703-4.772-.455-1.364-1.115-2.43-1.982-3.196-.866-.767-1.925-1.151-3.175-1.151-1.292 0-2.386.384-3.281 1.15-.881.768-1.555 1.833-2.024 3.197-.455 1.363-.682 2.954-.682 4.772 0 1.79.227 3.367.682 4.73.469 1.364 1.143 2.43 2.024 3.197.895.767 1.989 1.15 3.281 1.15z"
        fill="#9359F3"
      />
      <path
        d="M37.5 56.386a2.25 2.25 0 01-2.25 2.25h-6a2.25 2.25 0 110-4.5h6a2.25 2.25 0 012.25 2.25zm-5.25-21a3 3 0 100-5.998 3 3 0 000 5.998z"
        fill="#479C6E"
      />
      <path
        d="M50.911 43.017l-2.317 10.431a3.732 3.732 0 01-2.415 2.724 3.782 3.782 0 01-1.255.214 3.725 3.725 0 01-2.304-.8l-4.901-3.7H26.78l-4.901 3.701a3.725 3.725 0 01-3.559.584 3.731 3.731 0 01-2.415-2.725l-2.317-10.428a3.77 3.77 0 01.78-3.214l5.218-6.263c.2-2.346.746-4.65 1.622-6.836 2.488-6.234 6.937-10.144 8.745-11.535a3.75 3.75 0 014.593 0c1.8 1.391 6.257 5.3 8.745 11.535a23.811 23.811 0 011.622 6.836l5.218 6.263a3.767 3.767 0 01.78 3.213zm-23.576 4.37h9.829c3.658-6.694 4.312-13.084 1.948-19.013-1.913-4.8-5.325-8.006-6.863-9.278-1.537 1.271-4.95 4.478-6.862 9.278-2.366 5.929-1.71 12.319 1.948 19.012zm-4.228 1.634a31.503 31.503 0 01-3.172-8.868l-1.875 2.25 1.983 8.932 3.064-2.314zm23.33-6.62l-1.874-2.25a31.501 31.501 0 01-3.173 8.868l3.062 2.312 1.986-8.93z"
        fill="#9359F3"
      />
    </svg>
  )
}

export default LogoSvg
