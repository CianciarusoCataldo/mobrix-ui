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
    "src/components/" +
      COMPONENT_TYPE +
      "/" +
      COMPONENT_NAME +
      "/index." +
      EXTENSION,
    "utf8"
  );
  const TEMPLATE = `
  /**
  * MBX_DESCRIPTION
  *
  * MBX_PROPS
  *
  * @example MBX_EXAMPLE
  *
  * @since MBX_SINCE
  *
  * @author MBX_AUTHOR
  *
  * @copyright MBX_COPYRIGHT
  */`;

  let executed = false;
  componentFile = componentFile.replace("/**", "<COMMENT>");
  componentFile = componentFile.replace("*/", "<COMMENT>");

  const splittedComment = componentFile.split("<COMMENT>");

  if (splittedComment.length === 3) {
    const finalString = splittedComment[0] + TEMPLATE + splittedComment[2];
    console.log("\n\n" + COMPONENT_NAME + "\n");
    console.log(finalString);
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
  } else {
    console.log(COMPONENT_NAME, "lemght!=3\n\n");
  }
} catch (e) {
  console.log(e);
}
