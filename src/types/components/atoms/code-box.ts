import { ComponentWithValue, MbxUiComponent } from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Codebox supported environments
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CodeBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type SupportedEnvironment =
  | "javascript"
  | "python"
  | "terminal"
  | "common";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Codebox partial code block
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CodeBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export interface CodeBlock {
  /** Highlight color */
  color: string | null;

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
 * @copyright 2023 Cataldo Cianciaruso
 */
export type CodeBoxProps = ComponentWithValue<string> & {
  /** Enable/disable text highlight, based on selected environment */
  highlight?: boolean;

  /** Environment for text highlight feature, default to "terminal" (only enabled into highlight mode) */
  environment?: SupportedEnvironment;

  /** Enable/disable the copy button */
  copyButton?: boolean;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} CodeBox component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CodeBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type CodeBoxComponent = MbxUiComponent<CodeBoxProps>;
