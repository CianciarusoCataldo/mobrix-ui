const TEMPLATE = `
/**
* MBX_DESCRIPTION
*
* MBX_PROPS
*
* MBX_SEE
*
* @since MBX_SINCE
*
* @author MBX_AUTHOR
*
* @copyright MBX_COPYRIGHT
*/`;

const DEFAULT_SETTINGS = {
  since: "",
  description: "",
  see: [],
  examples: [],
};

const fs = require("fs");
const path = require("path");
const COMPONENT_NAME = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE = process.env["COMPONENT_TYPE"];
const EXTENSION = process.env["COMPONENT_INDEX_EXT"];
const COMPONENTS_FILES_DIR = process.env["COMPONENTS_FILES_DIR"];
const COMPONENTS_SETTINGS_DIR = process.env["COMPONENTS_SETTINGS_DIR"];

try {
  const props = JSON.parse(
    fs.readFileSync(
      path.join(
        COMPONENTS_SETTINGS_DIR,
        COMPONENT_TYPE,
        COMPONENT_NAME,
        "props.json"
      )
    )
  );
  const sharedProps = JSON.parse(
    fs.readFileSync(path.join(COMPONENTS_SETTINGS_DIR, "shared-props.json"))
  );

  const globalSettings = JSON.parse(
    fs.readFileSync(path.join(COMPONENTS_SETTINGS_DIR, "settings.json"))
  );

  let parameters = "";

  Object.keys(props).forEach((propName) => {
    if (props[propName].type && props[propName].description) {
      parameters += `@param {${props[propName].type}} ${propName} ${
        props[propName].comment || props[propName].description
      }\n* `;
    }
  });

  Object.keys(sharedProps).forEach((propName) => {
    if (sharedProps[propName].type && sharedProps[propName].description) {
      parameters += `@param {${sharedProps[propName].type}} ${propName} - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - ${sharedProps[propName].description}\n* `;
    }
  });

  const settingsJson = JSON.parse(
    fs.readFileSync(
      path.join(
        COMPONENTS_SETTINGS_DIR,
        COMPONENT_TYPE,
        COMPONENT_NAME,
        "mbx-settings.json"
      ),
      "utf8"
    )
  );

  const settings = { ...DEFAULT_SETTINGS, ...settingsJson };

  let componentFile = fs.readFileSync(
    path.join(
      COMPONENTS_FILES_DIR,
      COMPONENT_TYPE,
      COMPONENT_NAME,
      "index." + EXTENSION
    ),
    "utf8"
  );

  let executed = true;
  componentFile = componentFile.replace("/**", "<COMMENT>");
  componentFile = componentFile.replace("*/", "<COMMENT>");

  const splittedComment = componentFile.split("<COMMENT>");

  if (splittedComment.length === 3) {
    let customTemplate = TEMPLATE;

    customTemplate = customTemplate.replace(
      "MBX_DESCRIPTION",
      settings.description
    );
    customTemplate = customTemplate.replace("MBX_SINCE", settings.since);
    customTemplate = customTemplate.replace(
      "MBX_AUTHOR",
      globalSettings.author
    );
    customTemplate = customTemplate.replace(
      "MBX_COPYRIGHT",
      globalSettings.copyright
    );
    customTemplate = customTemplate.replace("MBX_PROPS", parameters);
    customTemplate = customTemplate.replace(
      "MBX_SEE",
      `@see https://cianciarusocataldo.github.io/mobrix-ui/components/${COMPONENT_TYPE}/${COMPONENT_NAME}\n* @see https://cianciarusocataldo.github.io/mobrix-ui/docs`
    );

    let examples = "";

    settings.examples.forEach((example) => {
      examples += `@example <caption>${example.name}</caption>\n*`;
    });

    customTemplate = customTemplate.replace("MBX_EXAMPLE", examples);

    const finalString =
      splittedComment[0] + customTemplate + splittedComment[2];

    if (executed) {
      fs.writeFileSync(
        path.join(
          COMPONENTS_FILES_DIR,
          COMPONENT_TYPE,
          COMPONENT_NAME,
          "index." + EXTENSION
        ),
        finalString
      );
    }
  } else {
    console.log(COMPONENT_NAME, "lenght!=3\n\n");
  }
} catch (e) {
  console.log(e);
}
