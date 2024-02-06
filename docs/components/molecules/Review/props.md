# Review properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[user](#user)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[description](#description)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[icon](#icon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[url](#url)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[logo](#logo)</div> | <div style='text-align:center;margin:auto;'>`default` &#124; `link` &#124; `facebook` &#124; `twitter` &#124; `google` &#124; `linkedin` &#124; `github`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[max](#max)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>5</div> |
| <div style='text-align:center;margin:auto;'>[vertical](#vertical)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[rate](#rate)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |
| <div style='text-align:center;margin:auto;'>[rateType](#ratetype)</div> | <div style='text-align:center;margin:auto;'>`star`&#124;`circle`</div> | <div style='text-align:center;margin:auto;'>'star'</div> |

<br>

## Props list

<br>

### user

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Username displayed above the review description, at the right of the icon<br><br>

### description

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Review description displayed below the review username, at the top of the rate<br><br>

### icon

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

Icon showed inside the component<br><br>

### url

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Review external url. If set, an icon will be showed at the top right of the review<br><br>

### logo

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`default` &#124; `link` &#124; `facebook` &#124; `twitter` &#124; `google` &#124; `linkedin` &#124; `github`</div> | <div style='text-align:center;margin:auto;'>/</div> |

Social icon type, showed at the top right of the container. Supports popular web services like Facebook, Twitter, Google and so on. Proviced icon list will grow up time by time and will be updated with the latest web services, to keep it usable for the future.<br><br>

### max

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>5</div> |

max vote (max number of icons displayed) - extended from [Rater component](../../atoms/Rater/props.md#max)<br><br>

### vertical

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |

if `true`, rate icons will be showed vertically - extended from [Rater component](../../atoms/Rater/props.md#vertical)<br><br>

### rate

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |

actual vote - extended from [Rater component](../../atoms/Rater/props.md#rate)<br><br>

### rateType

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`star`&#124;`circle`</div> | <div style='text-align:center;margin:auto;'>'star'</div> |

vote icons type - extended from [Rater component](../../atoms/Rater/props.md#rateType)<br><br>
