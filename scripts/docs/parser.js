const fs = require("fs");

const DEFAULT_FILENAME = "css-vars.md";
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

const normalizeVar = (cssvar) => cssvar.replace("--", "");

const DEFAULT_EMPTY_LABEL = `<div style="text-align:center;width:100%;">/</div>`;

const getFilename = (component) =>
  component.toLowerCase() + "-" + DEFAULT_FILENAME;

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
      const fallback = result[cssvar].fallback;
      const defaultValue = result[cssvar]?.default || DEFAULT_EMPTY_LABEL;

      const values = {
        full: {
          prop: `[${cssvar}](${getFilename(component)}#${normalizeVar(cssvar)})`,
          fallback: fallback
            ? `[${fallback}](${getFilename(component)}#${normalizeVar(fallback)})`
            : DEFAULT_EMPTY_LABEL,
        },
        single: {
          prop: `[${cssvar}](#${normalizeVar(cssvar)})`,
          fallback: fallback
            ? `[${fallback}](#${normalizeVar(fallback)})`
            : DEFAULT_EMPTY_LABEL,
        },
      };

      res += `| ${values.full.prop} | ${values.full.fallback} | ${defaultValue} |\n`;
      singlePageTable += `| ${values.single.prop} | ${values.single.fallback} | ${defaultValue} |\n`;
      list += "\n\n<br>\n\n## " + cssvar + "\n\n<br>";
    });
  } catch (e) {
    console.log(e);
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
