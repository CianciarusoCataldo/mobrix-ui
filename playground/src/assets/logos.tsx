import React from "react";
import { MbxIcon, MbxIconProps } from "../mobrix-ui-preview";

const BasicIcon: (properties: {
  props: MbxIconProps;
  Icon: MbxIcon;
}) => JSX.Element = ({ props, Icon }) => {
  return (
    <Icon
      height={props.height}
      width={props.width}
      style={
        {
          ...props.style,
          ...(props.hide && {
            "--mbx-ic-c": "none",
          }),
        } as React.CSSProperties
      }
    />
  );
};

export const FbLogo: MbxIcon = (props) => (
  <svg
    viewBox="0 0 14222 14222"
    xmlns="http://www.w3.org/2000/svg"
    data-mbx-img="face"
    {...props}
  >
    <circle cx="7111" cy="7112" fill="#1977f3" r="7111" />
    <path
      d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
      fill="#fff"
    />
  </svg>
);

export const Google: MbxIcon = (props) => (
  <svg data-mbx-img="google" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m23.7 12.3-.1-2.3H12.3v4.5h6.4a5.6 5.6 0 0 1-2.4 3.6v3h3.9a12 12 0 0 0 3.5-8.8Z"
      fill="#4285F4"
    />
    <path
      d="M12.3 24c3.2 0 6-1 7.9-3l-3.9-3a7.2 7.2 0 0 1-10.8-3.7h-4v3c2 4 6 6.7 10.8 6.7Z"
      fill="#34A853"
    />
    <path
      d="M5.5 14.3a7 7 0 0 1 0-4.6v-3h-4a11.9 11.9 0 0 0 0 10.7l4-3.1Z"
      fill="#FBBC05"
    />
    <path
      d="M12.3 4.8c1.7 0 3.3.6 4.6 1.8L20.3 3A12 12 0 0 0 1.6 6.6l4 3.1c.9-2.8 3.5-5 6.7-5Z"
      fill="#EA4335"
    />
  </svg>
);
export const Twitter: MbxIcon = (props) => (
  <svg
    viewBox="126.4 2.3 589 589"
    xmlns="http://www.w3.org/2000/svg"
    data-mbx-img="twt"
    {...props}
  >
    <circle cx="420.9" cy="296.8" fill="#2daae1" r="294.5" />
    <path
      d="M609.8 179.6a154.7 154.7 0 0 1-44.5 12.2 77.7 77.7 0 0 0 34-42.8 154.8 154.8 0 0 1-49.2 18.8 77.4 77.4 0 0 0-134 53c0 6 .7 12 2 17.7a220 220 0 0 1-159.7-81 77.4 77.4 0 0 0 24 103.4 77.1 77.1 0 0 1-35-9.6v1a77.5 77.5 0 0 0 62 75.9 77 77 0 0 1-35 1.3 77.6 77.6 0 0 0 72.4 53.8 155.4 155.4 0 0 1-114.7 32.1c34.3 22 75 34.8 118.8 34.8 142.5 0 220.4-118 220.4-220.4 0-3.3 0-6.7-.2-10a157.9 157.9 0 0 0 38.7-40.2z"
      fill="#fff"
    />
  </svg>
);
export const Linkedin: MbxIcon = (props) => (
  <svg
    data-mbx-revimg="ld"
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    data-mbx-img="lnkd"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M36 72a36 36 0 1 0 0-72 36 36 0 1 0 0 72Z" fill="#007EBB" />
      <path
        d="M59 57h-9V41.6c0-4.2-1.6-6.6-5-6.6-3.6 0-5.5 2.5-5.5 6.6V57h-8.7V27.7h8.7v4s2.6-5 8.8-5c6.2 0 10.7 3.9 10.7 11.7V57ZM20.4 23.8c-3 0-5.4-2.4-5.4-5.4a5.4 5.4 0 1 1 10.7 0c0 3-2.4 5.4-5.3 5.4ZM15.9 57h9V27.7h-9V57Z"
        fill="#FFF"
      />
    </g>
  </svg>
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
        width="30px"
        height="30px"
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
