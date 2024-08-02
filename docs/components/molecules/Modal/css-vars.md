# [Modal](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                 | <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#-mbx-modal-background)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                   |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background-light](#-mbx-modal-background-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#-mbx-modal-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgba(0, 0, 0, 0.8)</div><div style='text-align:center;margin-auto;'><div style='background:rgba(0, 0, 0, 0.8);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background-dark](#-mbx-modal-background-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#-mbx-modal-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgba(0, 0, 0, 0.8)</div><div style='text-align:center;margin-auto;'><div style='background:rgba(0, 0, 0, 0.8);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x](#-mbx-modal-x)</div>                               | <div style='text-align:center;margin:auto;'>/</div>                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                   |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-light](#-mbx-modal-x-light)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-modal-x](#-mbx-modal-x)</div>                   | <div style='text-align:center;margin:auto;'>white</div>                                                                                                                                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-dark](#-mbx-modal-x-dark)</div>                     | <div style='text-align:center;margin:auto;'>[--mbx-modal-x](#-mbx-modal-x)</div>                   | <div style='text-align:center;margin:auto;'>white</div>                                                                                                                                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-hover](#-mbx-modal-x-hover)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                   |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-hover-light](#-mbx-modal-x-hover-light)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-hover](#-mbx-modal-x-hover)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-dismissablecard-x-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/molecules/DismissableCard/css-vars/#-mbx-dismissablecard-x-hover-light)</div>                                        |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-hover-dark](#-mbx-modal-x-hover-dark)</div>         | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-hover](#-mbx-modal-x-hover)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-dismissablecard-x-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/molecules/DismissableCard/css-vars/#-mbx-dismissablecard-x-hover-dark)</div>                                          |

## CSS Variables list

<br>

<br>

### --mbx-modal-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-modal-background-light` and `--mbx-modal-background-dark`

<br>

<br>

### --mbx-modal-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#-mbx-modal-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgba(0, 0, 0, 0.8)</div><div style='text-align:center;margin-auto;'><div style='background:rgba(0, 0, 0, 0.8);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

Modal background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-modal-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#-mbx-modal-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgba(0, 0, 0, 0.8)</div><div style='text-align:center;margin-auto;'><div style='background:rgba(0, 0, 0, 0.8);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

Modal background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-modal-x

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-modal-x-light` and `--mbx-modal-x-dark`

<br>

<br>

### --mbx-modal-x-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                       | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x](#-mbx-modal-x)</div> | <div style='text-align:center;margin:auto;'>white</div>   |

<br>

Modal x icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`

<br>

<br>

### --mbx-modal-x-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                       | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x](#-mbx-modal-x)</div> | <div style='text-align:center;margin:auto;'>white</div>   |

<br>

Modal x icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`

<br>

<br>

### --mbx-modal-x-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-modal-x-hover-light` and `--mbx-modal-x-hover-dark`

<br>

<br>

### --mbx-modal-x-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-hover](#-mbx-modal-x-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dismissablecard-x-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/molecules/DismissableCard/css-vars/#-mbx-dismissablecard-x-hover-light)</div> |

<br>

Modal x icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-modal-x-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-hover](#-mbx-modal-x-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dismissablecard-x-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/molecules/DismissableCard/css-vars/#-mbx-dismissablecard-x-hover-dark)</div> |

<br>

Modal x icon color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on`, on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>
