import Logo from "./icons/commons/logo.png";

import DarkMode from "./icons/commons/dark-mode.svg";
import LightMode from "./icons/commons/light-mode.svg";

import Docs from "./icons/commons/docs.svg";

import IT_FLAG from "./icons/langs/it.svg";
import FR_FLAG from "./icons/langs/fr.svg";
import EN_FLAG from "./icons/langs/en.svg";
import DE_FLAG from "./icons/langs/de.svg";
import ES_FLAG from "./icons/langs/es.svg";

export const DrawerLogoIcon = <img alt="" src={Logo} width={50} height={50} />;

export const LogoIcon = (
  <img
    className="w-12 h-12 short:w-8 short:h-8 xsm:w-16 xsm:h-16 3xl:w-20 3xl:h-20"
    alt=""
    src={Logo}
  />
);

export const DocsIcon = <img alt="" src={Docs} width={30} height={30} />;

export const DarkModeIcon = (
  <img data-mbx-scl="nosel" alt="" src={DarkMode} width={30} />
);

export const LightModeIcon = (
  <img data-mbx-scl="nosel" alt="" src={LightMode} width={30} />
);

export const LANGUAGES_ICONS: Record<string, JSX.Element> = {
  it: <img className="mr-2" alt="" width={15} height={15} src={IT_FLAG} />,
  de: <img className="mr-2" alt="" width={15} height={15} src={DE_FLAG} />,
  fr: <img className="mr-2" alt="" width={15} height={15} src={FR_FLAG} />,
  es: <img className="mr-2" alt="" width={15} height={15} src={ES_FLAG} />,
  en: <img className="mr-2" alt="" width={15} height={15} src={EN_FLAG} />,
};

export const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    tabIndex={0}
    className={`w-8 h-10 hover:fill-[#ff9f51] active:fill-[#fb7a10] focus-visible:fill-[#fb7a10] focus:outline-none ${className}`}
    viewBox="0 0 11 18"
  >
    <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
    <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
  </svg>
);
