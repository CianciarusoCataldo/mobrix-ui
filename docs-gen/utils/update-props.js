const fs = require("fs");
const COMPONENT_NAME = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE = process.env["COMPONENT_TYPE"];

try {
  let externalProps = {};
  let groupProps = {};
  const groups = require("../components/props-groups.json");
  const settings = require(
    "../components/" +
      COMPONENT_TYPE +
      "/" +
      COMPONENT_NAME +
      "/mbx-settings.json"
  );
  let props = require(
    "../components/" + COMPONENT_TYPE + "/" + COMPONENT_NAME + "/props.json"
  );

  if (settings.extend) {
    if (settings.extend.group) {
      Object.keys(settings.extend.group).forEach((groupName) => {
        groupProps[groups[groupName].prop] = {
          type: groups[groupName].type.replace(
            "TYPE",
            settings.extend.group[groupName].type
          ),
          default: groups[groupName].default,
          description:
            settings.extend.group[groupName].overrideDescription ||
            groups[groupName].description.replace("COMPONENT", COMPONENT_NAME),
        };
      });
    }

    if (settings.extend.component) {
      const component = settings.extend.component.name;
      const type = settings.extend.component.type || COMPONENT_TYPE;
      externalProps = require(
        "../components/" + type + "/" + component + "/props.json"
      );

      Object.keys(externalProps).forEach((externalProp) => {
        externalProps[externalProp].comment =
          externalProps[externalProp].description +
          ` - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/${type}/${component} ${component}}`;

        externalProps[externalProp].description +=
          ` - extended from [${component} component](../../${type}/${component}/props.md#${externalProp})`;
      });
    }
  }

  fs.writeFileSync(
    "docs-gen/components/" +
      COMPONENT_TYPE +
      "/" +
      COMPONENT_NAME +
      "/props.json",
    JSON.stringify({ ...props, ...externalProps, ...groupProps })
  );
} catch (e) {
  console.log(e);
}
