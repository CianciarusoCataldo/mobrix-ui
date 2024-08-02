# [FormField](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                             | <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background](#-mbx-field-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background-dark](#-mbx-field-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-field-background](#-mbx-field-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div>                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background-light](#-mbx-field-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-field-background](#-mbx-field-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div>                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text](#-mbx-field-text)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text-light](#-mbx-field-text-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-field-text](#-mbx-field-text)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                                                                              |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text-dark](#-mbx-field-text-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-field-text](#-mbx-field-text)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background-hover](#-mbx-field-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background-hover-light](#-mbx-field-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-field-background-hover](#-mbx-field-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div>                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background-hover-dark](#-mbx-field-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-field-background-hover](#-mbx-field-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div>                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text-hover](#-mbx-field-text-hover)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text-hover-light](#-mbx-field-text-hover-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-field-text-hover](#-mbx-field-text-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div>                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text-hover-dark](#-mbx-field-text-hover-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-field-text-hover](#-mbx-field-text-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div>                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-border](#-mbx-field-error-border)</div>                     | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-border-light](#-mbx-field-error-border-light)</div>         | <div style='text-align:center;margin:auto;'>[--mbx-field-error-border](#-mbx-field-error-border)</div>         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-border-dark](#-mbx-field-error-border-dark)</div>           | <div style='text-align:center;margin:auto;'>[--mbx-field-error-border](#-mbx-field-error-border)</div>         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-text](#-mbx-field-error-text)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-text-light](#-mbx-field-error-text-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-field-error-text](#-mbx-field-error-text)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-text-dark](#-mbx-field-error-text-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-field-error-text](#-mbx-field-error-text)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

## CSS Variables list

<br>

<br>

### --mbx-field-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-field-background-light` and `--mbx-field-background-dark`

<br>

<br>

### --mbx-field-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background](#-mbx-field-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div> |

<br>

FormField background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-field-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background](#-mbx-field-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div> |

<br>

FormField background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-field-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-field-text-light` and `--mbx-field-text-dark`

<br>

<br>

### --mbx-field-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                             | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text](#-mbx-field-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div> |

<br>

FormField text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-field-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                             | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text](#-mbx-field-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div> |

<br>

FormField text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-field-background-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-field-background-hover-light` and `--mbx-field-background-hover-dark`

<br>

<br>

### --mbx-field-background-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background-hover](#-mbx-field-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div> |

<br>

FormField background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-field-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-background-hover](#-mbx-field-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div> |

<br>

FormField background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-field-text-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-field-text-hover-light` and `--mbx-field-text-hover-dark`

<br>

<br>

### --mbx-field-text-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text-hover](#-mbx-field-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div> |

<br>

FormField text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-field-text-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-text-hover](#-mbx-field-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div> |

<br>

FormField text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-field-error-border

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-field-error-border-light` and `--mbx-field-error-border-dark`

<br>

<br>

### --mbx-field-error-border-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                             | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-border](#-mbx-field-error-border)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

FormField error box border color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-field-error-border-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                             | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-border](#-mbx-field-error-border)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

FormField error box border color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-field-error-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-field-error-text-light` and `--mbx-field-error-text-dark`

<br>

<br>

### --mbx-field-error-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-text](#-mbx-field-error-text)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

FormField error box text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-field-error-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-field-error-text](#-mbx-field-error-text)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

FormField error box text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>
