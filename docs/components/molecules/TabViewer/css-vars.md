# [TabViewer](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                                                       | <div style='text-align:center;margin:auto;'>Fallback</div>                                                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div>                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background-light](#-mbx-tabviewer-background-light)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div>                               | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #cccccc, #c7c7c7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #cccccc, #c7c7c7);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background-dark](#-mbx-tabviewer-background-dark)</div>                                 | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div>                               | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text](#-mbx-tabviewer-text)</div>                                                       | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-light](#-mbx-tabviewer-text-light)</div>                                           | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text](#-mbx-tabviewer-text)</div>                                           | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                                                                                                                                                              |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text-dark](#-mbx-tabviewer-text-dark)</div>                                             | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text](#-mbx-tabviewer-text)</div>                                           | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                                                                                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-light](#-mbx-tabviewer-inactive-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #a1a0a0, #797979)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #a1a0a0, #797979);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-dark](#-mbx-tabviewer-inactive-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #3e4b63, #3f4858)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #3e4b63, #3f4858);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text](#-mbx-tabviewer-inactive-text)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-light](#-mbx-tabviewer-inactive-text-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text](#-mbx-tabviewer-inactive-text)</div>                         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#c2c2c2</div><div style='text-align:center;margin-auto;'><div style='background:#c2c2c2;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-dark](#-mbx-tabviewer-inactive-text-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text](#-mbx-tabviewer-inactive-text)</div>                         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#c2c2c2</div><div style='text-align:center;margin-auto;'><div style='background:#c2c2c2;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover-light](#-mbx-tabviewer-inactive-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #b6b4b4, #999797)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #b6b4b4, #999797);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover-dark](#-mbx-tabviewer-inactive-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #566888, #3c465a)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #566888, #3c465a);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-hover](#-mbx-tabviewer-inactive-text-hover)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                      | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-hover-light](#-mbx-tabviewer-inactive-text-hover-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-hover](#-mbx-tabviewer-inactive-text-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div>                                                                                                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-hover-dark](#-mbx-tabviewer-inactive-text-hover-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-hover](#-mbx-tabviewer-inactive-text-hover)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div>                                                                                                                                                    |

## CSS Variables list

<br>

<br>

### --mbx-tabviewer-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-tabviewer-background-light` and `--mbx-tabviewer-background-dark`

<br>

<br>

### --mbx-tabviewer-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #cccccc, #c7c7c7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #cccccc, #c7c7c7);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

TabViewer background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-tabviewer-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                 | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-background](#-mbx-tabviewer-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

TabViewer background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-tabviewer-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-tabviewer-text-light` and `--mbx-tabviewer-text-dark`

<br>

<br>

### --mbx-tabviewer-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text](#-mbx-tabviewer-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div> |

<br>

TabViewer text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-tabviewer-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-text](#-mbx-tabviewer-text)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div> |

<br>

TabViewer text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-tabviewer-inactive-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-tabviewer-inactive-background-light` and `--mbx-tabviewer-inactive-background-dark`

<br>

<br>

### --mbx-tabviewer-inactive-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #a1a0a0, #797979)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #a1a0a0, #797979);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

TabViewer inactive tab background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-tabviewer-inactive-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background](#-mbx-tabviewer-inactive-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #3e4b63, #3f4858)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #3e4b63, #3f4858);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

TabViewer inactive tab background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-tabviewer-inactive-text

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-tabviewer-inactive-text-light` and `--mbx-tabviewer-inactive-text-dark`

<br>

<br>

### --mbx-tabviewer-inactive-text-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                       | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text](#-mbx-tabviewer-inactive-text)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#c2c2c2</div><div style='text-align:center;margin-auto;'><div style='background:#c2c2c2;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

TabViewer inactive tab text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off'

<br>

<br>

### --mbx-tabviewer-inactive-text-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                       | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text](#-mbx-tabviewer-inactive-text)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#c2c2c2</div><div style='text-align:center;margin-auto;'><div style='background:#c2c2c2;margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

TabViewer inactive tab text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on'

<br>

<br>

### --mbx-tabviewer-inactive-background-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-tabviewer-inactive-background-hover-light` and `--mbx-tabviewer-inactive-background-hover-dark`

<br>

<br>

### --mbx-tabviewer-inactive-background-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #b6b4b4, #999797)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #b6b4b4, #999797);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

TabViewer inactive tab background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-tabviewer-inactive-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                               | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-background-hover](#-mbx-tabviewer-inactive-background-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #566888, #3c465a)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #566888, #3c465a);margin:auto; width:15px; height:15px;'/></div></div></div> |

<br>

TabViewer inactive tab background when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-tabviewer-inactive-text-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `--mbx-tabviewer-inactive-text-hover-light` and `--mbx-tabviewer-inactive-text-hover-dark`

<br>

<br>

### --mbx-tabviewer-inactive-text-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-hover](#-mbx-tabviewer-inactive-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div> |

<br>

TabViewer inactive tab text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `off', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>

<br>

### --mbx-tabviewer-inactive-text-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-tabviewer-inactive-text-hover](#-mbx-tabviewer-inactive-text-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div> |

<br>

TabViewer inactive tab text color when [dark mode](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark) is `on', on [hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)

<br>
