import { CSSProperties } from "react";

export type MobBrixAnimation = "fadeIn" | "fadeOut" | "slideIn" | "slideOut";

/**
 * Props shared between all {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} components
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=components-building-process
 * */
export interface CommonProps {
  /** React key, the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter} */
  key?: string;

  /** custom className applied on main container */
  className?: string;

  /** Enable/disable dark mode (default `false`) */
  dark?: boolean;

  /** Hide/show component (default `false`) */
  hide?: boolean;

  /** {@link https://www.w3schools.com/html/html_id.asp id parameter} (for styling/testing purpose, to easily find the component into the DOM) */
  id?: string;

  /** Enable/disable shadow behind component (default `false`) */
  shadow?: boolean;

  /** Css inline properties applied on main container */
  style?: CSSProperties;

  /** If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons) (default `false`) */
  unstyled?: boolean;

  /** Enable/disable component animations (default `false`) */
  animated?: boolean;

  /** If true, disable component background */
  noBackground?: boolean;

  /** If `true`, disable component hover standard styles (default `true`, but it is automatically disabled when `unstyled` parameter is `true` ) */
  noHover?: boolean;

  /** If true, disable the component. The effect may vary depending on the component type */
  disabled?: boolean;

  additionalProps?: Record<string, any>;

  /** If `true`, the component is selectable by navigating with tab key (default `true`) */
  a11y?: boolean;

  /** if the `a11y` parameter is `true`, override standard focus color style with/without dark mode (normally, the color changes accordingly to the `dark` parameter) */
  a11yDark?: boolean;

  /** if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label} */
  a11yLabel?: string;

  /** callback called when component is focused */
  onFocus?: () => void;

  /** callback called when component focus is lost */
  onFocusLost?: () => void;

  /** callback called when a key is pressed when inside the component */
  onKeyDown?: (keyEvent: any) => void;
}

/**
 * A MoBrix-ui component driven by an input value
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
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
 * @copyright 2023 Cataldo Cianciaruso
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
 * @copyright 2023 Cataldo Cianciaruso
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
 * @copyright 2023 Cataldo Cianciaruso
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
 * @copyright 2023 Cataldo Cianciaruso
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
 * @copyright 2023 Cataldo Cianciaruso
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
 * @copyright 2023 Cataldo Cianciaruso
 */
export interface ComponentWithChildren<
  T = JSX.Element | JSX.Element[] | undefined,
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
 * @copyright 2023 Cataldo Cianciaruso
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
 * @copyright 2023 Cataldo Cianciaruso
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
  | "span";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} components builder props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type BuilderProps<T = BuilderComponent | BuilderComponent[]> = {
  /** Component name, required */
  name: string;

  /** Component to render */
  Component?: T;

  /** Shared {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/?id=ui-properties MoBrix-ui props} */
  commonProps?: CommonProps;

  /** Additional props applied on main container (default `{}`) */
  additionalProps?: Record<string, any>;

  /** Component wrapper (default `div`) */
  wrapper?: Wrappers;
};

/**
 * A standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type MoBrixUiComponent<T = any, K = JSX.Element> = (
  props: MobrixUiProps<T>
) => K;

/**
 * Standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type MobrixUiProps<T = any> = T & CommonProps;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} reactive component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type MobrixUiReactiveComponentProps<T = any, K = any> = {
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
 * @copyright 2023 Cataldo Cianciaruso
 */
export type MobrixUiReactiveComponentBuilder<
  T = any,
  K = any,
> = MoBrixUiComponent<
  MobrixUiReactiveComponentProps<T, K>,
  Omit<BuilderProps, "name">
>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} reactive component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type MobrixUiReactiveComponent<
  T = any,
  K = any,
  ReturnType = BuilderComponent | BuilderComponent[],
> = MoBrixUiComponent<MobrixUiReactiveComponentProps<T, K>, ReturnType>;

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
