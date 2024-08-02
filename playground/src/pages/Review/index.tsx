import { demoRows, demoProps } from "constants/demo-props";

import {
  BooleanProp,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Review } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { ICONS } from "assets/images";

const userIcon = (
  <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm0 0" fill="#334d5c" />
    <path
      d="M23 35.8c-.3-1.9.8-6 .8-6h-7.3s1.2 4 .8 6c-.1 1-2.4 2.1-4 3a20 20 0 0 0 13.6 0c-1.5-1-3.8-2-4-3Zm0 0"
      fill="#41af87"
    />
    <path
      d="M20 4.8c-6.8 0-15 6.8-12.3 14.6C10.1 26.3 16.3 32 20 32c3.7 0 10-5.8 12.3-12.6C34.9 11.6 26.8 4.8 20 4.8Zm0 0"
      fill="#4abc96"
    />
    <path
      d="M18.8 20s-.4-1.2-1.2-2.4c-1.1-1.6-2.4-2.4-3.9-2.4-1.4 0-2.9.8-4.5 2.4v.2s2 3.1 6 3.1c1.2 0 2.3-.2 3.5-.6 0 0 .1-.2 0-.2Zm0 0"
      fill="#3faa83"
    />
    <path d="M10.1 17.8s2.6 4 7.8 2c0 0-2.4-7.4-7.8-2Zm0 0" fill="#22343d" />
    <path
      d="M13.1 16.6c0 .6 1.7.8 1.8.3 0-.5-1.7-.8-1.8-.3Zm0 0"
      fill="#cbefe1"
    />
    <path
      d="M30.8 17.6c-1.6-1.6-3.1-2.4-4.5-2.4-1.5 0-2.8.8-3.9 2.4a9.1 9.1 0 0 0-1.2 2.5l.1.1c1.2.5 2.3.7 3.4.7 4 0 6-3 6.1-3.1v-.2Zm0 0"
      fill="#3faa83"
    />
    <path
      d="M22.1 19.8c5.2 2 7.8-2 7.8-2-5.4-5.4-7.8 2-7.8 2Zm0 0"
      fill="#22343d"
    />
    <path
      d="M26.9 16.6c-.1-.5-1.8-.2-1.8.3.1.5 1.8.3 1.8-.3Zm0 0"
      fill="#cbefe1"
    />
    <path
      d="M19.3 24.1c-.3 0-.6.2-.6.5s1.2.3 1.2 0-.3-.5-.6-.5Zm1.4 0c-.3 0-.6.2-.6.5s1.2.3 1.2 0-.3-.5-.6-.5Zm1.9 3.9c0 .3-1.2.3-2.7.3-1.5 0-2.7 0-2.7-.3 0-.2 1.2-.3 2.7-.3 1.5 0 2.7 0 2.7.3Zm0 0"
      fill="#329670"
    />
  </svg>
);

const RaterPage = () => (
  <ComponentPage
    name="Review"
    translations
    render={(t, componentLabel) => {
      const iconsLab = t("props_custom_icons");
      const logoLab = t("props_custom_logo");

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            icon: BooleanProp(true),
            description: StringProp("MoBrix-ui is an awesome library !"),
            user: StringProp("Random user"),
            max: NumberProp(5),
            rate: NumberProp(5),
            url: StringProp("https://www.example.com/"),
            [logoLab]: BooleanProp(false),
            [iconsLab]: BooleanProp(false),
            ...demoProps,
          }}
          parseProps={(props) => {
            let newProps = { ...props };
            delete newProps.icon;
            delete newProps[logoLab];
            delete newProps[iconsLab];

            if (props[iconsLab]) {
              newProps.emptyIcon = ICONS.EMPTY;
              newProps.fullIcon = ICONS.FULL;
            }
            if (props[logoLab]) {
              newProps.logo = (
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                >
                  <path
                    d="M512 0A511.9 511.9 0 0 0 0 512c0 226.6 146.6 418 350 485.8 25.7 4.4 35.3-11 35.3-24.4 0-12.1-.7-52.4-.7-95.3-128.6 23.7-161.9-31.4-172.1-60.2-5.8-14.7-30.7-60.1-52.5-72.3-18-9.6-43.5-33.3-.6-34 40.3-.6 69 37.2 78.7 52.6 46 77.4 119.7 55.6 149.1 42.2 4.5-33.3 18-55.7 32.6-68.5-113.9-12.8-233-57-233-252.8 0-55.7 20-101.7 52.6-137.6-5.2-12.8-23-65.3 5-135.7 0 0 43-13.4 140.9 52.5a475 475 0 0 1 128-17.3c43.5 0 87 5.8 128 17.3 97.9-66.5 140.8-52.5 140.8-52.5 28.1 70.4 10.2 123 5.1 135.7a198.1 198.1 0 0 1 52.5 137.6c0 196.5-119.7 240-233.6 252.8 18.5 16 34.5 46.7 34.5 94.7 0 68.5-.6 123.6-.6 140.8 0 13.5 9.6 29.5 35.2 24.4A512.8 512.8 0 0 0 1024 512C1024 229.1 794.9 0 512 0Z"
                    fillRule="evenodd"
                  />
                </svg>
              );
            }
            if (props.icon) {
              newProps.icon = userIcon;
            }
            return newProps;
          }}
          rows={[
            ["description", "user", "rate"],
            ["max", "url"],
            [logoLab, iconsLab],
            ...demoRows,
          ]}
        >
          {Review}
        </DemoComponent>
      );
    }}
  />
);

export default RaterPage;
