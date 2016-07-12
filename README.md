# a11y-patterns

## tabindex 101
The `tabindex` attribute "enables focus to be moved via keyboard to HTML elements". In old specifications, `tabindex` was only valid on the following elements:

- `a`
- `area`
- `button`
- `input`
- `object`
- `select`
- `textarea`

With the introduction of WAI-ARIA however, `tabindex` is now applicable to all renderable HTML elements. The rules governing tabindex are as follows:

- Tab and Shift + Tab key move focus among widgets and standard HTML controls
- Widgets with `tabindex = 0` will be added to the tab sequence based on document order
- Widgets with `tabindex` > 0 will be added to the tab sequence based on the tabindex value
- Widgets with `tabindex` < 0 are removed from the tab sequence, but can still received keyboard focus programatically. 

When a widget has keyboard focus, Spacebar, Enter, and other keyboard commands can be used to navigate within a widget, or trigger a function associated with a widget. Best practice suggests to use the same keybindings as are used within the host OS.

Use JavaScript's `focus()` method to move focus programatically, or use the `activedescendant` ARIA property on the widget container to indicate which element must have focus.

However, the W3C specifcation states that:

> Those elements that do not support the `tabindex` attribute or support it and assign it a value of "0" are navigated next. These elements are navigated in the order they appear in the character stream.

Essentially, any element given a `tabindex` property of 0 may receive focus. You may have used this technique to implement a "Skip to content" link in order to allow users to skip over elements straight to the meat of the page.

## Browser behaviour notes
### Chrome
- Includes links in its normal tab-order

### Safari
- By default, Safari will ignore links: only elements with an explicit `tabindex`, or "natural" elements such as a button or input. However, adding the option key will include links. 

### Firefox
- As with Safari, Firefox will ignore links when navigating through the document with the tabkey. The "Full Keyboard Access" property under the Keyboard preferences menu needs to be changed from "Text boxes and lists only" to "All Controls". 
