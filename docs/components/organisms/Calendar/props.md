# Calendar properties

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

<br>

## Props list

<br>

### value

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>CalendarDate</div> | <div style='text-align:center;margin:auto;'>Today date</div> |

Actual selected date<br><br>

### hideArrows

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

If `true`, hide arrow buttons near the date label<br><br>

### days

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English week labels</div> |

Custom days labels<br><br>

### months

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English months labels</div> |

Custom months labels<br><br>

### onViewChange

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(date: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |

Callback triggered when the Calendar view (the displayed month) is changed<br><br>

### startYear

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today year</div> |

Initial displayed year<br><br>

### startMonth

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today month</div> |

Initial displayed month<br><br>

### fromToday

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |

If `false`, prevent the user to select a date lower than today date<br><br>

### dayLabel

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>true</div> |

Show/hide actual day label on top of the calendar<br><br>

### labelClassName

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom className applied on the day label component<br><br>

### labelProps

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom props applied on the day label component<br><br>

### onChange

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

Callback triggered when Calendar component input value is changed by the user<br><br>
