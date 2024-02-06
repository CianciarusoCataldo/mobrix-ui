# CheckBox CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                                            | <div style='text-align:center;margin:auto;'>Fallback</div>                                                            | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background](#--mbx-checkbox-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-light](#--mbx-checkbox-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background](#--mbx-checkbox-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-light](../../global/css-vars.md#--mbx-background-light)</div>                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-dark](#--mbx-checkbox-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background](#--mbx-checkbox-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](../../global/css-vars.md#--mbx-background-dark)</div>                                                                                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-hover](#--mbx-checkbox-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-hover-light](#--mbx-checkbox-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-hover](#--mbx-checkbox-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](../../global/css-vars.md#--mbx-background-hover-light)</div>                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-hover-dark](#--mbx-checkbox-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-hover](#--mbx-checkbox-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-dark](../../global/css-vars.md#--mbx-background-hover-dark)</div>                                                                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-tick-color](#--mbx-checkbox-tick-color)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-tick-color-light](#--mbx-checkbox-tick-color-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-checkbox-tick-color](#--mbx-checkbox-tick-color)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgb(37, 99, 235)</div><div style='text-align:center;margin-auto;'><div style='background:rgb(37, 99, 235);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-tick-color-dark](#--mbx-checkbox-tick-color-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-checkbox-tick-color](#--mbx-checkbox-tick-color)</div>             | <div style='text-align:center;margin:auto;'>white</div>                                                                                                                                                                                                           |

## CSS Variables list

<br>

### --mbx-checkbox-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `mbx-checkbox-background-light` and `mbx-checkbox-background-dark`<br><br>

### --mbx-checkbox-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background](#--mbx-checkbox-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](../../global/css-vars.md#--mbx-background-light)</div> |

CheckBox background when dark mode is off<br><br>

### --mbx-checkbox-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                 |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background](#--mbx-checkbox-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](../../global/css-vars.md#--mbx-background-dark)</div> |

CheckBox background when dark mode is on<br><br>

### --mbx-checkbox-background-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `mbx-checkbox-background-hover-light` and `mbx-checkbox-background-hover-dark`<br><br>

### --mbx-checkbox-background-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                            | <div style='text-align:center;margin:auto;'>Default</div>                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-hover](#--mbx-checkbox-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](../../global/css-vars.md#--mbx-background-hover-light)</div> |

CheckBox background when dark mode is off, on hover<br><br>

### --mbx-checkbox-background-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                            | <div style='text-align:center;margin:auto;'>Default</div>                                                                             |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-background-hover](#--mbx-checkbox-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-dark](../../global/css-vars.md#--mbx-background-hover-dark)</div> |

CheckBox background when dark mode is on, on hover<br><br>

### --mbx-checkbox-tick-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `mbx-checkbox-tick-color-light` and `mbx-checkbox-tick-color-dark`<br><br>

### --mbx-checkbox-tick-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-tick-color](#--mbx-checkbox-tick-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgb(37, 99, 235)</div><div style='text-align:center;margin-auto;'><div style='background:rgb(37, 99, 235);margin:auto; width:15px; height:15px;'/></div></div></div> |

CheckBox tick color when dark mode is off<br><br>

### --mbx-checkbox-tick-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-checkbox-tick-color](#--mbx-checkbox-tick-color)</div> | <div style='text-align:center;margin:auto;'>white</div>   |

CheckBox tick color when dark mode is on<br><br>
