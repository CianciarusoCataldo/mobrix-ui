# Table

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onClick](#onclick)</div> | <div style='text-align:center;margin:auto;'>(row: number, column: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[propsCallback](#propscallback)</div> | <div style='text-align:center;margin:auto;'>(row: number, column: number) => Record<string, any></div> | <div style='text-align:center;margin:auto;'>() => ({})</div> |

<br>

## Props list

<br>

### onClick

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(row: number, column: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

Callback triggered when a Table cell is clicked<br><br>

### propsCallback

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(row: number, column: number) => Record<string, any></div> | <div style='text-align:center;margin:auto;'>() => ({})</div> |

A function to add custom props depending on Table row and column<br><br>
