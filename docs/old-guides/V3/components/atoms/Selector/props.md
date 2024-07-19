# [Selector](index.md) properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |
| <div style='text-align:center;margin:auto;'>[elements](#elements)</div> | <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>[]</div> |
| <div style='text-align:center;margin:auto;'>[optionClassName](#optionclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

## Props list

<br>

<br>

### value

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |

<br>

option index actually displayed

<br>

<br>

### elements

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>[]</div> |

<br>

selector options array, every element must be a string

<br>

<br>

### optionClassName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

className applied on every options inside the selector

<br>

<br>

### onChange

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

Callback triggered when Selector component input value is changed by the user

<br>
