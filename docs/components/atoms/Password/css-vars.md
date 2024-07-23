# [Password](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                                   | <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background](#-mbx-password-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-light](#-mbx-password-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-background](#-mbx-password-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-dark](#-mbx-password-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-password-background](#-mbx-password-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-dark)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color](#-mbx-password-text-color)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-light](#-mbx-password-text-color-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color](#-mbx-password-text-color)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-light)</div>                         |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-dark](#-mbx-password-text-color-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color](#-mbx-password-text-color)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-dark)</div>                           |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover](#-mbx-password-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover-light](#-mbx-password-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover](#-mbx-password-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover-dark](#-mbx-password-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover](#-mbx-password-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover-dark)</div>   |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-hover](#-mbx-password-text-color-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-hover-light](#-mbx-password-text-color-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-hover](#-mbx-password-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-hover-dark](#-mbx-password-text-color-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-hover](#-mbx-password-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-dark)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-light](#-mbx-password-icon-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-light](#-mbx-password-text-color-light)</div>                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-dark](#-mbx-password-icon-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-dark](#-mbx-password-text-color-dark)</div>                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover-light](#-mbx-password-icon-hover-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-light](#-mbx-password-text-color-light)</div>                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover-dark](#-mbx-password-icon-hover-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-dark](#-mbx-password-text-color-dark)</div>                                                                             |

## CSS Variables list

<br>

<br>

### --mbx-password-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-password-background-light` and `mbx-password-background-dark`

<br>

<br>

### --mbx-password-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background](#-mbx-password-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-light)</div> |

<br>

Password background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-password-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background](#-mbx-password-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-dark)</div> |

<br>

Password background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-password-text-color

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-password-text-color-light` and `mbx-password-text-color-dark`

<br>

<br>

### --mbx-password-text-color-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color](#-mbx-password-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-light)</div> |

<br>

Password text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-password-text-color-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color](#-mbx-password-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-dark)</div> |

<br>

Password text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-password-background-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-password-background-hover-light` and `mbx-password-background-hover-dark`

<br>

<br>

### --mbx-password-background-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover](#-mbx-password-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover-light)</div> |

<br>

Password background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-password-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover](#-mbx-password-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover-dark)</div> |

<br>

Password background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-password-text-color-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-password-text-color-hover-light` and `mbx-password-text-color-hover-dark`

<br>

<br>

### --mbx-password-text-color-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-hover](#-mbx-password-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-light)</div> |

<br>

Password text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-password-text-color-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-hover](#-mbx-password-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-dark)</div> |

<br>

Password text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-password-icon

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-password-icon-light` and `--mbx-password-icon-dark`

<br>

<br>

### --mbx-password-icon-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                            |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-light](#-mbx-password-text-color-light)</div> |

<br>

Password eye icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-password-icon-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                          |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-dark](#-mbx-password-text-color-dark)</div> |

<br>

Password eye icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-password-icon-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-password-icon-hover-light` and `--mbx-password-icon-hover-dark`

<br>

<br>

### --mbx-password-icon-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-light](#-mbx-password-text-color-light)</div> |

<br>

Password eye icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-password-icon-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                          |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-color-dark](#-mbx-password-text-color-dark)</div> |

<br>

Password eye icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>
