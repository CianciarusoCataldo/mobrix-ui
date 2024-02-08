# [TabViewer](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                                                               | <div style='text-align:center;margin:auto;'>Fallback</div>                                                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div>                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background-light](#-mbx-tabviewer-background-light)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div>                               | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #cccccc, #c7c7c7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #cccccc, #c7c7c7);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background-dark](#-mbx-tabviewer-background-dark)</div>                                 | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div>                               | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-color](#-mbx-tabviewer-text-color)</div>                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-color-light](#-mbx-tabviewer-text-color-light)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-color](#-mbx-tabviewer-text-color)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-light)</div>                                                                                                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-color-dark](#-mbx-tabviewer-text-color-dark)</div>                                 | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-color](#-mbx-tabviewer-text-color)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-dark)</div>                                                                                                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-light](#-mbx-tabviewer-inactive-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #a1a0a0, #797979)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #a1a0a0, #797979);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-dark](#-mbx-tabviewer-inactive-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #3e4b63, #3f4858)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #3e4b63, #3f4858);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color](#-mbx-tabviewer-inactive-text-color)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-light](#-mbx-tabviewer-inactive-text-color-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color](#-mbx-tabviewer-inactive-text-color)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#c2c2c2</div><div style='text-align:center;margin-auto;'><div style='background:#c2c2c2;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-dark](#-mbx-tabviewer-inactive-text-color-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color](#-mbx-tabviewer-inactive-text-color)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#c2c2c2</div><div style='text-align:center;margin-auto;'><div style='background:#c2c2c2;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover-light](#-mbx-tabviewer-inactive-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #b6b4b4, #999797)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #b6b4b4, #999797);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover-dark](#-mbx-tabviewer-inactive-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #566888, #3c465a)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #566888, #3c465a);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-hover](#-mbx-tabviewer-inactive-text-color-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-hover-light](#-mbx-tabviewer-inactive-text-color-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-hover](#-mbx-tabviewer-inactive-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-light)</div>                                                                                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-hover-dark](#-mbx-tabviewer-inactive-text-color-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-hover](#-mbx-tabviewer-inactive-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-color-hover-dark)</div>                                                                                                                                        |

## CSS Variables list

<br>

<br>

### --mbx-tabviewer-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

Fallback value for `--mbx-tabviewer-background-light` and `--mbx-tabviewer-background-dark`

<br>

<br>

### --mbx-tabviewer-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer background when [dark](../../global/props.md#dark) mode is `off'

<br>

<br>

### --mbx-tabviewer-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer background when [dark](../../global/props.md#dark) mode is `on'

<br>

<br>

### --mbx-tabviewer-text-color

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

Fallback value for `--mbx-tabviewer-text-color-light` and `--mbx-tabviewer-text-color-dark`

<br>

<br>

### --mbx-tabviewer-text-color-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-color](#-mbx-tabviewer-text-color)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer text color when [dark](../../global/props.md#dark) mode is `off'

<br>

<br>

### --mbx-tabviewer-text-color-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-color](#-mbx-tabviewer-text-color)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer text color when [dark](../../global/props.md#dark) mode is `on'

<br>

<br>

### --mbx-tabviewer-inactive-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

Fallback value for `--mbx-tabviewer-inactive-background-light` and `--mbx-tabviewer-inactive-background-dark`

<br>

<br>

### --mbx-tabviewer-inactive-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                   | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer inactive tab background when [dark](../../global/props.md#dark) mode is `off'

<br>

<br>

### --mbx-tabviewer-inactive-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                   | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer inactive tab background when [dark](../../global/props.md#dark) mode is `on'

<br>

<br>

### --mbx-tabviewer-inactive-text-color

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

Fallback value for `--mbx-tabviewer-inactive-text-color-light` and `--mbx-tabviewer-inactive-text-color-dark`

<br>

<br>

### --mbx-tabviewer-inactive-text-color-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                   | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color](#-mbx-tabviewer-inactive-text-color)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer inactive tab text color when [dark](../../global/props.md#dark) mode is `off'

<br>

<br>

### --mbx-tabviewer-inactive-text-color-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                   | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color](#-mbx-tabviewer-inactive-text-color)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer inactive tab text color when [dark](../../global/props.md#dark) mode is `on'

<br>

<br>

### --mbx-tabviewer-inactive-background-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

Fallback value for `--mbx-tabviewer-inactive-background-hover-light` and `--mbx-tabviewer-inactive-background-hover-dark`

<br>

<br>

### --mbx-tabviewer-inactive-background-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                               | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer inactive tab background when [dark](../../global/props.md#dark) mode is `off', on 'hover'

<br>

<br>

### --mbx-tabviewer-inactive-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                               | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer inactive tab background when [dark](../../global/props.md#dark) mode is `on', on 'hover'

<br>

<br>

### --mbx-tabviewer-inactive-text-color-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

Fallback value for `--mbx-tabviewer-inactive-text-color-hover-light` and `--mbx-tabviewer-inactive-text-color-hover-dark`

<br>

<br>

### --mbx-tabviewer-inactive-text-color-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                               | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-hover](#-mbx-tabviewer-inactive-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer inactive tab text color when [dark](../../global/props.md#dark) mode is `off', on 'hover'

<br>

<br>

### --mbx-tabviewer-inactive-text-color-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                               | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-color-hover](#-mbx-tabviewer-inactive-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>DEFAULT</div> |

<br>

TabViewer inactive tab text color when [dark](../../global/props.md#dark) mode is `on', on 'hover'

<br>
