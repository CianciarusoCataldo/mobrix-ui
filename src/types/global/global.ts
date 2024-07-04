import { CSSProperties } from "react";

export type MobBrixAnimation = "fadeIn" | "fadeOut" | "slideIn" | "slideOut";

export type MbxAttributes = {
  /** Enable/disable dark mode (default `false`) */
  dark?: boolean;

  /** Enable/disable shadow behind component (default `true`) */
  shadow?: boolean;

  /** Enable/disable component animations (default `true`) */
  animated?: boolean;

  /** Hide/show component (default `false`) */
  hide?: boolean;

  /** If false, disable component background */
  background?: boolean;

  /** If `false`, disable component hover standard styles (default `true`) */
  hover?: boolean;

  /** If true, disable the component. The effect may vary depending on the component type */
  disabled?: boolean;

  /** If `true`, the component is selectable by navigating with tab key (default `true`) */
  a11y?: boolean;
};

/**
 * Props shared between all {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} components
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=components-building-process
 * */
export type CommonProps = MbxAttributes & {
  /** React key, the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter} */
  key?: string;

  /** custom className applied on main container */
  className?: string;

  /** {@link https://www.w3schools.com/html/html_id.asp id parameter} (for styling/testing purpose, to easily find the component into the DOM) */
  id?: string;

  /** Css inline properties applied on main container */
  style?: CSSProperties;

  /** If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons) (default `false`) */
  unstyled?: boolean;

  /** If `animated`=`true`, this parameter specifies which animation is used when component is rendered */
  animation?:
    | "fade-in"
    | "slide-in-left"
    | "slide-in-right"
    | "slide-in-top"
    | "shake";

  /** Custom additional properties, applied to the component */
  additionalProps?: Record<string, any>;

  /** if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label} ARIA parameter */
  a11yLabel?: string;

  /**   /** if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex tabindex} parameter **/
  tabIndex?: number | string;

  /** callback called when component is focused */
  onFocus?: () => void;

  /** callback called when component focus is lost */
  onFocusLost?: () => void;

  /** callback called when a key is pressed when inside the component */
  onKeyDown?: (keyEvent: any) => void;

  busy?: boolean;
};

/**
 * A MoBrix-ui component driven by an input value
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface ComponentWithValue<T = any> {
  /** Actual component value */
  value?: T;
}

/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component with a custom icon
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface ComponentWithIcon<T = JSX.Element> {
  /** Icon showed inside the component */
  icon?: T;
}

/**
 * A generic {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} input component, to handle various input content type (like strings or numbers)
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface GenericInputComponent {
  /** if true, the input content won't be editable */
  readOnly?: boolean;

  /** A label showed when no input is given */
  placeholder?: string;
}

export interface AutoResizableComponent {
  autoresizable?: boolean;
}

/**
 * A numeric {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} input component, to handle numbers
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type NumericInputComponent = GenericInputComponent & {
  min?: number;
  max?: number;
};

/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component that provide a callback to handle its content changes
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 *
 */
export interface ComponentWithCallback<T = string> {
  /** Callback triggered when input content changes */
  onChange?: (newValue: T) => void;
}

/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component that provide a callback to handle its click event
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 *
 */
export interface ClickableComponent<T = () => void> {
  /** Callback triggered when component is clicked */
  onClick?: T;
}

/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component with children element
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface ComponentWithChildren<
  T = JSX.Element | JSX.Element[] | undefined
> {
  /** Component children */
  children?: T;
}

/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component with onClose callback
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface ClosableComponent {
  /** Callback called when component is closed */
  onClose?: () => void;
}

/**
 *  Allowed {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component type for component builder
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type BuilderComponent = JSX.Element | string;

/** Supported components wrappers */
export type Wrappers =
  | "div"
  | "a"
  | "header"
  | "button"
  | "footer"
  | "p"
  | "input"
  | "select"
  | "table"
  | "textarea"
  | "span"
  | "img";

export interface Features {
  /** If `true`, reduce component opacity when component is hovered (and `hover` = `true`) */
  opacityOnHover?: boolean;

  /** If `true`, reduce component opacity when component is clicked */
  opacityOnActive?: boolean;

  /** If `true`, when focused, the component text-color will change instead of the box shadow (that will be transparent) */
  textcolorOnFocus?: boolean;

  noShadowOnFocus?: boolean;

  fillOnFocus?: boolean;
}

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} components builder props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type BuilderProps<T = BuilderComponent | BuilderComponent[]> = {
  /** Component name, required */
  name: string;

  /** Component to render */
  Component?: T;

  /** Shared {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/?id=ui-properties MoBrix-ui props} */
  commonProps?: CommonProps;

  /** Component wrapper (default `div`) */
  wrapper?: Wrappers;

  features?: Features;

  sharedCssClasses?: string;
};

/**
 * A standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiComponent<T = any, K = JSX.Element> = (
  props: MbxUiProps<T>
) => K;

/**
 * Standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiProps<T = any> = T & CommonProps;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} reactive component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiReactiveComponentProps<T = any, K = any> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
} & K;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} reactive component builder
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiReactiveComponentBuilder<T = any, K = any> = MbxUiComponent<
  MbxUiReactiveComponentProps<T, K>,
  Omit<BuilderProps, "name">
>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} reactive component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiReactiveComponent<
  T = any,
  K = any,
  ReturnType = BuilderComponent | BuilderComponent[]
> = MbxUiComponent<MbxUiReactiveComponentProps<T, K>, ReturnType>;

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type BuilderPropsReactive<T = BuilderComponent | BuilderComponent[]> =
  BuilderProps<
    (props: {
      value: T;
      setValue: React.Dispatch<React.SetStateAction<T>>;
    }) => BuilderProps["Component"]
  > & {
    inputValue?: T;
    defaultValue: T;
    render?: (
      value: T,
      setValue: React.Dispatch<React.SetStateAction<T>>
    ) => BuilderProps["Component"];
    props?: (
      value: T,
      setValue: React.Dispatch<React.SetStateAction<T>>
    ) => Omit<BuilderProps, "name">;
  };
