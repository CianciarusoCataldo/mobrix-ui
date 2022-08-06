import { useTranslation } from "react-i18next";

/** Return `common` namespace translation hook */
export const useCommonTranslation = () => {
  const { t } = useTranslation("common");
  return t;
};

/** Return `overview` namespace translation hook (used into `HOME_PAGE`) */
export const useHomePageTranslation = () => {
  const { t } = useTranslation("overview");
  return t;
};
