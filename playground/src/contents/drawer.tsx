import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  closeDrawer,
  getLocalizationConfig,
  getRoutes,
  goTo,
  isInDarkMode,
} from "mobrix-engine-plugins";

import { Button, Divider } from "mobrix-ui-preview";

export const DrawerContent = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getRoutes);
  const i18n = useSelector(getLocalizationConfig);
  const dark = useSelector(isInDarkMode);

  const { t } = useTranslation(i18n.titlesNamespace || i18n.defaultNamespace);

  return (
    <div>
      {Object.keys(PATHS).map((route, index) => {
        return (
          <div className="mt-1 mb-3" key={`drawer_app_element_${index}`}>
            <Button
              unstyled
              onClick={() => {
                dispatch(goTo(PATHS[route]));
                dispatch(closeDrawer());
              }}
              className={classNames(
                {
                  "text-white": dark,
                  "text-gray-600": !dark,
                },
                "hover:text-orange-500 text-xl"
              )}
            >
              {t(route)}
            </Button>
            <Divider dark={dark} />
          </div>
        );
      })}
    </div>
  );
};
