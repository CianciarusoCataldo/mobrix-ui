import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";

import {
  BurgerIcon,
  DarkModeIcon,
  DocsIcon,
  LANGUAGES_ICONS,
  LightModeIcon,
  LogoIcon,
} from "assets/images";

import {
  changeLanguage,
  getHomePage,
  getLanguage,
  isHomePage,
  isInDarkMode,
  goTo,
  setDarkMode,
  openDrawer,
} from "mobrix-engine-plugins";

import { useTranslation } from "react-i18next";
import { getAppName } from "mobrix-engine-tools";

import {
  Button,
  ExpandableContainer,
  Dropdown,
  Link,
  Toggle,
} from "mobrix-ui-preview";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const APP_NAME = useSelector(getAppName);
  const hideHomeButton = useSelector(isHomePage);
  const HOME = useSelector(getHomePage);
  const dark = useSelector(isInDarkMode);

  const language = useSelector(getLanguage);
  const LANGUAGES = Object.keys(LANGUAGES_ICONS);

  const t = useTranslation("common").t;

  return (
    <ExpandableContainer
      className="pb-3"
      dark={dark}
      expanded={
        <div className="flex flex-row mt-6" key="expanded_header">
          <div className="my-auto">
            <Button
              aria-label="drawer button"
              onClick={() => {
                dispatch(openDrawer());
              }}
              unstyled
              className="outline-none"
            >
              <div className="p-1 sm:p-2 md:p-2">{BurgerIcon}</div>
            </Button>
          </div>
          <div className="my-auto">
            <Button
              aria-label="back button"
              onClick={() => {
                dispatch(goTo(HOME));
              }}
              unstyled
              className="overflow-auto ml-1 outline-none"
              hide={hideHomeButton}
            >
              <svg
                className={classNames(
                  {
                    "fill-[white]": dark,
                    "fill-[black]": !dark,
                  },
                  "w-8 h-8 hover:fill-[#ff9f51] active:fill-[#fb7a10] xsm:w-12 xsm:h-12"
                )}
                viewBox="0 0 11 18"
              >
                <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
                <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
              </svg>
            </Button>
          </div>
          <div className="m-auto flex flex-row p-2">
            <div className="mr-2 my-auto"> {LogoIcon}</div>
            <div className="flex flex-col my-auto">
              <Link
                dark={dark}
                newTab
                to="https://github.com/CianciarusoCataldo/mobrix-ui"
              >
                <p className="break-words text-lg sm:text-xl md:text-2xl lg:text-4xl">
                  {APP_NAME}
                </p>
              </Link>
            </div>
          </div>
        </div>
      }
    >
      <div className="flex flex-col pb-4" key="header_content">
        <div className="flex" style={{ justifyContent: "flex-end" }}>
          <div className="flex flex-row">
            <div className="flex flex-row pr-4">
              <Link
                to="https://cianciarusocataldo.github.io/mobrix-ui/docs"
                className="m-auto"
                newTab
              >
                {DocsIcon}
              </Link>
              <div className="m-auto hidden sm:block">
                <Link
                  dark={dark}
                  to="https://cianciarusocataldo.github.io/mobrix-ui/docs"
                  newTab
                >
                  {t("docs")}
                </Link>
              </div>
            </div>
            <Dropdown
              className="p-0"
              dark={false}
              value={LANGUAGES.findIndex((lang) => lang === language)}
              shadow
              onChange={(lang: number) => {
                dispatch(changeLanguage(LANGUAGES[lang]));
              }}
              content={Object.keys(LANGUAGES_ICONS).map((lang) => ({
                name: lang,
                icon: LANGUAGES_ICONS[lang],
              }))}
            />
            <Toggle
              onIcon={LightModeIcon}
              offIcon={DarkModeIcon}
              shadow
              dark={dark}
              value={!dark}
              onChange={() => {
                dispatch(setDarkMode(!dark));
              }}
              className="mx-1"
            />
          </div>
        </div>
      </div>
    </ExpandableContainer>
  );
};

export default HeaderContent;
