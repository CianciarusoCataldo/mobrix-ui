import { CSSProperties } from "react";

/**
 * Props shared between all {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} components
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-components-properties
 * */
export interface CommonProps {
  key?: string;

  /** custom className applied on main container */
  className?: string;

  /** Enable/disable dark mode */
  dark?: boolean;

  /** Hide/show component */
  hide?: boolean;

  /** `data-id` parameter (for testing purpose, to easily find the component into the DOM) */
  id?: string;

  /** Enable/disable shadow behind component */
  shadow?: boolean;

  /** Css inline properties applied on main container */
  style?: CSSProperties;

  /** If true, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons) */
  unstyled?: boolean;
}

export interface ComponentWithValue<T = any> {
  /** Actual component value */
  value?: T;
}

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
 * @copyright 2022 Cataldo Cianciaruso
 */
export interface GenericInputComponent<T = string> {
  /** if true, the input content won't be editable */
  readOnly?: boolean;

  /** A label showed when no input is given */
  placeholder?: T;
}

export type NumericInputContent = GenericInputComponent<number> & {
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
 * @copyright 2022 Cataldo Cianciaruso
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
 * @copyright 2022 Cataldo Cianciaruso
 *
 */
export interface ClickableComponent {
  /** Callback triggered when component is clicked */
  onClick?: () => void;
}

/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component with children element
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export interface ComponentWithChildren<
  T = JSX.Element | JSX.Element[] | undefined
> {
  /** Component children */
  children?: T;
}

/**
 *  Allowed {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component type for component builder
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
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
  | "input";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} components builder props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type BuilderProps<T = BuilderComponent | BuilderComponent[]> = {
  /** Component name (its DOM id) */
  name: string;

  /** Component to render */
  Component?: T;

  /** Shared props */
  commonProps?: CommonProps;

  /** Additional props applied on main container */
  additionalProps?: any;

  /** Component wrapper (like `div` or `button`, for example) */
  wrapper?: Wrappers;

  animated?: boolean;
};

/**
 * A standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type MoBrixUiComponent<T = any, K = JSX.Element> = (props: T) => K;

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
