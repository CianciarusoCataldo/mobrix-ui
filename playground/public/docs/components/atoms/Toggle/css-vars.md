# Toggle

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                                                    | <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-background](#mbx-toggle-background)</div>                                       | <div style='text-align:center;margin:auto;'>/</div>                                                                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-background-light](#mbx-toggle-background-light)</div>                           | <div style='text-align:center;margin:auto;'>[mbx-toggle-background](#mbx-toggle-background)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-background-light](../../global/css-vars.md#mbx-background-light)</div>                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-background-dark](#mbx-toggle-background-dark)</div>                             | <div style='text-align:center;margin:auto;'>[mbx-toggle-background](#mbx-toggle-background)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](../../global/css-vars.md#mbx-background-dark)</div>                                                                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-on-internal-color](#mbx-toggle-icon-on-internal-color)</div>               | <div style='text-align:center;margin:auto;'>/</div>                                                                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-on-internal-color-light](#mbx-toggle-icon-on-internal-color-light)</div>   | <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-on-internal-color](#mbx-toggle-icon-on-internal-color)</div>   | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#ffffff</div><div style='text-align:center;margin-auto;'><div style='background:#ffffff;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-on-internal-color-dark](#mbx-toggle-icon-on-internal-color-dark)</div>     | <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-on-internal-color](#mbx-toggle-icon-on-internal-color)</div>   | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#ffffff</div><div style='text-align:center;margin-auto;'><div style='background:#ffffff;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-on-external-color](#mbx-toggle-icon-on-external-color)</div>               | <div style='text-align:center;margin:auto;'>/</div>                                                                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-on-external-color-light](#mbx-toggle-icon-on-external-color-light)</div>   | <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-on-external-color](#mbx-toggle-icon-on-external-color)</div>   | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#adadad</div><div style='text-align:center;margin-auto;'><div style='background:#adadad;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-on-external-color-dark](#mbx-toggle-icon-on-external-color-dark)</div>     | <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-on-external-color](#mbx-toggle-icon-on-external-color)</div>   | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#adadad</div><div style='text-align:center;margin-auto;'><div style='background:#adadad;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-off-internal-color](#mbx-toggle-icon-off-internal-color)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-off-internal-color-light](#mbx-toggle-icon-off-internal-color-light)</div> | <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-off-internal-color](#mbx-toggle-icon-off-internal-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#a5a5a5</div><div style='text-align:center;margin-auto;'><div style='background:#a5a5a5;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-off-internal-color-dark](#mbx-toggle-icon-off-internal-color-dark)</div>   | <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-off-internal-color](#mbx-toggle-icon-off-internal-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#a5a5a5</div><div style='text-align:center;margin-auto;'><div style='background:#a5a5a5;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-off-external-color](#mbx-toggle-icon-off-external-color)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-off-external-color-light](#mbx-toggle-icon-off-external-color-light)</div> | <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-off-external-color](#mbx-toggle-icon-off-external-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#a7a3a3</div><div style='text-align:center;margin-auto;'><div style='background:#a7a3a3;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-toggle-icon-off-external-color-dark](#mbx-toggle-icon-off-external-color-dark)</div>   | <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-off-external-color](#mbx-toggle-icon-off-external-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#a7a3a3</div><div style='text-align:center;margin-auto;'><div style='background:#a7a3a3;margin:auto; width:15px; height:15px;'/></div></div></div> |

## CSS Variables list

<br>

### --mbx-toggle-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-toggle-background-light` and `--mbx-toggle-background-dark`<br><br>

### --mbx-toggle-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                 |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-background](#mbx-toggle-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](../../global/css-vars.md#mbx-background-light)</div> |

Toggle background when dark mode is `off`<br><br>

### --mbx-toggle-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                               |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-background](#mbx-toggle-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](../../global/css-vars.md#mbx-background-dark)</div> |

Toggle background when dark mode is `on`<br><br>

### --mbx-toggle-icon-on-internal-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-toggle-icon-on-internal-color-light` and `--mbx-toggle-icon-on-internal-color-dark`<br><br>

### --mbx-toggle-icon-on-internal-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-on-internal-color](#mbx-toggle-icon-on-internal-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#ffffff</div><div style='text-align:center;margin-auto;'><div style='background:#ffffff;margin:auto; width:15px; height:15px;'/></div></div></div> |

Toggle icon internal color, when dark mode is `off` and toggle status is `off`<br><br>

### --mbx-toggle-icon-on-internal-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-on-internal-color](#mbx-toggle-icon-on-internal-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#ffffff</div><div style='text-align:center;margin-auto;'><div style='background:#ffffff;margin:auto; width:15px; height:15px;'/></div></div></div> |

Toggle icon internal color, when dark mode is `off` and toggle status is `on`<br><br>

### --mbx-toggle-icon-on-external-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-toggle-icon-on-external-color-light` and `--mbx-toggle-icon-on-external-color-dark`<br><br>

### --mbx-toggle-icon-on-external-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-on-external-color](#mbx-toggle-icon-on-external-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#adadad</div><div style='text-align:center;margin-auto;'><div style='background:#adadad;margin:auto; width:15px; height:15px;'/></div></div></div> |

Toggle icon external color, when dark mode is `off` and toggle status is `on`<br><br>

### --mbx-toggle-icon-on-external-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-on-external-color](#mbx-toggle-icon-on-external-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#adadad</div><div style='text-align:center;margin-auto;'><div style='background:#adadad;margin:auto; width:15px; height:15px;'/></div></div></div> |

Toggle icon external color, when dark mode is `on` and toggle status is `on`<br><br>

### --mbx-toggle-icon-off-internal-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-toggle-icon-off-internal-color-light` and `--mbx-toggle-icon-off-internal-color-dark`<br><br>

### --mbx-toggle-icon-off-internal-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-off-internal-color](#mbx-toggle-icon-off-internal-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#a5a5a5</div><div style='text-align:center;margin-auto;'><div style='background:#a5a5a5;margin:auto; width:15px; height:15px;'/></div></div></div> |

Toggle icon internal color, when dark mode is `off` and toggle status is `off`<br><br>

### --mbx-toggle-icon-off-internal-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-off-internal-color](#mbx-toggle-icon-off-internal-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#a5a5a5</div><div style='text-align:center;margin-auto;'><div style='background:#a5a5a5;margin:auto; width:15px; height:15px;'/></div></div></div> |

Toggle icon internal color, when dark mode is `on` and toggle status is `off`<br><br>

### --mbx-toggle-icon-off-external-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-toggle-icon-off-external-color-light` and `--mbx-toggle-icon-off-external-color-dark`<br><br>

### --mbx-toggle-icon-off-external-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-off-external-color](#mbx-toggle-icon-off-external-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#a7a3a3</div><div style='text-align:center;margin-auto;'><div style='background:#a7a3a3;margin:auto; width:15px; height:15px;'/></div></div></div> |

Toggle icon external color, when dark mode is `off` and toggle status is `off`<br><br>

### --mbx-toggle-icon-off-external-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-toggle-icon-off-external-color](#mbx-toggle-icon-off-external-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#a7a3a3</div><div style='text-align:center;margin-auto;'><div style='background:#a7a3a3;margin:auto; width:15px; height:15px;'/></div></div></div> |

Toggle icon external color, when dark mode is `on` and toggle status is `off`<br><br>
