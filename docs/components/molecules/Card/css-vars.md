# [Card](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                               | <div style='text-align:center;margin:auto;'>Fallback</div>                                       | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background](#-mbx-card-background)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                              | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background-light](#-mbx-card-background-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-card-background](#-mbx-card-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #fff, #ededee, #e6e7e7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #fff, #ededee, #e6e7e7);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background-dark](#-mbx-card-background-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-card-background](#-mbx-card-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text](#-mbx-card-text)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                              | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text-light](#-mbx-card-text-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-card-text](#-mbx-card-text)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                                                                                                                                                                          |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text-dark](#-mbx-card-text-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-card-text](#-mbx-card-text)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                                                                                                                                                                            |

## CSS Variables list

<br>

<br>

### --mbx-card-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-card-background-light` and `--mbx-card-background-dark`

<br>

<br>

### --mbx-card-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                       | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background](#-mbx-card-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #fff, #ededee, #e6e7e7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #fff, #ededee, #e6e7e7);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

Card background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-card-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                       | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background](#-mbx-card-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

Card background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-card-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-card-text-light` and `--mbx-card-text-dark`

<br>

<br>

### --mbx-card-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text](#-mbx-card-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div> |

<br>

Card text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-card-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                           | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text](#-mbx-card-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div> |

<br>

Card text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>
