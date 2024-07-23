# [FormField](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                                     | <div style='text-align:center;margin:auto;'>Fallback</div>                                                             | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background](#-mbx-formfield-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-dark](#-mbx-formfield-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-formfield-background](#-mbx-formfield-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div>                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-light](#-mbx-formfield-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-formfield-background](#-mbx-formfield-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div>                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text](#-mbx-formfield-text)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-light](#-mbx-formfield-text-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-formfield-text](#-mbx-formfield-text)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                                                                              |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-dark](#-mbx-formfield-text-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-formfield-text](#-mbx-formfield-text)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover](#-mbx-formfield-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover-light](#-mbx-formfield-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover](#-mbx-formfield-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div>                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover-dark](#-mbx-formfield-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover](#-mbx-formfield-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div>                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-hover](#-mbx-formfield-text-hover)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-hover-light](#-mbx-formfield-text-hover-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-hover](#-mbx-formfield-text-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div>                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-hover-dark](#-mbx-formfield-text-hover-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-hover](#-mbx-formfield-text-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div>                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border](#-mbx-formfield-error-border)</div>                     | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border-light](#-mbx-formfield-error-border-light)</div>         | <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border](#-mbx-formfield-error-border)</div>         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border-dark](#-mbx-formfield-error-border-dark)</div>           | <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border](#-mbx-formfield-error-border)</div>         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text](#-mbx-formfield-error-text)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text-light](#-mbx-formfield-error-text-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text](#-mbx-formfield-error-text)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text-dark](#-mbx-formfield-error-text-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text](#-mbx-formfield-error-text)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

## CSS Variables list

<br>

<br>

### --mbx-formfield-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-formfield-background-light` and `--mbx-formfield-background-dark`

<br>

<br>

### --mbx-formfield-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background](#-mbx-formfield-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div> |

<br>

FormField background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-formfield-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background](#-mbx-formfield-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div> |

<br>

FormField background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-formfield-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-formfield-text-light` and `--mbx-formfield-text-dark`

<br>

<br>

### --mbx-formfield-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text](#-mbx-formfield-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div> |

<br>

FormField text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-formfield-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text](#-mbx-formfield-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div> |

<br>

FormField text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-formfield-background-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-formfield-background-hover-light` and `--mbx-formfield-background-hover-dark`

<br>

<br>

### --mbx-formfield-background-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                             | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover](#-mbx-formfield-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div> |

<br>

FormField background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-formfield-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                             | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover](#-mbx-formfield-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div> |

<br>

FormField background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-formfield-text-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-formfield-text-hover-light` and `--mbx-formfield-text-hover-dark`

<br>

<br>

### --mbx-formfield-text-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-hover](#-mbx-formfield-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div> |

<br>

FormField text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-formfield-text-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-hover](#-mbx-formfield-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div> |

<br>

FormField text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-formfield-error-border

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-formfield-error-border-light` and `--mbx-formfield-error-border-dark`

<br>

<br>

### --mbx-formfield-error-border-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border](#-mbx-formfield-error-border)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

FormField error box border color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-formfield-error-border-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border](#-mbx-formfield-error-border)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

FormField error box border color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-formfield-error-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-formfield-error-text-light` and `--mbx-formfield-error-text-dark`

<br>

<br>

### --mbx-formfield-error-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text](#-mbx-formfield-error-text)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

FormField error box text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-formfield-error-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text](#-mbx-formfield-error-text)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

FormField error box text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>
