# Modal

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                                | <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#--mbx-modal-background)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                       | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                   |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background-light](#--mbx-modal-background-light)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#--mbx-modal-background)</div>       | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgba(0, 0, 0, 0.8)</div><div style='text-align:center;margin-auto;'><div style='background:rgba(0, 0, 0, 0.8);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background-dark](#--mbx-modal-background-dark)</div>         | <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#--mbx-modal-background)</div>       | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgba(0, 0, 0, 0.8)</div><div style='text-align:center;margin-auto;'><div style='background:rgba(0, 0, 0, 0.8);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color](#--mbx-modal-x-color)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                       | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                   |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-light](#--mbx-modal-x-color-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color](#--mbx-modal-x-color)</div>             | <div style='text-align:center;margin:auto;'>white</div>                                                                                                                                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-dark](#--mbx-modal-x-color-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color](#--mbx-modal-x-color)</div>             | <div style='text-align:center;margin:auto;'>white</div>                                                                                                                                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover](#--mbx-modal-x-color-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                       | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                   |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover-light](#--mbx-modal-x-color-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover](#--mbx-modal-x-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dismissablecard-x-color-hover-light](../../molecules/DismissableCard/css-vars.md#--mbx-dismissablecard-x-color-hover-light)</div>                                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover-dark](#--mbx-modal-x-color-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover](#--mbx-modal-x-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dismissablecard-x-color-hover-dark](../../molecules/DismissableCard/css-vars.md#--mbx-dismissablecard-x-color-hover-dark)</div>                                                                                    |

## CSS Variables list

<br>

### --mbx-modal-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-modal-background-light` and `--mbx-modal-background-dark`<br><br>

### --mbx-modal-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#--mbx-modal-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgba(0, 0, 0, 0.8)</div><div style='text-align:center;margin-auto;'><div style='background:rgba(0, 0, 0, 0.8);margin:auto; width:15px; height:15px;'/></div></div></div> |

Modal background when [dark](../../global/props.md#dark) mode is `off`<br><br>

### --mbx-modal-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-background](#--mbx-modal-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>rgba(0, 0, 0, 0.8)</div><div style='text-align:center;margin-auto;'><div style='background:rgba(0, 0, 0, 0.8);margin:auto; width:15px; height:15px;'/></div></div></div> |

Modal background when [dark](../../global/props.md#dark) mode is `on`<br><br>

### --mbx-modal-x-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-modal-x-color-light` and `--mbx-modal-x-color-dark`<br><br>

### --mbx-modal-x-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color](#--mbx-modal-x-color)</div> | <div style='text-align:center;margin:auto;'>white</div>   |

Modal x icon color when [dark](../../global/props.md#dark) mode is `off`<br><br>

### --mbx-modal-x-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color](#--mbx-modal-x-color)</div> | <div style='text-align:center;margin:auto;'>white</div>   |

Modal x icon color when [dark](../../global/props.md#dark) mode is `on`<br><br>

### --mbx-modal-x-color-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-modal-x-color-hover-light` and `--mbx-modal-x-color-hover-dark`<br><br>

### --mbx-modal-x-color-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                            |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover](#--mbx-modal-x-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dismissablecard-x-color-hover-light](../../molecules/DismissableCard/css-vars.md#--mbx-dismissablecard-x-color-hover-light)</div> |

Modal x icon color when [dark](../../global/props.md#dark) mode is `off`, on `hover`<br><br>

### --mbx-modal-x-color-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                          |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover](#--mbx-modal-x-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-dismissablecard-x-color-hover-dark](../../molecules/DismissableCard/css-vars.md#--mbx-dismissablecard-x-color-hover-dark)</div> |

Modal x icon color when [dark](../../global/props.md#dark) mode is `on`, on `hover`<br><br>
