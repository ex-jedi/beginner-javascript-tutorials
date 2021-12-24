![](https://res.cloudinary.com/wesbos/image/upload/v1574876851/BJS/BJS-Social-Share.png)

# Beginner JavaScript

These are the starter files and solutions to the [Beginner JavaScript](https://BeginnerJavaScript.com) course

## Function Definition Diagram

![Description of javaScript function](function-definition.jpg)

## Community Resources

Please feel free to add your blog post, videos, notes, or anything else related to the course :)

- [Soumya Ranjan Mohanty](https://github.com/geekysrm)'s [Github repo](https://github.com/geekysrm/javascript-notes) with notes and lessons learnt, along with [full notes here](https://notes.soumya.dev/javascript).
- [Linda has documented all her excercises on Codepen](https://twitter.com/lindakatcodes/status/1331702581220020225)
- [Cesar Gomez](https://github.com/CsarGomez) have a [GitHub repo](https://github.com/CsarGomez/beginnersJavascriptNotes) with notes for all the modules completed including exercises in [CopePen](https://codepen.io/collection/XjJQYz) other modules will be uploaded a soon as i finished each one

## My Notes

<https://wesbos.com/javascript>

## Functions

- Arrow functions are anonymous so they need to be attached to a variable.
  <https://wesbos.com/javascript/02-functions/different-ways-to-declare-functions/#arrow-functions>

- JavaScript has what is referred to as lexical scoping or static scoping. Variable look-up or scope look-up happens where the functions are defined not where they are run.
  <https://wesbos.com/javascript/03-the-tricky-bits/scope/#lexical-and-static-scoping>

- Functions declared with the `function` keyword are hoisted (moved to the top of the file).
  <https://wesbos.com/javascript/03-the-tricky-bits/hoisting/#hoisting-function-declarations>

## Variables

- `const` and `let` variables are block scoped
- `var` variables are not block scoped, they are function scoped.
- `const` and `let` variables are not available on the `window` object but `var` variables are. For example...

  - `const myConst = true; window.myConst; undefined`
  - `let myLet = true; window.myLet; undefined`
  - `var myVar = true; window.myVar; true`

  - Variable declarations are hoisted, but values aren't.
    <https://wesbos.com/javascript/03-the-tricky-bits/hoisting/#variable-hoisting>
