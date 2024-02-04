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

export const BurgerIcon = (
  <svg
    viewBox="0 0 50 50"
    className="fill-[white] w-12 h-12 hover:fill-[#aaaaaa] active:fill-[#5f5f5f] short:w-8 short:h-8 xsm:w-16 xsm:h-16"
  >
    <defs>
      <clipPath id="prefix__b">
        <path d="M0 0h50v50H0z" />
      </clipPath>
      <clipPath id="prefix__c">
        <path d="M0 0h50v50H0z" />
      </clipPath>
      <clipPath id="prefix__d">
        <path d="M0 0h50v50H0z" />
      </clipPath>
      <mask id="prefix__g">
        <g filter="url(#prefix__a)">
          <path fillOpacity={0.302} d="M0 0h50v50H0z" />
        </g>
      </mask>
      <mask id="prefix__i">
        <g filter="url(#prefix__a)">
          <path fillOpacity={0.302} d="M0 0h50v50H0z" />
        </g>
      </mask>
      <mask id="prefix__k">
        <g filter="url(#prefix__a)">
          <path fillOpacity={0.302} d="M0 0h50v50H0z" />
        </g>
      </mask>
      <g id="prefix__h" clipPath="url(#prefix__b)">
        <path d="M14.063 37.5v-4.71H37.5v4.71zm0 0" />
      </g>
      <g id="prefix__j" clipPath="url(#prefix__c)">
        <path d="M14.063 28.137v-4.711H37.5v4.71zm0 0" />
      </g>
      <g id="prefix__l" clipPath="url(#prefix__d)">
        <path d="M14.063 18.773v-4.71H37.5v4.71zm0 0" />
      </g>
      <linearGradient
        id="prefix__e"
        x1={0}
        x2={512}
        y1={256}
        y2={256}
        gradientTransform="scale(.09766)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f67950" />
        <stop offset={1} stopColor="#f15a29" />
      </linearGradient>
      <linearGradient
        id="prefix__f"
        x1={42.667}
        x2={469.333}
        y1={256.001}
        y2={256.001}
        gradientTransform="scale(.09766)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f15a29" />
        <stop offset={1} stopColor="#f67950" />
      </linearGradient>
      <filter
        id="prefix__a"
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox"
      >
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
      </filter>
    </defs>
    <path
      fill="url(#prefix__e)"
      d="M50 25c0 13.809-11.191 25-25 25S0 38.809 0 25 11.191 0 25 0s25 11.191 25 25zm0 0"
    />
    <path
      fill="url(#prefix__f)"
      d="M25 45.832C13.512 45.832 4.168 36.488 4.168 25S13.512 4.168 25 4.168 45.832 13.512 45.832 25 36.488 45.832 25 45.832zm0 0"
    />
    <use mask="url(#prefix__g)" xlinkHref="#prefix__h" />
    <use mask="url(#prefix__i)" xlinkHref="#prefix__j" />
    <use mask="url(#prefix__k)" xlinkHref="#prefix__l" />
    <path
      fill="inherit"
      d="M13.281 36.719v-4.711H36.72v4.71zm0-9.364v-4.71H36.72v4.71zm0-9.363v-4.71H36.72v4.71zm0 0"
    />
  </svg>
);

export const DarkModeIcon = <img alt="" src={DarkMode} width={30} />;

export const LightModeIcon = <img alt="" src={LightMode} width={30} />;

export const LANGUAGES_ICONS: Record<string, JSX.Element> = {
  it: <img className="mr-2" alt="" width={15} height={15} src={IT_FLAG} />,
  de: <img className="mr-2" alt="" width={15} height={15} src={DE_FLAG} />,
  fr: <img className="mr-2" alt="" width={15} height={15} src={FR_FLAG} />,
  es: <img className="mr-2" alt="" width={15} height={15} src={ES_FLAG} />,
  en: <img className="mr-2" alt="" width={15} height={15} src={EN_FLAG} />,
};
