/**
 * Supported environment when parsing code string. Every environment contains its specific colors for some specific code word (like `import`)
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export const CODE_LANGUAGES = {
  common: {
    DEFAULT_VALUE: "#FFFFF",
    STRING: "#f6713c",
  },
  javascript: {
    import: "#d81313",
    from: "#d81313",
    if: "#d81313",
    else: "#d81313",
    try: "#d81313",
    catch: "#d81313",
    while: "#d81313",
    export: "#d81313",
    default: "#3b82f6",
    const: "#2432f5",
    COMPONENT_DECLARATION: "#3b82f6",
  },
  python: {
    pip: "#5b9306",
  },
  terminal: {
    sh: "#5b9306",
    npm: "#5b9306",
    node: "#5b9306",
    git: "#5b9306",
    "gh-pages": "#5b9306",
    docker: "#5b9306",
  },
};
