const fs = require("fs");

const INPUT_PATH = process.env["OUTPUT_FILE_PATH"];

let readmeVarsTable = "";
let globalVarsTable = "";
let globalVarsPage = "";
let globalVarsList = "";

let propsToParse = {};

try {
  globalVarsPage = fs.readFileSync(INPUT_PATH + "/global/index.md", "utf8");
} catch (e) {
  console.log(e);
  globalVarsPage = "";
}

try {
  globalVarsList = fs.readFileSync(INPUT_PATH + "/global/list.md", "utf8");
} catch (e) {
  console.log(e);
  globalVarsList = "";
}

try {
  globalVarsTable = fs.readFileSync(INPUT_PATH + "/global/table.md", "utf8");
} catch (e) {
  console.log(e);
  globalVarsTable = "";
}

try {
  readmeVarsTable = fs.readFileSync(process.env["README_CHAPTER_PATH"], "utf8");
} catch (e) {
  console.log(e);
  readmeVarsTable = "";
}

try {
  propsToParse = require("../components/shared-props.json");
} catch (e) {
  console.log(e);
  propsToParse = {};
}

Object.keys(propsToParse).forEach((actualProp, index) => {
  globalVarsTable = globalVarsTable.replace(
    "PROP_NAME_" + index,
    `[${actualProp}](#${actualProp.toLowerCase()})`
  );
  readmeVarsTable = readmeVarsTable.replace(
    "PROP_NAME_" + index,
    `[${actualProp}](docs/props/global/index.md#${actualProp.toLowerCase()})`
  );

  if (propsToParse[actualProp].description) {
    globalVarsList = globalVarsList.replace(
      "VAR_DESCRIPTION_" + index,
      propsToParse[actualProp].description
    );
  }

  let propType = "/";

  if (propsToParse[actualProp].type) {
    propType = propsToParse[actualProp].type;
  }

  readmeVarsTable = readmeVarsTable.replace("PROP_TYPE_" + index, propType);

  globalVarsList = globalVarsList.replace("PROP_TYPE_" + index, propType);

  globalVarsTable = globalVarsTable.replace("PROP_TYPE_" + index, propType);

  let defaultValue = "/";

  if (propsToParse[actualProp].default) {
    defaultValue = propsToParse[actualProp].default;
  }

  globalVarsTable = globalVarsTable.replace(
    "PROP_DEFAULT_" + index,
    defaultValue
  );
  readmeVarsTable = readmeVarsTable.replace(
    "PROP_DEFAULT_" + index,
    defaultValue
  );
  globalVarsList = globalVarsList.replace(
    "PROP_DEFAULT_" + index,
    defaultValue
  );
});

fs.writeFileSync(INPUT_PATH + "/global/table.md", globalVarsTable);
fs.writeFileSync(process.env["README_CHAPTER_PATH"], readmeVarsTable);
fs.writeFileSync(INPUT_PATH + "/global/list.md", globalVarsList);

fs.writeFileSync(
  INPUT_PATH + "/global/index.md",
  globalVarsPage
    .replace("COMPONENT_TABLE", globalVarsTable)
    .replace("COMPONENT_LIST", globalVarsList)
    .replace("COMPONENT_NAME", "MoBrix-ui shared props")
);
