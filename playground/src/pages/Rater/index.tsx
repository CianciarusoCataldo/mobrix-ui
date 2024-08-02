import { demoRows, demoProps } from "constants/demo-props";

import { BooleanProp, NumberProp } from "@cianciarusocataldo/demo-ui";

import { Rater } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";
import { ICONS } from "assets/images";

const RaterPage = () => (
  <ComponentPage
    name="Rater"
    translations
    render={(t, componentLabel) => {
      const iconsLab = t("props_custom_icons");

      return (
        <DemoComponent
          label={componentLabel}
          props={{
            max: NumberProp(6),
            value: NumberProp(2),
            vertical: BooleanProp(false),
            readonly: BooleanProp(false),
            [iconsLab]: BooleanProp(false),
            ...demoProps,
          }}
          rows={[
            ["value", "max", "vertical"],
            [iconsLab, "readonly"],
            ...demoRows,
          ]}
          parseProps={(props) => {
            let res = { ...props };
            delete res[iconsLab];

            if (props[iconsLab]) {
              res.emptyIcon = ICONS.EMPTY;
              res.fullIcon = ICONS.FULL;
            }

            return res;
          }}
        >
          {Rater}
        </DemoComponent>
      );
    }}
  />
);

export default RaterPage;
