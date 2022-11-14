import {
  CommonProps,
  ComponentWithValue,
  MoBrixUiComponent,
} from "../../../utils/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Codebox supported environments
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type SupportedEnvironment =
  | "javascript"
  | "python"
  | "terminal"
  | "common";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Codebox partial code block
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export interface CodeBlock<T = string | null> {
  /** Highlight color */
  color: T;

  /** Code block */
  code: string;
}

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} CodeBox component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CodeBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CodeBoxProps = CommonProps &
  ComponentWithValue<string> & {
    /** Enable/disable advanced mode, to access extra features, like the integrated copy button and text highlight */
    enhanced?: boolean;

    /** Environment for text highlight feature, default to "terminal" (only enabled into enhanced mode) */
    environment?: SupportedEnvironment | undefined;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} CodeBox component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CodeBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CodeBoxComponent = MoBrixUiComponent<CodeBoxProps>;
