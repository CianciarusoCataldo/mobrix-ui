import {
  BuilderComponent,
  ComponentWithChildren,
  MbxUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Card component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type CardProps = ComponentWithChildren<BuilderComponent> & {
  /** Card header content */
  header?: BuilderComponent | BuilderComponent[];

  /** Custom classname applied on the Card header */
  headerClassName?: string;

  /** Custom props applied on the Card header */
  headerProps?: Record<string, any>;

  /** Card body content */
  body?: BuilderComponent;

  /** Custom props applied on the Card body */
  bodyProps?: Record<string, any>;

  /** Custom classname applied on the Card body */
  bodyClassName?: string;

  /** Card footer content */
  footer?: BuilderComponent;

  /** Custom classname applied on the Card footer */
  footerClassName?: string;

  /** Custom props applied on the Card footer */
  footerProps?: Record<string, any>;

  /** If true, hide the dividers between every Card part (header, body and footer) */
  noDividers?: boolean;

  /** If `true`, hide the divider below the Card header */
  noTopDivider?: boolean;

  /** If `true`, hide the divider above the Card footer */
  noBottomDivider?: boolean;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Card component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type CardComponent = MbxUiComponent<CardProps>;
