import { useSelector } from "react-redux";

import { useHomePageTranslation } from "hooks/localization";

import { closeDrawer, getRoutes, goTo } from "mobrix-engine-plugins";

import {
  Card,
  CodeBox,
  Link,
  List,
  SupportedEnvironment,
} from "mobrix-ui-preview";
import { useDispatch } from "react-redux";
import AppLabel from "components/AppLabel";
import AppPage from "components/AppPage";

const HomePage = () => {
  const t = useHomePageTranslation();
  const dispatch = useDispatch();
  const PATHS: Record<string, any> = useSelector(getRoutes);

  const PARSERS = {
    description: (localizedString: string) => {
      const splittedString = localizedString.split("#LINK");
      return (
        <div className="">
          {splittedString.map((part, index) => {
            if (index % 2 !== 0) {
              const splittedPart = part.split("#");

              return (
                <Link to={splittedPart[0]} key={`parsed_link_${index}`} newTab>
                  {splittedPart[1]}
                </Link>
              );
            } else {
              return <span key={`parsed_link_${index}`}>{part}</span>;
            }
          })}
        </div>
      );
    },
    installation: (localizedString: string) => {
      const splittedString = localizedString.split("#CODE");
      return (
        <div>
          {splittedString.map((part, index) => {
            if (index % 2 !== 0) {
              const splittedPart = part.split("#LANG");

              return (
                <div className="my-2" key={`parsed_code_${index}`}>
                  <CodeBox
                    environment={
                      splittedPart.length > 1
                        ? (splittedPart[1] as SupportedEnvironment)
                        : undefined
                    }
                    value={
                      splittedPart.length > 1
                        ? splittedPart[2]
                        : splittedPart[0]
                    }
                    dark
                  />
                </div>
              );
            } else {
              return (
                <div className="my-2" key={`parsed_code_${index}`}>
                  {part}
                </div>
              );
            }
          })}
        </div>
      );
    },
  } as const;

  const description = PARSERS.description(t("description"));
  const installationGuide = PARSERS.installation(
    t("installation", { context: "body" })
  );

  const componentsList = Object.keys(PATHS)
    .filter((path) => path !== "Home")
    .sort();

  return (
    <AppPage>
      <AppLabel key="homepage_header" className="text-4xl mt-12 mb-5 ml-3">
        {t("title")}
      </AppLabel>
      <div
        key="homepage_container"
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row"
      >
        <div className="w-full mr-4 md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 3xl:w-2/3 4xl:w-2/3">
          <Card shadow body={description} />
          <AppLabel className="text-2xl mt-10">
            {t("installation", { context: "title" })}
          </AppLabel>
          <Card shadow body={installationGuide} />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 3xl:w-1/3 4xl:w-1/3">
          <Card
            shadow
            body={
              <>
                {t("componentsList_header")}
                <List
                  elements={componentsList}
                  onClick={(index) => {
                    dispatch(goTo(PATHS[componentsList[index]]));
                    dispatch(closeDrawer());
                  }}
                ></List></>
            }
          />
        </div>
      </div>
    </AppPage>
  );
};

export default HomePage;
