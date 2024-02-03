# Card

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                        | <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background](#--mbx-card-background)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background-light](#--mbx-card-background-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-card-background](#--mbx-card-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #fff, #ededee, #e6e7e7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #fff, #ededee, #e6e7e7);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background-dark](#--mbx-card-background-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-card-background](#--mbx-card-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text-color](#--mbx-card-text-color)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text-color-light](#--mbx-card-text-color-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-card-text-color](#--mbx-card-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](../../global/css-vars.md#--mbx-text-color-light)</div>                                                                                                                                                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text-color-dark](#--mbx-card-text-color-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-card-text-color](#--mbx-card-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](../../global/css-vars.md#--mbx-text-color-dark)</div>                                                                                                                                                                                                           |

## CSS Variables list

<br>

### --mbx-card-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-card-background-light` and `--mbx-card-background-dark`<br><br>

### --mbx-card-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background](#--mbx-card-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #fff, #ededee, #e6e7e7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #fff, #ededee, #e6e7e7);margin:auto; width:15px; height:15px;'/></div></div></div> |

Card background when dark mode is `off`<br><br>

### --mbx-card-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-background](#--mbx-card-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div> |

Card background when dark mode is `on`<br><br>

### --mbx-card-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-card-text-color-light` and `--mbx-card-text-color-dark`<br><br>

### --mbx-card-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                   |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text-color](#--mbx-card-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](../../global/css-vars.md#--mbx-text-color-light)</div> |

Card text color when dark mode is `off`<br><br>

### --mbx-card-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                 |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-card-text-color](#--mbx-card-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](../../global/css-vars.md#--mbx-text-color-dark)</div> |

Card text color when dark mode is `on`<br><br>
