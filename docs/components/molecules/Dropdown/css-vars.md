# [Dropdown](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                                     | <div style='text-align:center;margin:auto;'>Fallback</div>                                                             | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>                           | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-light](#-mbx-dropdown-background-light)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-dark](#-mbx-dropdown-background-dark)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color](#-mbx-dropdown-text-color)</div>                           | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-light](#-mbx-dropdown-text-color-light)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color](#-mbx-dropdown-text-color)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-dark](#-mbx-dropdown-text-color-dark)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color](#-mbx-dropdown-text-color)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-dark)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover](#-mbx-dropdown-background-hover)</div>               | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover-light](#-mbx-dropdown-background-hover-light)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover-dark](#-mbx-dropdown-background-hover-dark)</div>     | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-dark)</div>   |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-hover](#-mbx-dropdown-text-color-hover)</div>               | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-hover-light](#-mbx-dropdown-text-color-hover-light)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover](#-mbx-dropdown-background-hover)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-hover-dark](#-mbx-dropdown-text-color-hover-dark)</div>     | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover](#-mbx-dropdown-background-hover)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-dark)</div>   |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color](#-mbx-dropdown-arrow-color)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-light](#-mbx-dropdown-arrow-color-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color](#-mbx-dropdown-arrow-color)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-light](#-mbx-dropdown-text-color-light)</div>                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-dark](#-mbx-dropdown-arrow-color-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color](#-mbx-dropdown-arrow-color)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-dark](#-mbx-dropdown-text-color-dark)</div>                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-hover](#-mbx-dropdown-arrow-color-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                    | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-hover-light](#-mbx-dropdown-arrow-color-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-hover](#-mbx-dropdown-arrow-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-light](#-mbx-dropdown-arrow-color-light)</div>                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-hover-dark](#-mbx-dropdown-arrow-color-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-hover](#-mbx-dropdown-arrow-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-dark](#-mbx-dropdown-arrow-color-dark)</div>                                                               |

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

Dropdown background when dark mode is `off`

<br>

<br>

### --mbx-dropdown-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div> |

<br>

Dropdown background when dark mode is `on`

<br>

<br>

### --mbx-dropdown-text-color

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-text-color-light` and `--mbx-dropdown-text-color-dark`

<br>

<br>

### --mbx-dropdown-text-color-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color](#-mbx-dropdown-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-light)</div> |

<br>

Dropdown text color when dark mode is `off`

<br>

<br>

### --mbx-dropdown-text-color-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color](#-mbx-dropdown-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-dark)</div> |

<br>

Dropdown text color when dark mode is `on`

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

Dropdown background when dark mode is `off`, on hover

<br>

<br>

### --mbx-dropdown-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background](#-mbx-dropdown-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-dark)</div> |

<br>

Dropdown background when dark mode is `on`, on hover

<br>

<br>

### --mbx-dropdown-text-color-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-text-color-hover-light` and `--mbx-dropdown-text-color-hover-dark`

<br>

<br>

### --mbx-dropdown-text-color-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover](#-mbx-dropdown-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-light)</div> |

<br>

Dropdown text color when dark mode is `off`, on hover

<br>

<br>

### --mbx-dropdown-text-color-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-background-hover](#-mbx-dropdown-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-dark)</div> |

<br>

Dropdown text color when dark mode is `on`, on hover

<br>

<br>

### --mbx-dropdown-arrow-color

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-arrow-color-light` and `--mbx-dropdown-arrow-color-dark`

<br>

<br>

### --mbx-dropdown-arrow-color-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                            |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color](#-mbx-dropdown-arrow-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-light](#-mbx-dropdown-text-color-light)</div> |

<br>

Dropdown arrow color when dark mode is `off`

<br>

<br>

### --mbx-dropdown-arrow-color-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                          |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color](#-mbx-dropdown-arrow-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-text-color-dark](#-mbx-dropdown-text-color-dark)</div> |

<br>

Dropdown arrow color when dark mode is `on`

<br>

<br>

### --mbx-dropdown-arrow-color-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-dropdown-arrow-color-hover-light` and `--mbx-dropdown-arrow-color-hover-dark`

<br>

<br>

### --mbx-dropdown-arrow-color-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                             | <div style='text-align:center;margin:auto;'>Default</div>                                                              |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-hover](#-mbx-dropdown-arrow-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-light](#-mbx-dropdown-arrow-color-light)</div> |

<br>

Dropdown arrow color when dark mode is `off`, on hover

<br>

<br>

### --mbx-dropdown-arrow-color-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                             | <div style='text-align:center;margin:auto;'>Default</div>                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-hover](#-mbx-dropdown-arrow-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dropdown-arrow-color-dark](#-mbx-dropdown-arrow-color-dark)</div> |

<br>

Dropdown arrow color when dark mode is `on`, on hover

<br>
