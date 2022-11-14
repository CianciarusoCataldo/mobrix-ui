import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
  ComponentWithIcon,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Card component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CardProps = CommonProps &
  ComponentWithChildren &
  ComponentWithIcon & {
    /** Card header content */
    header?: BuilderComponent;

    /** Card body content */
    body?: BuilderComponent;

    /** Card footer content */
    footer?: BuilderComponent;
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
