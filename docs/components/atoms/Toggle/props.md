# Toggle

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[onIcon](#onicon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[icon](#icon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[offIcon](#officon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

## Props list

<br>

### value

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

toggle status (true - on/false - off)<br><br>

### onChange

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

calllback triggered when Toggle status changes<br><br>

### onIcon

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

custom toggle `on` icon (`value` === `true`)<br><br>

### icon

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

custom toggle icon, used as a default icon<br><br>

### offIcon

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

custom toggle `off` icon (`value` === `false`)<br><br>
