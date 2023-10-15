import {
  BuilderComponent,
  ComponentWithChildren,
  ComponentWithIcon,
  MoBrixUiComponent,
} from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Card component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type CardProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  ComponentWithIcon & {
    /** Card header content */
    header?: BuilderComponent;

    /** Card body content */
    body?: BuilderComponent;

    /** Card footer content */
    footer?: BuilderComponent;

    /** If true, hide the dividers between every Card part (header, body and footer) */
    noDividers?: boolean;

    /** If `true`, hide the divider below the Card header */
    noHeaderDivider?: boolean;

    /** If `true`, hide the divider above the Card footer */
    noFooterDivider?: boolean;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Card component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type CardComponent = MoBrixUiComponent<CardProps>;
