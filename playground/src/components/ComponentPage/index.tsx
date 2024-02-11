import { TFunction, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useCommonTranslation } from "hooks/localization";

import { BuilderComponent, Table } from "mobrix-ui-preview";
import AppLabel from "../AppLabel";
import AppPage from "../AppPage";
import { getRoutes } from "mobrix-engine-plugin-router";

export const ComponentPage = ({
  children,
  name: componentName,
  render,
  props,
  translations,
}: {
  children?: BuilderComponent | BuilderComponent[];
  render?: (
    t: TFunction,
    label?: string
  ) => BuilderComponent | BuilderComponent[];
  name: string;
  props?: string[][];
  translations?: boolean;
}) => {
  const t = useCommonTranslation();
  const { t: tComponent } = useTranslation(
    translations ? componentName.toLowerCase() : "common"
  );
  const headerLabel = t("component", { componentName });
  const PATHS: Record<string, any> = useSelector(getRoutes);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{headerLabel}</AppLabel>
      <div className="flex flex-col p-3 items-center">
        <iframe
          className="w-full h-[30rem]"
          title={`${componentName} page`}
          src={`https://cianciarusocataldo.github.io/${PATHS[
            componentName
          ].replace("/mobrix-ui", "/mobrix-ui/docs")}`}
        />
        {children}
        {render && render(tComponent, headerLabel)}
        <a
          target="_blank"
          href="https://cianciarusocataldo.github.io/demo-ui"
          rel="noreferrer"
        >
          <img
            alt=""
            className="mt-0"
            src="https://img.shields.io/badge/powered%20by-demo--ui-orange"
            height="25"
          />
        </a>

        {props && <Table headers rows={props} />}
      </div>
    </AppPage>
  );
};
