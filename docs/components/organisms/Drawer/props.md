# [Drawer](index.md) properties

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
| <div style='text-align:center;margin:auto;'>[closeOnClickOutside](#closeonclickoutside)</div> | <div style='text-align:center;margin:auto;'>`boolean`</div> | <div style='text-align:center;margin:auto;'>true</div> |

<br>

## Props list

<br>

<br>

### position

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`left` &#124; `right` &#124; `top` &#124; `bottom` &#124; `top-left` &#124; `top-right` &#124; `bottom-left` &#124; `bottom-right`</div> | <div style='text-align:center;margin:auto;'>`left`</div> |

<br>

Drawer position, relative to the entire window

<br>

<br>

### onClose

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

callback triggered when Drawer is closed

<br>

<br>

### children

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`(JSX.Element` &#124; `string`) &#124; (JSX.Element` &#124; `string`)[]</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Drawer content

<br>

<br>

### closeOnClickOutside

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`boolean`</div> | <div style='text-align:center;margin:auto;'>true</div> |

<br>

If `false`, the drawer won't be closed when clicking outside of it

<br>
