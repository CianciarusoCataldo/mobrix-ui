import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  closeDrawer,
  getLocalizationConfig,
  getRoutes,
  goTo,
  isDrawerOpen,
  isInDarkMode,
} from "mobrix-engine-plugins";

import { Divider, Drawer, IconButton } from "mobrix-ui-preview";

import { MoBrixEngineStore } from "mobrix-engine-types";

export const DrawerComponent = ({
  store,
}: {
  store?: MoBrixEngineStore;
  creatorConfig?: any;
}) => {
  const dark: boolean = useSelector(isInDarkMode);
  const drawerVisible = useSelector(isDrawerOpen);

  return (
    <Drawer
      hide={!drawerVisible}
      onClose={() => store?.dispatch(closeDrawer())}
      dark={dark}
    >
      <DrawerContent store={store} />
    </Drawer>
  );
};

export const DrawerContent = ({ store }: { store?: MoBrixEngineStore }) => {
  const PATHS: Record<string, any> = useSelector(getRoutes);
  const i18n = useSelector(getLocalizationConfig);
  const dark: boolean = useSelector(isInDarkMode);

  const { t } = useTranslation(i18n.titlesNamespace || i18n.defaultNamespace);

  return (
    <div className="p-4 overflow-auto">
      {Object.keys(PATHS).map((route, index) => {
        return (
          <div className="mt-1 mb-3" key={`drawer_app_element_${index}`}>
            <IconButton
              hover
              onClick={() => {
                store?.dispatch(goTo(PATHS[route]));
                store?.dispatch(closeDrawer());
              }}
              dark={dark}
            >
              {t(route)}
            </IconButton>
            <Divider dark={dark} />
          </div>
        );
      })}
    </div>
  );
};
