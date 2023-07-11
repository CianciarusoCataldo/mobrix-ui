import {
  BuilderComponent,
  ComponentWithChildren,
  ComponentWithIcon,
  MoBrixUiComponent,
} from "../../global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Card component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CardProps = ComponentWithChildren<
  JSX.Element | JSX.Element[] | string
> &
  ComponentWithIcon & {
    onClose?: () => void;

    /** Card header content */
    header?: BuilderComponent;

    /** Card body content */
    body?: BuilderComponent;

    /** Card footer content */
    footer?: BuilderComponent;

    /** If true, the card can be dismissed by clicking the x icon and the card will disappear
     * (at least until the page is reloaded, use `hide` parameter for a fixed visibility) */
    dismissable?: boolean;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Card component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CardComponent = MoBrixUiComponent<CardProps>;
