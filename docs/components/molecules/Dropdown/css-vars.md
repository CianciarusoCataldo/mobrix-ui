# [Dropdown](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                                   | <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-light](#-mbx-dropdown-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-dark](#-mbx-dropdown-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text](#-mbx-dropdown-text)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-light](#-mbx-dropdown-text-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text](#-mbx-dropdown-text)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                         |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-dark](#-mbx-dropdown-text-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text](#-mbx-dropdown-text)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                           |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover](#-mbx-dropdown-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover-light](#-mbx-dropdown-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover-dark](#-mbx-dropdown-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-dark)</div>   |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-hover](#-mbx-dropdown-text-hover)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-hover-light](#-mbx-dropdown-text-hover-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-hover](#-mbx-dropdown-text-hover)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-hover-dark](#-mbx-dropdown-text-hover-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-hover](#-mbx-dropdown-text-hover)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow](#-mbx-dropdown-arrow)</div>                                   | <div style='text-align:center;margin:auto;'>/</div>                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-light](#-mbx-dropdown-arrow-light)</div>                       | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow](#-mbx-dropdown-arrow)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-light](#-mbx-dropdown-text-light)</div>                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-dark](#-mbx-dropdown-arrow-dark)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow](#-mbx-dropdown-arrow)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-dark](#-mbx-dropdown-text-dark)</div>                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-hover](#-mbx-dropdown-arrow-hover)</div>                       | <div style='text-align:center;margin:auto;'>/</div>                                                        | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-hover-light](#-mbx-dropdown-arrow-hover-light)</div>           | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-hover](#-mbx-dropdown-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-light](#-mbx-dropdown-arrow-light)</div>                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-hover-dark](#-mbx-dropdown-arrow-hover-dark)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-hover](#-mbx-dropdown-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-dark](#-mbx-dropdown-arrow-dark)</div>                                                                           |

## CSS Variables list

<br>

<br>

### --mbx-dropdown-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-background-light` and `--mbx-dropdown-background-dark`

<br>

<br>

### --mbx-dropdown-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div> |

<br>

Dropdown background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-dropdown-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div> |

<br>

Dropdown background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-dropdown-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-text-light` and `--mbx-dropdown-text-dark`

<br>

<br>

### --mbx-dropdown-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text](#-mbx-dropdown-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div> |

<br>

Dropdown text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-dropdown-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text](#-mbx-dropdown-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div> |

<br>

Dropdown text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-dropdown-background-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-background-hover-light` and `--mbx-dropdown-background-hover-dark`

<br>

<br>

### --mbx-dropdown-background-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div> |

<br>

Dropdown background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-dropdown-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-dark)</div> |

<br>

Dropdown background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-dropdown-text-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-text-hover-light` and `--mbx-dropdown-text-hover-dark`

<br>

<br>

### --mbx-dropdown-text-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-hover](#-mbx-dropdown-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div> |

<br>

Dropdown text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-dropdown-text-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-hover](#-mbx-dropdown-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div> |

<br>

Dropdown text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-dropdown-arrow

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-arrow-light` and `--mbx-dropdown-arrow-dark`

<br>

<br>

### --mbx-dropdown-arrow-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow](#-mbx-dropdown-arrow)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-light](#-mbx-dropdown-text-light)</div> |

<br>

Dropdown arrow color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-dropdown-arrow-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                     | <div style='text-align:center;margin:auto;'>Default</div>                                              |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow](#-mbx-dropdown-arrow)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-dark](#-mbx-dropdown-text-dark)</div> |

<br>

Dropdown arrow color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-dropdown-arrow-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-arrow-hover-light` and `--mbx-dropdown-arrow-hover-dark`

<br>

<br>

### --mbx-dropdown-arrow-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                  |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-hover](#-mbx-dropdown-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-light](#-mbx-dropdown-arrow-light)</div> |

<br>

Dropdown arrow color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-dropdown-arrow-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-hover](#-mbx-dropdown-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-dark](#-mbx-dropdown-arrow-dark)</div> |

<br>

Dropdown arrow color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>
