import {
  epicsPlugin,
  localizationPlugin,
  modalPlugin,
  routerPlugin,
  themerPlugin,
  uiPlugin,
  urlCheckerPlugin,
} from "mobrix-engine-plugins";

const engineConfig = {
  appName: "MoBrix-ui",
  plugins: [
    localizationPlugin,
    epicsPlugin,
    routerPlugin,
    modalPlugin,
    themerPlugin,
    uiPlugin,
    urlCheckerPlugin,
  ],
  ui: {
    darkMode: true,
    drawer: true,
  },
  router: {
    basename: "/mobrix-ui",
    homePage: "Home",
    routes: {
      Home: "/",
      Button: "/components/atoms/Button",
      Calendar: "/components/organisms/Card",
      Card: "/components/molecules/Card",
      Carousel: "/components/molecules/Carousel",
      CheckBox: "/components/atoms/CheckBox",
      CodeBox: "/components/atoms/CodeBox",
      Container: "/components/molecules/Container",
      Counter: "/components/molecules/Counter",
      DatePicker: "/components/organisms/DatePicker",
      Divider: "/components/atoms/Divider",
      Drawer: "/components/molecules/Drawer",
      Dropdown: "/components/molecules/Dropdown",
      ExpandableContainer: "/components/molecules/ExpandableContainer",
      FacebookButtons: "/components/atoms/FacebookButtons",
      Form: "/components/molecules/Form",
      Input: "/components/atoms/Input",
      Label: "/components/atoms/Label",
      Link: "/components/atoms/Link",
      List: "/components/atoms/List",
      Modal: "/components/atoms/Modal",
      Rater: "/components/molecules/Rater",
      Review: "/components/molecules/Review",
      Spinner: "/components/molecules/Spinner",
      Table: "/components/molecules/Table",
      Toggle: "/components/atoms/Toggle",
    },
  },
  localization: {
    fallbackLanguage: "en",
    supportedLanguages: ["en", "it", "es", "fr", "de"],
    namespaces: ["list", "overview", "common", "drawer", "codebox"],
    defaultNamespace: "common",
    loadPath: "/mobrix-ui/locales/{{lng}}/{{ns}}.json",
    titlesNamespace: "titles",
  },
  theme: {
    default: {
      bodyColor: "linear-gradient(to right, #f0f3fa, #f4f6fa)",
      uiColor:
        "linear-gradient(317deg, rgb(251, 251, 251) 0%, rgb(238, 238, 238) 71%, rgb(246, 246, 246) 100%);",
    },
    dark: {
      uiColor:
        "linear-gradient(317deg, rgba(2, 0, 36, 1) 0%, rgb(22, 17, 51) 71%, rgba(27, 17, 55, 1) 100%);",
      bodyColor: "linear-gradient(to right, #3c4a5f, #273141)",
    },
  },
};

export default engineConfig;
