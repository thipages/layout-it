# layout-it
Custom elements for building layouts
- `<grid-it />`
- `<center-it />`

## How To Use
- via npm : `npm i layout-it` then use `import from 'layout-it'`;
- within HTML via script tag :
```html
    <!-- ES5 version -->
    <script nomodule src="min.js"></script>
    <!-- ES6 version -->
    <script type="module" src="index.min.js"></script>
```

## `<grid-it />`
Layout element for building flex grids
- extends `HTMLElement`
- based on `display:grid` style
- with three custom attributes `rows`, `columns` and `areas` precursors of corresponding `grid-template-xxx` style properties.

Compared to `grid-template-xxx` style properties, `rows`, `columns` and `areas` must be declared with the following rules
- expressions in`rows` and `columns` should not contain spaces, eg `columns="repeat(3,1fr)"`, not `columns="repeat(3, 1fr)"`
- `areas` has been simplified compared to `grid-template-areas` and it is just a sequence of letters or digits separated by (multiple) spaces, eg `areas="a b c d"`, not  `areas="'a' 'b' 'c' 'd'"`. The sequence of letters match the grid children order. 
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
```
<details>
 <summary>MORE EXAMPLES</summary>
 
```html
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
        <div>Right</div>
        <div>Footer</div>
    </grid-it>
```
</details>

## `<center-it />`
Layout element for content centering
- extends `HTMLElement`
- based on `display:flex;justify-content:center;align-items:center` style
- no custom attribute

### Examples
```html
    <center-it>I am centered</center-it>
```
<details>
  <summary>Styles, Dependencies and Polyfill</summary>
  
  ### Default styles
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
  
  ### Dependency
  - [ustyler](https://github.com/WebReflection/ustyler) for inserting the default style in the head tag.
  
  ### custom-elements polyfills
  See [WebReflection/custom-elements](https://github.com/WebReflection/custom-elements#how-to-polyfill)  
</details>






