const fs = require("fs");

let summary = "\n";
let tables = "\n";
let components = {
  atoms: { list: [], tables: "", summary: "" },
  molecules: { list: [], tables: "", summary: "" },
  organisms: { list: [], tables: "", summary: "" },
};

function getComponents(type) {
  const result = fs
    .readdirSync("src/components/" + type)
    .filter((el, index) => el !== "index.ts");

  result.forEach((el) => {
    if (
      !fs.existsSync(
        process.env["OUTPUT_FILE_PATH"] + "/components/" + type + "/" + el
      )
    ) {
      fs.mkdir(
        process.env["OUTPUT_FILE_PATH"] + "/components/" + type + "/" + el,
        (err) => {
          if (err) {
            return console.error(err);
          }
          console.log("Directory created successfully!");
        }
      );
    }
  });

  return result;
}

function parseVars(component = "Global", type) {
  let list = "";
  let singlePageTable = "";
  let res = `\n\n${
    component ? "<br>\n\n### " + component + "\n\n" : ""
  } | Prop | Fallback | Default |\n| ----- | ----- | ----- |\n`;
  singlePageTable += res;
  let resPath = type ? type + "/" + component + "/config.json" : "global.json";
  try {
    const result = require("../../docs/css-vars/components/" + resPath);

    Object.keys(result).forEach((cssvar, varindex) => {
      res += `| ${cssvar} | ${result[cssvar]?.fallback || ""} | ${result[cssvar]?.default || ""} |\n`;
      singlePageTable += `| [${cssvar}](#${cssvar.replace("--", "")}) | ${result[cssvar]?.fallback || ""} | ${result[cssvar]?.default || ""} |\n`;
      list += "\n\n<br>\n\n## " + cssvar + "\n\n<br>";
    });
  } catch (e) {
    fs.writeFileSync("docs/css-vars/components/" + resPath + ".json", "{}");
  }

  const outPath =
    process.env["OUTPUT_FILE_PATH"] + component.toLowerCase() + "-css-vars.md";

  fs.writeFileSync(
    outPath,
    "# MoBrix-ui " +
      component +
      " CSS variables\n" +
      singlePageTable +
      "\n\n" +
      list
  );

  return {
    table: res + "\n\n",
    list,
  };
}

components.atoms.list = getComponents("atoms");
components.molecules.list = getComponents("molecules");
components.organisms.list = getComponents("organisms");
parseVars();

Object.keys(components).forEach((type) => {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  let actualSummary = "";
  let actualTables = "";
  summary += ` - [${capitalizedType}](#${type})\n`;
  tables += `\n\n<br>\n\n## ${capitalizedType}\n`;

  components[type].list.forEach((component) => {
    actualTables += parseVars(component, type).table;
    actualTables += "\n---\n";
    actualSummary += `   - [${component}](#${component.toLowerCase()})\n`;
  });
  actualTables += "\n\n<br>\n\n";
  tables += actualTables;
  summary += actualSummary + "\n\n<br>\n\n";
  components[type].tables = actualTables;
  components[type].summary = actualSummary;
  fs.writeFileSync(
    process.env["OUTPUT_FILE_PATH"] + type + "-css-vars.md",
    "# MoBrix-ui " +
      capitalizedType +
      " components\n\n## Summary\n\n" +
      actualSummary +
      actualTables
  );
});

fs.appendFileSync(
  process.env["OUTPUT_FILE_PATH"] + "full-css-vars.md",
  summary + tables,
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
