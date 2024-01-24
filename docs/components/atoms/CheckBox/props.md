# CheckBox

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>             | <div style='text-align:center;margin:auto;'>Type</div>                        | <div style='text-align:center;margin:auto;'>Default</div>            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div>       | <div style='text-align:center;margin:auto;'>boolean</div>                     | <div style='text-align:center;margin:auto;'>false</div>              |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>/</div>                  |
| <div style='text-align:center;margin:auto;'>[icon](#icon)</div>         | <div style='text-align:center;margin:auto;'>JSX.Element</div>                 | <div style='text-align:center;margin:auto;'>Internal tick icon</div> |

<br>

## Props list

<br>

### value

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div>   |

Checkbox initial value (checked / unchecked)<br><br>

### onChange

<br>

| <div style='text-align:center;margin:auto;'>Type</div>                        | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>/</div>       |

callback called when Checkbox is clicked (when its state changes)<br><br>

### icon

<br>

| <div style='text-align:center;margin:auto;'>Type</div>        | <div style='text-align:center;margin:auto;'>Default</div>            |
| ------------------------------------------------------------- | -------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>Internal tick icon</div> |

custom tick icon (if not set, the default one will be used)<br><br>
