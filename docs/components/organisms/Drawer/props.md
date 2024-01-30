# Drawer

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[position](#position)</div> | <div style='text-align:center;margin:auto;'>`left` &#124; `right` &#124; `top` &#124; `bottom` &#124; `top-left` &#124; `top-right` &#124; `bottom-left` &#124; `bottom-right`</div> | <div style='text-align:center;margin:auto;'>`left`</div> |
| <div style='text-align:center;margin:auto;'>[onClose](#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[children](#children)</div> | <div style='text-align:center;margin:auto;'>`(JSX.Element` &#124; `string`) &#124; (JSX.Element` &#124; `string`)[]</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

## Props list

<br>

### position

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`left` &#124; `right` &#124; `top` &#124; `bottom` &#124; `top-left` &#124; `top-right` &#124; `bottom-left` &#124; `bottom-right`</div> | <div style='text-align:center;margin:auto;'>`left`</div> |

Drawer position, relative to the entire window<br><br>

### onClose

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

callback triggered when Drawer is closed<br><br>

### children

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`(JSX.Element` &#124; `string`) &#124; (JSX.Element` &#124; `string`)[]</div> | <div style='text-align:center;margin:auto;'>/</div> |

Drawer content<br><br>
