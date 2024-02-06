# DatePicker properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div> | <div style='text-align:center;margin:auto;'>CalendarDate</div> | <div style='text-align:center;margin:auto;'>Today date</div> |
| <div style='text-align:center;margin:auto;'>[hideArrows](#hidearrows)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[days](#days)</div> | <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English week labels</div> |
| <div style='text-align:center;margin:auto;'>[months](#months)</div> | <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English months labels</div> |
| <div style='text-align:center;margin:auto;'>[onViewChange](#onviewchange)</div> | <div style='text-align:center;margin:auto;'>(date: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[startYear](#startyear)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today year</div> |
| <div style='text-align:center;margin:auto;'>[startMonth](#startmonth)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today month</div> |
| <div style='text-align:center;margin:auto;'>[fromToday](#fromtoday)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[dayLabel](#daylabel)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[labelClassName](#labelclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[labelProps](#labelprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[onClose](#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

## Props list

<br>

### value

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>CalendarDate</div> | <div style='text-align:center;margin:auto;'>Today date</div> |

Actual selected date - extended from [Calendar component](../../organisms/Calendar/props.md#value)<br><br>

### hideArrows

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

If `true`, hide arrow buttons near the date label - extended from [Calendar component](../../organisms/Calendar/props.md#hideArrows)<br><br>

### days

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English week labels</div> |

Custom days labels - extended from [Calendar component](../../organisms/Calendar/props.md#days)<br><br>

### months

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English months labels</div> |

Custom months labels - extended from [Calendar component](../../organisms/Calendar/props.md#months)<br><br>

### onViewChange

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(date: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |

Callback triggered when the Calendar view (the displayed month) is changed - extended from [Calendar component](../../organisms/Calendar/props.md#onViewChange)<br><br>

### startYear

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today year</div> |

Initial displayed year - extended from [Calendar component](../../organisms/Calendar/props.md#startYear)<br><br>

### startMonth

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today month</div> |

Initial displayed month - extended from [Calendar component](../../organisms/Calendar/props.md#startMonth)<br><br>

### fromToday

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |

If `false`, prevent the user to select a date lower than today date - extended from [Calendar component](../../organisms/Calendar/props.md#fromToday)<br><br>

### dayLabel

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>true</div> |

Show/hide actual day label on top of the calendar - extended from [Calendar component](../../organisms/Calendar/props.md#dayLabel)<br><br>

### labelClassName

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom className applied on the day label component - extended from [Calendar component](../../organisms/Calendar/props.md#labelClassName)<br><br>

### labelProps

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom props applied on the day label component - extended from [Calendar component](../../organisms/Calendar/props.md#labelProps)<br><br>

### onChange

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

Callback triggered when Calendar component input value is changed by the user - extended from [Calendar component](../../organisms/Calendar/props.md#onChange)<br><br>

### onClose

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

Callback triggered when DatePicker modal is closed<br><br>
