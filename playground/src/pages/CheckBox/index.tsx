import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { CheckBox } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const CheckBoxPage = () => (
  <ComponentPage
    name="CheckBox"
    translations
    render={(t, componentLabel) => {
      const customIconText = t("props_icon_custom");
      const defaultIconText = t("props_icon_default");

      return (
        <Demo
          label={componentLabel}
          props={{
            label: StringProp("label"),
            value: BooleanProp(false),
            icon: SelectProp({
              [defaultIconText]: undefined,
              [customIconText]: (
                <svg viewBox="0 0 750 750" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient
                      id="d"
                      cx="250"
                      cy="240"
                      gradientUnits="userSpaceOnUse"
                      r="390"
                    >
                      <stop offset="0" stopColor="#FFF" />
                      <stop offset=".184" stopColor="#e2e2e2" />
                      <stop offset=".259" stopColor="#b9b9b9" />
                      <stop offset=".573" stopColor="#bcbcbc" />
                      <stop offset="1" stopColor="#777" />
                    </radialGradient>
                    <radialGradient
                      id="b"
                      cx="160"
                      cy="150"
                      gradientUnits="userSpaceOnUse"
                      r="500"
                    >
                      <stop offset="0" stopColor="#FFF" />
                      <stop offset=".5" stopColor="#eaeaea" />
                      <stop offset="1" stopColor="#b3b3b3" />
                    </radialGradient>
                  </defs>
                  <circle cx="368" cy="360" opacity=".5" r="330" />
                  <circle cx="353" cy="345" fill="url(#b)" r="325" />
                  <circle cx="378" cy="370" opacity=".5" r="265" />
                  <circle cx="353" cy="345" fill="url(#d)" r="255" />
                </svg>
              ),
            }),
            ...DEMO_COMMON_PROPS,
          }}
        >
          {(props: any) => (
            <div className="flex flex-col items-center">
              <CheckBox {...props} />
            </div>
          )}
        </Demo>
      );
    }}
  />
);

export default CheckBoxPage;
