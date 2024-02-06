# DismissableCard properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onClose](#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[alwaysVisible](#alwaysvisible)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[header](#header)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[body](#body)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footer](#footer)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noDivider](#nodivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noTopDivider](#notopdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noBottomDivider](#nobottomdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[children](#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerClassName](#headerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[bodyClassName](#bodyclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footerClassName](#footerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerProps](#headerprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[bodyProps](#bodyprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footerProps](#footerprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

## Props list

<br>

### onClose

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

Callback triggered when the X icon is clicked<br><br>

### alwaysVisible

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |

If `true`, the DismissableCard won't disappear if the X icon is clicked (can be hidden with `hide` shared prop)<br><br>

### header

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Card header content - extended from [Card component](../../molecules/Card/props.md#header)<br><br>

### body

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Card body content - extended from [Card component](../../molecules/Card/props.md#body)<br><br>

### footer

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Card footer content - extended from [Card component](../../molecules/Card/props.md#footer)<br><br>

### noDivider

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

If `true`, hide all dividers - extended from [Card component](../../molecules/Card/props.md#noDivider)<br><br>

### noTopDivider

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

If `true`, hide the top divider, between header and body - extended from [Card component](../../molecules/Card/props.md#noTopDivider)<br><br>

### noBottomDivider

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

If `true`, hide the top divider, between body and footer - extended from [Card component](../../molecules/Card/props.md#noBottomDivider)<br><br>

### children

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

Card content - extended from [Card component](../../molecules/Card/props.md#children)<br><br>

### headerClassName

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom classname applied on the Card header - extended from [Card component](../../molecules/Card/props.md#headerClassName)<br><br>

### bodyClassName

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom classname applied on the Card body - extended from [Card component](../../molecules/Card/props.md#bodyClassName)<br><br>

### footerClassName

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom classname applied on the Card footer - extended from [Card component](../../molecules/Card/props.md#footerClassName)<br><br>

### headerProps

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom props applied on the Card header - extended from [Card component](../../molecules/Card/props.md#headerProps)<br><br>

### bodyProps

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom props applied on the Card body - extended from [Card component](../../molecules/Card/props.md#bodyProps)<br><br>

### footerProps

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom props applied on the Card footer - extended from [Card component](../../molecules/Card/props.md#footerProps)<br><br>
