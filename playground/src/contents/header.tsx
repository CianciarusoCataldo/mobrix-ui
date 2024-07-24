import { useDispatch, useSelector } from "react-redux";

import {
  ArrowIcon,
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
} from "mobrix-engine-plugins";

import { useTranslation } from "react-i18next";
import { getAppName } from "mobrix-engine-tools";

import {
  Container,
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
    <Container className="pb-3" dark={dark} shadow={true}>
      <div className="flex flex-col pb-4" key="header_content">
        <div className="flex" style={{ justifyContent: "flex-end" }}>
          <div className="flex flex-row">
            <div className="flex flex-row pr-4">
              <Link
                dark={dark}
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
              hover={false}
              onChange={() => {
                dispatch(setDarkMode(!dark));
              }}
              className="mx-1"
            />
          </div>
        </div>
        <div className="flex flex-row p-2">
          <div className="mr-2 my-auto"> {LogoIcon}</div>
          <div className="flex flex-col my-auto">
            <Link
              a11y
              dark={dark}
              newTab
              to="https://github.com/CianciarusoCataldo/mobrix-ui"
            >
              <p className="break-words text-4xl">{APP_NAME}</p>
            </Link>
          </div>
          <IconButton
            hover
            aria-label="back button"
            onClick={() => {
              dispatch(goTo(HOME));
            }}
            a11y={false}
            className="my-auto overflow-auto ml-1"
            features={{ noShFc: true }}
            hide={hideHomeButton}
          >
            <ArrowIcon className="arrow" />
          </IconButton>
        </div>
      </div>
    </Container>
  );
};

export default HeaderContent;
