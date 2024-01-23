# MoBrix-ui shared props

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                           | <div style='text-align:center;margin:auto;'>Type</div>                | <div style='text-align:center;margin:auto;'>Default</div> |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[key](#key)</div>                         | <div style='text-align:center;margin:auto;'>string</div>              | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[className](#classname)</div>             | <div style='text-align:center;margin:auto;'>string</div>              | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[dark](#dark)</div>                       | <div style='text-align:center;margin:auto;'>boolean</div>             | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[hide](#hide)</div>                       | <div style='text-align:center;margin:auto;'>boolean</div>             | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[id](#id)</div>                           | <div style='text-align:center;margin:auto;'>string</div>              | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[shadow](#shadow)</div>                   | <div style='text-align:center;margin:auto;'>boolean</div>             | <div style='text-align:center;margin:auto;'>true</div>    |
| <div style='text-align:center;margin:auto;'>[style](#style)</div>                     | <div style='text-align:center;margin:auto;'>CSSProperties</div>       | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[unstyled](#unstyled)</div>               | <div style='text-align:center;margin:auto;'>boolean</div>             | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[animated](#animated)</div>               | <div style='text-align:center;margin:auto;'>boolean</div>             | <div style='text-align:center;margin:auto;'>true</div>    |
| <div style='text-align:center;margin:auto;'>[background](#background)</div>           | <div style='text-align:center;margin:auto;'>boolean</div>             | <div style='text-align:center;margin:auto;'>true</div>    |
| <div style='text-align:center;margin:auto;'>[hover](#hover)</div>                     | <div style='text-align:center;margin:auto;'>boolean</div>             | <div style='text-align:center;margin:auto;'>true</div>    |
| <div style='text-align:center;margin:auto;'>[disabled](#disabled)</div>               | <div style='text-align:center;margin:auto;'>boolean</div>             | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[additionalProps](#additionalprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

## Props list

<br>

<br>

## key

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)

<br>

## className

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

custom className applied on main container

<br>

## dark

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Enable/disable dark mode

<br>

## hide

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Hide/show component

<br>

## id

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

[id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)

<br>

## shadow

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div>    |

<br>

Enable/disable shadow behind component

<br>

## style

<br>

| <div style='text-align:center;margin:auto;'>Type</div>          | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>CSSProperties</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Css inline properties applied on main container

<br>

## unstyled

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)

<br>

## animated

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div>    |

<br>

Enable/disable component animations

<br>

## background

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div>    |

<br>

Enable/disable component background

<br>

## hover

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div>    |

<br>

Enable/disable component hover standard styles

<br>

## disabled

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

If true, disable the component. The effect may vary depending on the component type

<br>

## additionalProps

<br>

| <div style='text-align:center;margin:auto;'>Type</div>                | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Custom additional properties, applied to the component
