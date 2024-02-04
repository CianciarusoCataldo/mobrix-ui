const fs = require("fs");
const COMPONENT_NAME = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE = process.env["COMPONENT_TYPE"];
let executed = false;

try {
  let cssVars = require(
    "../components/" + COMPONENT_TYPE + "/" + COMPONENT_NAME + "/css-vars.json"
  );

  Object.keys(cssVars).forEach((cssVar) => {
    if (!cssVars[cssVar].description) {
      if (cssVar.endsWith("dark") || cssVar.endsWith("light")) {
        executed = true;

        const description = `${COMPONENT_NAME} ATTRIBUTE when [dark](../../global/props.md#dark) mode is '${
          cssVar.endsWith("light") ? "off" : "on"
        }'${cssVar.includes("hover") ? ", on 'hover'" : ""}`;

        cssVars[cssVar].description = description.replace("'", "`");
        console.log(cssVars[cssVar].description);
      } else {
        executed = true;
        cssVars[cssVar].description = "Fallback value for `` and ``";
      }
    }
  });

  if (executed) {
    fs.writeFileSync(
      "docs-gen/components/" +
        COMPONENT_TYPE +
        "/" +
        COMPONENT_NAME +
        "/css-vars.json",
      JSON.stringify({ ...cssVars })
    );
  }
} catch (e) {
  console.log(e);
}
