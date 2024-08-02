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
| <div style='text-align:center;margin:auto;'>[--mbx-password-text](#-mbx-password-text)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-light](#-mbx-password-text-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-password-text](#-mbx-password-text)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-dark](#-mbx-password-text-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-password-text](#-mbx-password-text)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover](#-mbx-password-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover-light](#-mbx-password-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover](#-mbx-password-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover-dark](#-mbx-password-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-password-background-hover](#-mbx-password-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover-dark)</div>   |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-hover](#-mbx-password-text-hover)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-hover-light](#-mbx-password-text-hover-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-text-hover](#-mbx-password-text-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div>                         |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-hover-dark](#-mbx-password-text-hover-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-password-text-hover](#-mbx-password-text-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div>                           |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-light](#-mbx-password-icon-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-password-text-light](#-mbx-password-text-light)</div>                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-dark](#-mbx-password-icon-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-password-text-dark](#-mbx-password-text-dark)</div>                                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                  | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover-light](#-mbx-password-icon-hover-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-text-light](#-mbx-password-text-light)</div>                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover-dark](#-mbx-password-icon-hover-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-password-text-dark](#-mbx-password-text-dark)</div>                                                                                         |

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

### --mbx-password-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-password-text-light` and `mbx-password-text-dark`

<br>

<br>

### --mbx-password-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text](#-mbx-password-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div> |

<br>

Password text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-password-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text](#-mbx-password-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div> |

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

### --mbx-password-text-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-password-text-hover-light` and `mbx-password-text-hover-dark`

<br>

<br>

### --mbx-password-text-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-hover](#-mbx-password-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div> |

<br>

Password text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-password-text-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-text-hover](#-mbx-password-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div> |

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

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-light](#-mbx-password-text-light)</div> |

<br>

Password eye icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-password-icon-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                              |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon](#-mbx-password-icon)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-dark](#-mbx-password-text-dark)</div> |

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

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-light](#-mbx-password-text-light)</div> |

<br>

Password eye icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-password-icon-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                              |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-password-icon-hover](#-mbx-password-icon-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-password-text-dark](#-mbx-password-text-dark)</div> |

<br>

Password eye icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>
