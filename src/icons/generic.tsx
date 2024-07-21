import React from "react";
import { MbxIcon, MbxIconProps } from "../types/global/global";

const BasicIcon: (properties: {
  props: MbxIconProps;
  Icon: MbxIcon;
}) => JSX.Element = ({ props, Icon }) => {
  return (
    <Icon
      {...(props.dark && {
        "data-mbx-dk": "",
      })}
      {...(props.hover && {
        "data-mbx-hv": "",
      })}
      {...(props.disabled && {
        "data-mbx-dsb": "",
      })}
      height={props.height}
      width={props.width}
      style={
        {
          ...props.style,
          ...(props.hide && {
            "--mbx-ic-c": "none",
            "--mbx-ic-c-h": "none",
          }),
        } as React.CSSProperties
      }
      {...(props.transform && { transform: props.transform })}
    />
  );
};

export const link: MbxIcon = ({
  width = "30px",
  height = "30px",
  ...props
}) => (
  <BasicIcon
    props={{
      width,
      height,
      ...props,
    }}
    Icon={(props) => (
      <svg
        height="30px"
        viewBox="0 0 457.03 457.03"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        data-mbx-img="link"
        {...props}
      >
        <path d="m421.512 207.074-85.795 85.767c-47.352 47.38-124.169 47.38-171.529 0-7.46-7.439-13.296-15.821-18.421-24.465l39.864-39.861c1.895-1.911 4.235-3.006 6.471-4.296 2.756 9.416 7.567 18.33 14.972 25.736 23.648 23.667 62.128 23.634 85.762 0l85.768-85.765c23.666-23.664 23.666-62.135 0-85.781-23.635-23.646-62.105-23.646-85.768 0l-30.499 30.532c-24.75-9.637-51.415-12.228-77.373-8.424l64.991-64.989c47.38-47.371 124.177-47.371 171.557 0 47.357 47.369 47.357 124.178 0 171.546zm-226.804 141.03-30.521 30.532c-23.646 23.634-62.128 23.634-85.778 0-23.648-23.667-23.648-62.138 0-85.795l85.778-85.767c23.665-23.662 62.121-23.662 85.767 0 7.388 7.39 12.204 16.302 14.986 25.706 2.249-1.307 4.56-2.369 6.454-4.266l39.861-39.845c-5.092-8.678-10.958-17.03-18.421-24.477-47.348-47.371-124.172-47.371-171.543 0L35.526 249.96c-47.366 47.385-47.366 124.172 0 171.553 47.371 47.356 124.177 47.356 171.547 0l65.008-65.003c-25.972 3.826-52.644 1.213-77.373-8.406z" />
      </svg>
    )}
  />
);

export const Xicon: MbxIcon = ({
  width = "1.4rem",
  height = "1.4rem",
  ...iprops
}) => (
  <BasicIcon
    props={{
      width,
      height,
      ...iprops,
    }}
    Icon={(props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        version="1.0"
        data-mbx-img="x"
        {...props}
      >
        <path
          fill={props.fill}
          d="m119.7496 67.5187-52.186 52.186 69.5301 69.5012c5.9668 5.9667 5.9668 15.5958 0 21.5625l-69.53 69.53 52.186 52.186 69.53-69.53c5.9667-5.9668 15.5958-5.9668 21.5625 0l69.53 69.53 52.186-52.186-69.53-69.53c-5.9668-5.9667-5.9668-15.5958 0-21.5625l69.53-69.5013-52.186-52.186-69.53 69.5013c-5.9667 5.9667-15.5958 5.9667-21.5625 0l-69.53-69.5012z"
        />
      </svg>
    )}
  />
);

export const ArrowIcon: MbxIcon = ({
  width = "30",
  height = "37",
  ...icprops
}) => (
  <BasicIcon
    props={{
      width,
      height,
      ...icprops,
    }}
    Icon={(props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11 18"
        data-mbx-img="arr"
        {...props}
      >
        <path d="M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z" />
        <path d="M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z" />
      </svg>
    )}
  />
);

export const CalendarIcon: MbxIcon = ({
  width = "20px",
  height = "20px",
  ...iprops
}) => (
  <BasicIcon
    props={{
      width,
      height,
      ...iprops,
    }}
    Icon={({ fill, ...props }) => (
      <svg
        data-mbx-img="cal"
        viewBox="0 -256 1850 1850"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M219.1 1425.9h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
          fill={fill}
        />
      </svg>
    )}
  />
);

export const CheckIcon: MbxIcon = ({ fill = "inherit", ...iprops }) => (
  <BasicIcon
    props={{ fill, ...iprops }}
    Icon={(props) => (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1171.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
        data-mbx-img="tick"
        {...props}
      >
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M11555 12694 c-1288 -888 -2591 -2076 -3945 -3594 -1475 -1656 -3026
-3783 -4315 -5918 -72 -119 -115 -180 -123 -177 -8 3 -716 474 -1575 1048
-859 574 -1568 1047 -1576 1052 -11 6 -10 2 2 -16 98 -140 3704 -5078 3709
-5079 3 0 34 66 68 148 1225 2918 2422 5234 3838 7427 1148 1777 2481 3497
3899 5028 91 97 163 177 161 177 -2 0 -67 -43 -143 -96z"
          />
        </g>
      </svg>
    )}
  />
);

export const CopyIcon: MbxIcon = ({
  width = "25px",
  height = "25px",
  ...iprops
}) => (
  <BasicIcon
    props={{ height, width, ...iprops }}
    Icon={(props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 60"
        version="1.0"
        {...props}
      >
        <rect
          strokeLinejoin="round"
          fillRule="evenodd"
          stroke="#4c4c4c"
          strokeWidth="3.125"
          fill="#ccc"
          rx="2.4745"
          height="36.513"
          width="34.732"
          y="4.5767"
          x="5.0385"
        />
        <rect
          strokeLinejoin="round"
          fillRule="evenodd"
          stroke="#4c4c4c"
          strokeWidth="3.125"
          fill="#b3b3b3"
          rx="2.4745"
          height="36.513"
          width="34.732"
          y="20.161"
          x="20.178"
        />
        <path
          strokeLinejoin="round"
          fillRule="evenodd"
          stroke="#333"
          strokeLinecap="round"
          strokeWidth="3.125"
          fill="#7f7f7f"
          d="M10.971 22.475C19.445 41.064 33.797 36.69 33.934 36.69v-6.15l8.269 9.459-8.338 8.788v-6.219s-19.887 4.647-22.894-20.093z"
        />
      </svg>
    )}
  />
);

export const GitLogo: MbxIcon = ({
  width = "30px",
  height = "30px",
  ...props
}) => (
  <BasicIcon
    props={{
      width,
      height,
      ...props,
    }}
    Icon={(props) => (
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-mbx-img="git"
        {...props}
      >
        <path
          data-mbx-revimg="git"
          d="M512 0A511.9 511.9 0 0 0 0 512c0 226.6 146.6 418 350 485.8 25.7 4.4 35.3-11 35.3-24.4 0-12.1-.7-52.4-.7-95.3-128.6 23.7-161.9-31.4-172.1-60.2-5.8-14.7-30.7-60.1-52.5-72.3-18-9.6-43.5-33.3-.6-34 40.3-.6 69 37.2 78.7 52.6 46 77.4 119.7 55.6 149.1 42.2 4.5-33.3 18-55.7 32.6-68.5-113.9-12.8-233-57-233-252.8 0-55.7 20-101.7 52.6-137.6-5.2-12.8-23-65.3 5-135.7 0 0 43-13.4 140.9 52.5a475 475 0 0 1 128-17.3c43.5 0 87 5.8 128 17.3 97.9-66.5 140.8-52.5 140.8-52.5 28.1 70.4 10.2 123 5.1 135.7a198.1 198.1 0 0 1 52.5 137.6c0 196.5-119.7 240-233.6 252.8 18.5 16 34.5 46.7 34.5 94.7 0 68.5-.6 123.6-.6 140.8 0 13.5 9.6 29.5 35.2 24.4A512.8 512.8 0 0 0 1024 512C1024 229.1 794.9 0 512 0Z"
          fillRule="evenodd"
        />
      </svg>
    )}
  />
);
