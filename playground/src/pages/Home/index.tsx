import { useSelector } from "react-redux";

import { useHomePageTranslation } from "hooks/localization";

import { closeDrawer, getRoutes, goTo } from "modular-plugins";

import {
  Button,
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
  const PATHS = useSelector(getRoutes);

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
                    enhanced
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

  return (
    <AppPage>
      <AppLabel
        key="homepage_header"
        className="text-4xl mt-12 mb-5 ml-3"
        value={t("title")}
      />

      <div key="homepage_container" className="flex flex-col lg:flex-row">
        <div>
          <Card shadow body={description} />
          <Card
            shadow
            label={<AppLabel value={t("installation", { context: "title" })} />}
            body={installationGuide}
          />
        </div>
        <Card
          shadow
          header={t("componentsList_header")}
          body={
            <List
              elements={Object.keys(PATHS)
                .filter((path) => path !== "Home")
                .sort()
                .map((routeKey, index) => {
                  return (
                    <div key={`link_${index}`}>
                      <Button
                        unstyled
                        onClick={() => {
                          dispatch(goTo(PATHS[routeKey]));
                          dispatch(closeDrawer());
                        }}
                        className="text-gray-700 hover:text-blue-700 py-1 text-lg"
                      >
                        {routeKey}
                      </Button>
                    </div>
                  );
                })}
            ></List>
          }
        />
      </div>
    </AppPage>
  );
};

export default HomePage;
