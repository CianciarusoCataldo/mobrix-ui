# [Calendar](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                                         | <div style='text-align:center;margin:auto;'>Fallback</div>                                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background](#-mbx-calendar-background)</div>                               | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-light](#-mbx-calendar-background-light)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background](#-mbx-calendar-background)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div>                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-dark](#-mbx-calendar-background-dark)</div>                     | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background](#-mbx-calendar-background)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div>                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text](#-mbx-calendar-text)</div>                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-light](#-mbx-calendar-text-light)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text](#-mbx-calendar-text)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                                                                              |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-dark](#-mbx-calendar-text-dark)</div>                                 | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text](#-mbx-calendar-text)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background](#-mbx-calendar-selected-background)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-light](#-mbx-calendar-selected-background-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background](#-mbx-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-dark](#-mbx-calendar-background-dark)</div>                                                                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-dark](#-mbx-calendar-selected-background-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background](#-mbx-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-light](#-mbx-calendar-background-light)</div>                                                                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text](#-mbx-calendar-selected-text)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-light](#-mbx-calendar-selected-text-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text](#-mbx-calendar-selected-text)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-dark](#-mbx-calendar-text-dark)</div>                                                                                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-dark](#-mbx-calendar-selected-text-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text](#-mbx-calendar-selected-text)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-light](#-mbx-calendar-text-light)</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover](#-mbx-calendar-background-hover)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover-light](#-mbx-calendar-background-hover-light)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover](#-mbx-calendar-background-hover)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-light](#-mbx-calendar-selected-background-light)</div>                                                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover-dark](#-mbx-calendar-background-hover-dark)</div>         | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover](#-mbx-calendar-background-hover)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-dark](#-mbx-calendar-selected-background-dark)</div>                                                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-hover](#-mbx-calendar-text-hover)</div>                               | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-hover-light](#-mbx-calendar-text-hover-light)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-hover](#-mbx-calendar-text-hover)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-light](#-mbx-calendar-selected-text-light)</div>                                                                                                              |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-hover-dark](#-mbx-calendar-text-hover-dark)</div>                     | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-hover](#-mbx-calendar-text-hover)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-dark](#-mbx-calendar-selected-text-dark)</div>                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow](#-mbx-calendar-arrow)</div>                                         | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-light](#-mbx-calendar-arrow-light)</div>                             | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow](#-mbx-calendar-arrow)</div>                             | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-light](#-mbx-calendar-text-light)</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-dark](#-mbx-calendar-arrow-dark)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow](#-mbx-calendar-arrow)</div>                             | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-dark](#-mbx-calendar-text-dark)</div>                                                                                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover](#-mbx-calendar-arrow-hover)</div>                             | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover-light](#-mbx-calendar-arrow-hover-light)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover](#-mbx-calendar-arrow-hover)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                                                                              |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover-dark](#-mbx-calendar-arrow-hover-dark)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover](#-mbx-calendar-arrow-hover)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color](#-mbx-calendar-today-color)</div>                             | <div style='text-align:center;margin:auto;'>/</div>                                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color-light](#-mbx-calendar-today-color-light)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color](#-mbx-calendar-today-color)</div>                 | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color-dark](#-mbx-calendar-today-color-dark)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color](#-mbx-calendar-today-color)</div>                 | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

## CSS Variables list

<br>

<br>

### --mbx-calendar-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-background-light` and `--mbx-calendar-background-dark`

<br>

<br>

### --mbx-calendar-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background](#-mbx-calendar-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div> |

<br>

Calendar background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-calendar-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background](#-mbx-calendar-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div> |

<br>

Calendar background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-calendar-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-text-light` and `--mbx-calendar-text-dark`

<br>

<br>

### --mbx-calendar-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text](#-mbx-calendar-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div> |

<br>

Calendar text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-calendar-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text](#-mbx-calendar-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div> |

<br>

Calendar text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-calendar-selected-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-selected-background-light` and `--mbx-calendar-selected-background-dark`

<br>

<br>

### --mbx-calendar-selected-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                          |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background](#-mbx-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-dark](#-mbx-calendar-background-dark)</div> |

<br>

Calendar selected cell background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-calendar-selected-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background](#-mbx-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-light](#-mbx-calendar-background-light)</div> |

<br>

Calendar selected cell background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-calendar-selected-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-selected-text-light` and `--mbx-calendar-selected-text-dark`

<br>

<br>

### --mbx-calendar-selected-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                              |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text](#-mbx-calendar-selected-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-dark](#-mbx-calendar-text-dark)</div> |

<br>

Calendar selected cell text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-calendar-selected-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text](#-mbx-calendar-selected-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-light](#-mbx-calendar-text-light)</div> |

<br>

Calendar selected cell text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-calendar-background-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-background-hover-light` and `--mbx-calendar-background-hover-dark`

<br>

<br>

### --mbx-calendar-background-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover](#-mbx-calendar-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-light](#-mbx-calendar-selected-background-light)</div> |

<br>

Calendar background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-calendar-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover](#-mbx-calendar-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-dark](#-mbx-calendar-selected-background-dark)</div> |

<br>

Calendar background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-calendar-text-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-text-hover-light` and `--mbx-calendar-text-hover-dark`

<br>

<br>

### --mbx-calendar-text-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-hover](#-mbx-calendar-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-light](#-mbx-calendar-selected-text-light)</div> |

<br>

Calendar text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-calendar-text-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-hover](#-mbx-calendar-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-dark](#-mbx-calendar-selected-text-dark)</div> |

<br>

Calendar text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-calendar-arrow

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-arrow-light` and `--mbx-calendar-arrow-dark`

<br>

<br>

### --mbx-calendar-arrow-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow](#-mbx-calendar-arrow)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-light](#-mbx-calendar-text-light)</div> |

<br>

Calendar arrow color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-calendar-arrow-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                     | <div style='text-align:center;margin:auto;'>Default</div>                                              |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow](#-mbx-calendar-arrow)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-dark](#-mbx-calendar-text-dark)</div> |

<br>

Calendar arrow color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-calendar-arrow-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-arrow-hover-light` and `--mbx-calendar-arrow-hover-dark`

<br>

<br>

### --mbx-calendar-arrow-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover](#-mbx-calendar-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div> |

<br>

Calendar arrow color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-calendar-arrow-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover](#-mbx-calendar-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div> |

<br>

Calendar arrow color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-calendar-today-color

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-calendar-today-color-light` and `--mbx-calendar-today-color-dark`

<br>

<br>

### --mbx-calendar-today-color-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color](#-mbx-calendar-today-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

Calendar today color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-calendar-today-color-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color](#-mbx-calendar-today-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

Calendar today color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>
