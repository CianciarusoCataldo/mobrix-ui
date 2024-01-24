# FormField

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                                            | <div style='text-align:center;margin:auto;'>Fallback</div>                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background](#mbx-formfield-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-dark](#mbx-formfield-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[mbx-formfield-background](#mbx-formfield-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](global-css-vars.md#mbx-background-dark)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-light](#mbx-formfield-background-light)</div>             | <div style='text-align:center;margin:auto;'>[mbx-formfield-background](#mbx-formfield-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-light](global-css-vars.md#mbx-background-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-color](#mbx-formfield-text-color)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-color-light](#mbx-formfield-text-color-light)</div>             | <div style='text-align:center;margin:auto;'>[mbx-formfield-text-color](#mbx-formfield-text-color)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-color-dark](#mbx-formfield-text-color-dark)</div>               | <div style='text-align:center;margin:auto;'>[mbx-formfield-text-color](#mbx-formfield-text-color)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover](#mbx-formfield-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover-light](#mbx-formfield-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[mbx-formfield-background-hover](#mbx-formfield-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-background-hover-dark](#mbx-formfield-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[mbx-formfield-background-hover](#mbx-formfield-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-color-hover](#mbx-formfield-text-color-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-color-hover-light](#mbx-formfield-text-color-hover-light)</div> | <div style='text-align:center;margin:auto;'>[mbx-formfield-text-color-hover](#mbx-formfield-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-text-color-hover-dark](#mbx-formfield-text-color-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[mbx-formfield-text-color-hover](#mbx-formfield-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)</div>   |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border](#mbx-formfield-error-border)</div>                     | <div style='text-align:center;margin:auto;'>/</div>                                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border-light](#mbx-formfield-error-border-light)</div>         | <div style='text-align:center;margin:auto;'>[mbx-formfield-error-border](#mbx-formfield-error-border)</div>         | <div style='text-align:center;margin:auto;'>red</div>                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-border-dark](#mbx-formfield-error-border-dark)</div>           | <div style='text-align:center;margin:auto;'>[mbx-formfield-error-border](#mbx-formfield-error-border)</div>         | <div style='text-align:center;margin:auto;'>red</div>                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text](#mbx-formfield-error-text)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                             |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text-light](#mbx-formfield-error-text-light)</div>             | <div style='text-align:center;margin:auto;'>[mbx-formfield-error-text](#mbx-formfield-error-text)</div>             | <div style='text-align:center;margin:auto;'>red</div>                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-formfield-error-text-dark](#mbx-formfield-error-text-dark)</div>               | <div style='text-align:center;margin:auto;'>[mbx-formfield-error-text](#mbx-formfield-error-text)</div>             | <div style='text-align:center;margin:auto;'>red</div>                                                                           |

## CSS Variables list

<br>

### --mbx-formfield-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br><br>

### --mbx-formfield-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                              | <div style='text-align:center;margin:auto;'>Default</div>                                                         |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-background](#mbx-formfield-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](global-css-vars.md#mbx-background-dark)</div> |

<br><br>

### --mbx-formfield-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                              | <div style='text-align:center;margin:auto;'>Default</div>                                                           |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-background](#mbx-formfield-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](global-css-vars.md#mbx-background-light)</div> |

<br><br>

### --mbx-formfield-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br><br>

### --mbx-formfield-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                              | <div style='text-align:center;margin:auto;'>Default</div>                                                           |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-text-color](#mbx-formfield-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)</div> |

<br><br>

### --mbx-formfield-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                              | <div style='text-align:center;margin:auto;'>Default</div>                                                         |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-text-color](#mbx-formfield-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)</div> |

<br><br>

### --mbx-formfield-background-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br><br>

### --mbx-formfield-background-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                       |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-background-hover](#mbx-formfield-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light)</div> |

<br><br>

### --mbx-formfield-background-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                       |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-background-hover](#mbx-formfield-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light)</div> |

<br><br>

### --mbx-formfield-text-color-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br><br>

### --mbx-formfield-text-color-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                       |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-text-color-hover](#mbx-formfield-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light)</div> |

<br><br>

### --mbx-formfield-text-color-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                     |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-text-color-hover](#mbx-formfield-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)</div> |

<br><br>

### --mbx-formfield-error-border

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br><br>

### --mbx-formfield-error-border-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                  | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-error-border](#mbx-formfield-error-border)</div> | <div style='text-align:center;margin:auto;'>red</div>     |

<br><br>

### --mbx-formfield-error-border-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                  | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-error-border](#mbx-formfield-error-border)</div> | <div style='text-align:center;margin:auto;'>red</div>     |

<br><br>

### --mbx-formfield-error-text

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br><br>

### --mbx-formfield-error-text-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                              | <div style='text-align:center;margin:auto;'>Default</div> |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-error-text](#mbx-formfield-error-text)</div> | <div style='text-align:center;margin:auto;'>red</div>     |

<br><br>

### --mbx-formfield-error-text-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                              | <div style='text-align:center;margin:auto;'>Default</div> |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-formfield-error-text](#mbx-formfield-error-text)</div> | <div style='text-align:center;margin:auto;'>red</div>     |

<br><br>
