import {Props} from "./types"

function Reddit({width = 25, height = 25}: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="fill-current"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="188"
        cy="32"
        r="16"
        fill="none"
        className="stroke-slate-900 dark:stroke-slate-100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
      <path
        d="M161,176a71.9,71.9,0,0,1-66,0"
        fill="none"
        className="stroke-slate-900 dark:stroke-slate-100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <polyline
        points="128 72 136 24 172.2 29.6"
        fill="none"
        className="stroke-slate-900 dark:stroke-slate-100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>
      <path
        d="M59.4,89.9C77.7,78.7,101.7,72,128,72s50.3,6.7,68.6,17.9h0a24,24,0,1,1,31.6,34.8h0A50.7,50.7,0,0,1,232,144c0,39.8-46.6,72-104,72S24,183.8,24,144a50.7,50.7,0,0,1,3.8-19.3h0A24,24,0,1,1,59.4,89.9Z"
        fill="none"
        className="stroke-slate-900 dark:stroke-slate-100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <circle cx="88" cy="132" r="16"></circle>
      <circle cx="168" cy="132" r="16"></circle>
    </svg>
  )
}

export {Reddit}
