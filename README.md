# layout-it
Custom elements for building layouts
- `<grid-it />`
- `<center-it />`

## `<grid-it />`
Layout element for building flex grids
- extends `HTMLElement`
- based on `display:grid` style
- with three custom attributes `rows`, `cols` and `areas` precursors of corresponding `grid-template-xxx` style properties.
### Examples
```html
    <!-- 3 rows header/footer layout -->
    <grid-it style="height:100vh"
             rows="auto 1fr auto"
             columns="1fr"
             areas="a b c">
        <div>Header</div>
        <div>Main</div>
        <div>Footer</div>
    </grid-it>

    <!-- 3 rows header/footer layout with left column
         Note : expressions should not contain space characters
                eg minmax(min-content, 33%) will not work -->
    <grid-it style="height:100vh"
             rows="auto 1fr auto"
             columns="minmax(min-content,33%) 1fr"
             areas="a a b c d d">
        <div>Header</div>
        <div>Left</div>
        <div>Main</div>
        <div>Footer</div>
    </grid-it>
    <!-- 3 rows header/footer with 3 main equal columns
         Note : attributes supports multiple spaces
                except for expression (see upper)-->
    <grid-it style="height:100vh"
             rows="auto 1fr auto"
             columns="repeat(3,1fr)"
             areas="a a a   b c d   e e e">
        <div>Header</div>
        <div>Left</div>
        <div>Main</div>
        <div>Right Menu</div>
        <div>Main</div>
        <div>Footer</div>
    </grid-it>
```

## `<center-it />`
Layout element for content centering
- extends `HTMLElement`
- based on `display:flex;justify-content:center;align-items:center` style
- no custom attribute

### Examples
```html
    <center-it>I am centered</center-it>
```


## Default styles
**_layout-it_** uses a default style
```css
    html, body {
            padding:0;
            margin:0;
        }
    *, *::before, *::after {
        box-sizing: border-box;
    }
```
It should be possible to override it.

## Dependency
- [ustyler](https://github.com/WebReflection/ustyler) for inserting the default style in the head tag.

## custom-elements polyfills
See [WebReflection/custom-elements](https://github.com/WebReflection/custom-elements#how-to-polyfill)









