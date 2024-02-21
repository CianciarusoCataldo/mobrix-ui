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
  ExpandableContainer,
  Dropdown,
  Link,
  Toggle,
  IconButton,
} from "mobrix-ui-preview";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const APP_NAME: string = useSelector(getAppName);
  const hideHomeButton: boolean = useSelector(isHomePage);
  const HOME = useSelector(getHomePage);
  const dark: boolean = useSelector(isInDarkMode);

  const language = useSelector(getLanguage);
  const LANGUAGES = Object.keys(LANGUAGES_ICONS);

  const t = useTranslation("common").t;

  return (
    <ExpandableContainer
      className="pb-3"
      dark={dark}
      expanded={
        <div className="flex flex-row mt-6" key="expanded_header">
          <IconButton
            aria-label="drawer button"
            onClick={() => {
              dispatch(openDrawer());
            }}
            dark={dark}
            a11y
            className="rounded-full my-auto"
          >
            {BurgerIcon}
          </IconButton>
          <IconButton
            aria-label="back button"
            onClick={() => {
              dispatch(goTo(HOME));
            }}
            unstyled
            a11y={false}
            className="my-auto overflow-auto ml-1"
            hide={hideHomeButton}
          >
            <svg
              tabIndex={0}
              className={classNames(
                {
                  "fill-[white]": dark,
                  "fill-[black]": !dark,
                },
                "w-8 h-8 hover:fill-[#ff9f51] active:fill-[#fb7a10] focus-visible:fill-[#fb7a10] xsm:w-12 xsm:h-12"
              )}
              viewBox="0 0 11 18"
            >
              <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
              <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
            </svg>
          </IconButton>
          <div className="m-auto flex flex-row p-2">
            <div className="mr-2 my-auto"> {LogoIcon}</div>
            <div className="flex flex-col my-auto">
              <Link
                a11yDark={true}
                a11y
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
                dark={dark}
                unstyled
                to="https://cianciarusocataldo.github.io/mobrix-ui/docs"
                className="m-auto"
                newTab
              >
                {DocsIcon}
              </Link>
              <Link
                dark={dark}
                className="m-auto hidden md:block"
                to="https://cianciarusocataldo.github.io/mobrix-ui/docs"
                newTab
              >
                {t("docs")}
              </Link>
            </div>
            <Dropdown
              a11yDark={dark}
              a11y
              className="p-0"
              dark={false}
              value={LANGUAGES.findIndex((lang) => lang === language)}
              shadow
              onChange={(lang: number) => {
                dispatch(changeLanguage(LANGUAGES[lang]));
              }}
              elements={Object.keys(LANGUAGES_ICONS).map((lang) => (
                <div className="flex flex-row">
                  {LANGUAGES_ICONS[lang]}
                  {` ${lang}`}
                </div>
              ))}
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
