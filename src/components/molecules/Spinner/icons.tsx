import React from "react";

import { SpinnerProps } from "./types";

const DEFAULT_ICONS: Record<SpinnerProps["value"], JSX.Element> = {
  loading: (
    <svg
      data-id="loading-icon"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      xmlSpace="preserve"
      className="rotating"
    >
      <path
        className="st0"
        d="M281.6 409.6c28.3 0 51.2 22.9 51.2 51.2 0 28.3-22.9 51.2-51.2 51.2s-51.2-22.9-51.2-51.2c0-28.3 22.9-51.2 51.2-51.2zm-160.2-76.8c35.4 0 64 28.7 64 64s-28.6 64-64 64-64-28.6-64-64 28.6-64 64-64zm296.4 12.8c28.3 0 51.2 22.9 51.2 51.2 0 28.3-22.9 51.2-51.2 51.2s-51.2-22.9-51.2-51.2c0-28.3 22.9-51.2 51.2-51.2zm55.8-107c21.2 0 38.4 17.2 38.4 38.4s-17.2 38.4-38.4 38.4-38.4-17.2-38.4-38.4 17.2-38.4 38.4-38.4zM64 153.6c35.3 0 64 28.6 64 64s-28.7 64-64 64-64-28.7-64-64 28.6-64 64-64zm391.3-20.3c14.1 0 25.6 11.5 25.6 25.6 0 14.2-11.5 25.6-25.6 25.6s-25.6-11.4-25.6-25.6c0-14.1 11.5-25.6 25.6-25.6zM204.8 0c42.4 0 76.8 34.4 76.8 76.8s-34.4 76.8-76.8 76.8S128 119.2 128 76.8 162.4 0 204.8 0zm192 76.8c7.1 0 12.8 5.7 12.8 12.8 0 7.1-5.7 12.8-12.8 12.8-7.1 0-12.8-5.7-12.8-12.8 0-7.1 5.7-12.8 12.8-12.8z"
      />
    </svg>
  ),
  success: (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      data-id="success-icon"
    >
      <defs>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="258.596"
          x2="258.461"
          y1="446.746"
          y2="64.887"
        >
          <stop offset="0" stopColor="#05bc29" />
          <stop offset="1" stopColor="#5bf877" />
        </linearGradient>
      </defs>
      <path
        d="m173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001Z"
        fill="url(#a)"
      />
    </svg>
  ),
  error: (
    <svg
      version="1.0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      data-id="error-icon"
    >
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "red",
          strokeWidth: "18.05195999",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
        d="m6.39 6.42 87.19 87.19"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "red",
          strokeWidth: "17.80202103",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
        d="M6.39 93.61 93.83 6.42"
      />
    </svg>
  ),
};

export default DEFAULT_ICONS;
