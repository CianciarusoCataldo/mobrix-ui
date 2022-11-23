import React from "react";
import { mount, shallow } from "enzyme";
import PKG from "../../../package.json";

var fs = require("fs");
var path = require("path");

export const describeSection = (section: string, test?: () => void) => {
  describe(`\n\n** ${section} **\n`, test ? test : () => {});
};

export const describeComponent = (component: string, test?: () => void) => {
  describe(`\n\n     - ${component}\n`, test ? test : () => {});
};

export const describeTest = (component: string, testSuite: () => void) => {
  describe(`\n        - ${component}\n`, testSuite ? testSuite : () => {});
};

export const renderingTest = (
  TestComponent: (props: any) => JSX.Element,
  params?: Record<string, any>,
  mountComponent?: boolean
) => {
  const method = mountComponent ? mount : shallow;
  describeTest("rendering test", () => {
    test("no parameters", () => {
      const wrapper = method(<TestComponent />);
      expect(wrapper);
    });
    params &&
      test("with parameters", () => {
        const wrapper = method(
          <TestComponent
            animated
            hide
            dark
            unstyled
            shadow={false}
            id="test-id"
            className="test-className"
            {...params}
          />
        );
        expect(wrapper);
      });
  });
};

export const getFilesList = (dir: string, showOnlyDirs?: boolean) => {
  const testDir = path.resolve(__dirname, dir);
  let result = [];
  let openedDir = fs.opendirSync(testDir);

  let filesLeft = true;
  while (filesLeft) {
    let fileDirent = openedDir.readSync();
    if (fileDirent != null) {
      const isDir = fs
        .lstatSync(path.join(openedDir.path, fileDirent.name))
        .isDirectory();
      if (isDir && showOnlyDirs) {
        result.push({
          name: fileDirent.name.split(".")[0],
          path: path.join(openedDir.path, fileDirent.name),
        });
      } else if (!isDir) {
        result.push({
          name: fileDirent.name.split(".")[0],
          path: path.join(openedDir.path, fileDirent.name),
        });
      }
    } else filesLeft = false;
  }

  result = result.sort((elem1, elem2) => {
    if (elem1.name < elem2.name) return -1;
    if (elem1.name === elem2.name) return 0;
    return 1;
  });

  openedDir.close();
  return result;
};

export const executeTests = () => {
  const path = require("path");

  const TEST_SUITES_PATH = path.resolve(__dirname, "../../test-suites/");
  const dirs = getFilesList(TEST_SUITES_PATH, true);

  describe(`\n                       ## ${PKG.name} - v.${PKG.version} - Unit tests ##`, () => {
    dirs.forEach(({ name: category }) =>
      describeSection(
        category.charAt(0).toUpperCase() + category.slice(1),
        () => {
          const elements = getFilesList(path.join(TEST_SUITES_PATH, category));
          elements.map((element) => {
            describeComponent(element.name, () => {
              try {
                require(element.path);
              } catch (error) {
                console.log(error);
                console.log(`${element.path} not found`);
              }
            });
          });
        }
      )
    );
  });
};
