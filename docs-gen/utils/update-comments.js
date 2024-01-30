const fs = require("fs");
const COMPONENT_NAME = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE = process.env["COMPONENT_TYPE"];
const EXTENSION = process.env["COMPONENT_INDEX_EXT"];

try {
  let externalProps = {};
  const props = require(
    "../components/" + COMPONENT_TYPE + "/" + COMPONENT_NAME + "/props.json"
  );

  let parameters = "";

  Object.keys(props).forEach((propName) => {
    if (props[propName].type && props[propName].description) {
      parameters += `@param {${props[propName].type}} ${propName} ${props[propName].description}\n* `;
    }
  });

  const globalSettings = require("../components/settings.json");
  const settings = require(
    "../components/" +
      COMPONENT_TYPE +
      "/" +
      COMPONENT_NAME +
      "/mbx-settings.json"
  );

  let componentFile = fs.readFileSync(
    "src/testing/" +
      COMPONENT_TYPE +
      "/" +
      COMPONENT_NAME +
      "/index." +
      EXTENSION,
    "utf8"
  );

  let executed = false;

  if (settings.description) {
    executed = true;

    componentFile = componentFile.replace(
      "MBX_COMPONENT_DESCRIPTION",
      settings.description
    );
  }
  if (parameters.length > 0) {
    componentFile = componentFile.replace("MBX_COMPONENT_PROPS", parameters);
  }
  if (settings.since) {
    componentFile = componentFile.replace("MBX_AUTHOR", globalSettings.author);
    executed = true;
  }

  if (executed) {
    fs.writeFileSync(
      "src/testing/" +
        COMPONENT_TYPE +
        "/" +
        COMPONENT_NAME +
        "/index." +
        EXTENSION,
      componentFile
    );
  }
} catch (e) {
  console.log(e);
}
