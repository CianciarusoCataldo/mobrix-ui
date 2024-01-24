# Counter

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                   | <div style='text-align:center;margin:auto;'>Type</div>                       | <div style='text-align:center;margin:auto;'>Default</div>  |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div>             | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div>       | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[readOnly](#readonly)</div>       | <div style='text-align:center;margin:auto;'>boolean</div>                    | <div style='text-align:center;margin:auto;'>false</div>    |
| <div style='text-align:center;margin:auto;'>[min](#min)</div>                 | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[max](#max)</div>                 | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |

<br>

## Props list

<br>

### value

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div>       |

numeric input value<br><br>

### onChange

<br>

| <div style='text-align:center;margin:auto;'>Type</div>                       | <div style='text-align:center;margin:auto;'>Default</div>  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

callback triggered when numeric input changes<br><br>

### placeholder

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div>       |

label showed when no value is set<br><br>

### readOnly

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div>   |

if true, component value can only be set with `value` parameter<br><br>

### min

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div>       |

min allowed value<br><br>

### max

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div>       |

max allowed value<br><br>
