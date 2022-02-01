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

## Debugging

- Console <https://wesbos.com/javascript/02-functions/debugging-tools/#console-debugging>
- Breakpoints <https://wesbos.com/javascript/02-functions/debugging-tools/#breakpoints>

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

## Closures

<https://wesbos.com/javascript/03-the-tricky-bits/closures/#examples-of-closures>

- The win function inside the createGame function can still access the score variable of the outer function scope even after the createGame() function has been 'closed over'.
- Useful for making 'private variables'.

  ```javascript
  function createGame(gameName) {
    let score = 0;
    function win() {
      score++;
      return `Your ${gameName} score is ${score}`;
    }
    return win;
  }

  const footballGame = createGame('Football');
  const tennisGame = createGame('Tennis');
  // Attaches win function to the variables. Outer variable score is available to the inner win function.
  footballGame();
  tennisGame();

  \\ Both function calls will have access to a private score variable.
  ```

## The Navigator Object

- The navigator is sort of just a higher level thing than the window.
- It gives information not just about the browser, but the device itself, the device that it is on.
- Including things like web cam and audio access, battery level, GPS coordinates.
- Things that are device specific will live on the navigator.

## The Window Object

- The window object is everything about the currently opened window. That includes:

  - the browser bar
  - the tabs
  - the scroll bar etc.

- The window is where global variables are stored, as well as helpful properties like `window.location`.

## Introduction The DOM

- Intro
  <https://wesbos.com/javascript/04-the-dom/introduction-to-the-dom/#the-document-object-introduction>

- The document is responsible for everything from the opening `<html>` tag to the closing `</html>` tag.
- The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

- The DOM allows us to interact with the Document via JavaScript.

  - We can do things like listen for clicks and scrolls.
  - We can add, move, remove elements from that page or things like text, images, etc.
  - We can add and remove CSS classes from elements which can trigger animations.
  - We can fetch new data.
  - We can play music and video.
  - We can add any type of interaction to the page.

    - that is done by writing JavaScript that interfaces with the DOM (the things that are on the page, the elements on the page).

# Selecting elements

    - querySelector can be used on any element. <https://wesbos.com/javascript/04-the-dom/selecting-elements/#searching-inside-already-selected-elements>

# Adding Text

- textContent shows hidden nodes and elements. innerText is aware of styling and shows only actual text. <https://wesbos.com/javascript/04-the-dom/element-properties-and-methods/#textcontent-and-innertext>

- insertAdjacentText, best way to add text to elements. <<https://wesbos.com/javascript/04-the-dom/element-properties-and-methods/#insertadjacenttext-and-insertadjacentelemen>

# Data Attributes

- Data attributes are accessed with `.dataset`.
  <https://wesbos.com/javascript/04-the-dom/built-in-and-custom-data-attributes/#data-attributes>

# Creating & Adding HTML

- Create HTML with `document.createElement()`.
  <https://wesbos.com/javascript/04-the-dom/creating-html>
  <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement>

- Several ways to add elements to the page. <https://wesbos.com/javascript/04-the-dom/creating-html/#append-method>

  - Add elements to page with `appendChild()`. <https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild>
  - Or use newer `.append()`. <https://developer.mozilla.org/en-US/docs/Web/API/Element/append>

- Add elements in specific places with `insertAdjacentElement()`. <https://wesbos.com/javascript/04-the-dom/creating-html/#insertadjacentelement-method>
- <https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML>

# Creating HTML with Strings

- Backticks can be used to create HTML with strings. <https://wesbos.com/javascript/04-the-dom/html-from-strings-and-xss>

  ```javascript
  const myHTML =`
    <div class="wrapper">
      <h1>Hello there</h1>
    </div>
  ```

- Backticks, variables and interpolation can be used for templating HTML.

  ```javascript
  const width = 500;
  const src = `https://picsum.photos/${width}`;
  const desc = 'A Pic of Something';
  const myHTML = `
  <div class="wrapper">
    <h1>Hello ${desc}</h1>
    <img src="${src}" alt="${desc}" />
  </div>
  `;
  ```

- HTML added this way is still a string, it doesn't really create elements.

  ```javascript
  console.log(typeof myHTML); // Returns 'string'
  myHTML.classList.add('hello'); // Doesn't work as it's not really an element.
  ```

- You have to pull it out then do stuff with it.

  ```javascript
  const itemImage = document.querySelector('.wrapper img');
  itemImage.classList.add('special');
  ```

- Strings can be converted into a DOM element with .createRange().

  ```javascript
  const myFragment = document.createRange().createContextualFragment(myHTML);
  console.log(myFragment);
  ```

- Fragment can then be added to the DOM with appendChild(), append() or insertAdjacentElement() etc.

  ```javascript
  document.body.append(myFragment);
  ```

- **Security Concerns - XSS (Cross Site Scripting)**

  - Cross Site scripting is when a third party injects a script tag through a security hole.

  - Say the description above was a user input. They could add executabe code to the page

  ```javascript
  const desc = `A Pic of Something <img onload="alert('Hacked!')" src="https://picsum.photos/50">`;
  ```

  - Above is a pretty harmless examples, but it can leave sites open to serious attacks. <https://wesbos.com/javascript/04-the-dom/html-from-strings-and-xss/#xss-cross-site-scripting>

# Traversing the DOM

- Traversing the DOM to find parents, children, sibling etc. nodes and elements. <<https://wesbos.com/javascript/04-the-dom/traversing-and-removing-nodes/#properties-to-work-with-nodes-and-eleme>

- `$0` can be used in the console to get the last element selected in the elements tab.
- These will include nodes.

  ```javascript
  el.childNodes;
  el.firstChild;
  el.nextSibling;
  el.parentNode;
  el.parentElement;
  ```

- These will ignore nodes

  ```javascript
  el.firstElementChild;
  el.lastElementChild;
  el.previousElementSibling;
  el.nextElementSibling;
  el.children;
  ```

- Best to double check as it's not obvious from the names which ones include or ignore nodes

# Removing Elements

- Use `el.remove()`. <https://wesbos.com/javascript/04-the-dom/traversing-and-removing-nodes/#removing-elements>

- Elements may still be accessed after removal.

  ```javascript
  const para = document.createElement('p');
  para.textContent = 'Soon I will be gone!';
  document.body.append(para);
  para.remove();
  console.log(para); // Logs <p>Soon I will be gone!</p>
  ```

## Events

# Event Listeners

- <https://wesbos.com/javascript/05-events/event-listener>
- You can attach event listeners to all elements, as well as the document and the window.
- Takes three arguments. The event, a callback function and an optional options object.

  - `addEventListener(type, listener, options);`
  - A callback function is just a function one that will then be called at a later point in time.
    -The callback can be any type of function. Named, anonymous or arrow.

  ```html
  <button class="butts">Click Me!</button>
  ```

  ```javascript
  const butts = document.querySelector('.butts');
  function handleClick() {
    console.log('Click');
  }
  butts.addEventListener('click', handleClick);
  ```

- There are basically three steps...
  - Get something!
  - Listen for something!
  - Do something!
- To remove an event listener you need reference to the function. Won't work with anonymous functions. <https://wesbos.com/javascript/05-events/event-listener#removing-an-event-listener>

  ```javascript
  butts.removeEventListener('click', handleClick);
  ```

- Listen for events on multiple elements with `.forEach()`. <https://wesbos.com/javascript/05-events/event-listener#listening-to-events-on-multiple-elements>

  ```html
  <button class="buy">Buy Item 1</button>
  <button class="buy">Buy Item 2</button>
  <button class="buy">Buy Item 3</button>
  <button class="buy">Buy Item 4</button>
  <button class="buy">Buy Item 5</button>
  <button class="buy">Buy Item 6</button>
  <button class="buy">Buy Item 7</button>
  <button class="buy">Buy Item 8</button>
  <button class="buy">Buy Item 9</button>
  <button class="buy">Buy Item 10</button>
  ```

  ```javascript
  function buyItem() {
    console.log('Bought it!');
  }

  //Regular anonymous function
  buyButtons.forEach(function (buyButton) {
    buyButton.addEventListener('click', buyItem);
  });

  // Or arrow function
  buyButtons.forEach((button) => button.addEventListener('click', buyItem));
  ```

# Targets, Bubbling, Propogation and Capture

- <https://wesbos.com/javascript/05-events/targets-bubbling-propagation-and-capture>
- Access event object by adding it as the paramiter of event listener callback function.

  - Event listener callback only accepts one param, the event object. <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback>

  ```Javascript
    function handleBuyButtonClick(event) {
      console.log('You are buying it');
      console.log(event);
    }
  ```

# Target

- Access target by adding `.target` to `event`.

```javascript
function handleBuyButtonClick(event) {
  console.log('You bought it!');
  console.log(event.target);
```

- Target can be used to get information about the target, in this example about what was clicked.

```javascript
function handleBuyButtonClick(event) {
  console.log('You bought it!');
  console.log(event.target);
```

- You can also drill down for more specific information, such as data on the target or text content etc.

```html
<button data-price="424" class="buy">Buy <strong>Item</strong> 1</button>
<button data-price="282" class="buy">Buy <strong>Item</strong> 2</button>
<button data-price="880" class="buy">Buy <strong>Item</strong> 3</button>
```

```javascript
function handleBuyButtonClick(event) {
  const button = event.target;
  console.log(button.textContent);
  console.log(parseFloat(event.target.dataset.price));
  // parseFloat converts a string to a number and keeps decimals.
}
```

- `event.target` is the thing that was clicked.
- `event.currenTarget` is the thing that fired the event listener.

  ```javascript
  function handleBuyButtonClick(event) {
    console.log('Target -', event.target); // Thing that was clicked
    console.log('Current Target -', event.currentTarget); // Thing that fired the event listener
    console.log(event.target === event.currentTarget);
  }
  ```

# Propagation

- <https://wesbos.com/javascript/05-events/targets-bubbling-propagation-and-capture#this-keyword>

![alt](https://uploads.sitepoint.com/wp-content/uploads/2017/05/1495534508eventflow.svg)

- It is possible to be clicking on multiple things as a certain time. That is what is referred to as propagation. When we clicked the strong tag, what happens is the event bubbles up.

  - Meaning we clicked on the strong tag, but we also clicked on the button, and then we also clicked on the body, and the HTML tag, and the window, and the google chrome browser etc, etc.

- The way you can prevent that is with a method on the event that is called `stopPropagation`.

```javascript
function handleBuyButtonClick(event) {
  console.log('Target -', event.target); // Thing that was clicked
  console.log('Current Target -', event.currentTarget); // Thing that fired the event listener
  console.log(event.target === event.currentTarget);
  // Halts event
  event.stopPropagation();
}
```

- Events bubble up. But events can go in the other direction with capture.

  - Very rarely used though.

```javascript
window.addEventListener('click', (e) => {
  console.log('Window Clicked');
  console.log(e.target), { capture: true };
});
```

# Prevent Default and Form Events

- <https://wesbos.com/javascript/05-events/prevent-default-and-form-events>
- Some elements have a default behaviour, like links for instance. The default action can be stopped with `preventDefault`.

  - Preventing link default action.

  ```html
  <a class="bbc" href="http://bbc.co.uk">BBC</a>
  ```

  ```javascript
  const bbc = document.querySelector('.bbc');
  // Halts page change until a confirmation is given by the user
  bbc.addEventListener('click', (e) => {
    e.preventDefault();
    const pageChange = confirm(
      'This website might be malicious! Do you want to proceed?',
    );
    if (pageChange) window.location = e.currentTarget.href;
  });

  // Better way to do above
  bbc.addEventListener('click', (e) => {
    const pageChange = confirm(
      'This website might be malicious! Do you want to proceed?',
    );
    if (!pageChange) e.preventDefault();
  });
  ```

  - Preventing form default action if user is called Chad (sorry Chad).

  ```html
  <form name="signup">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" value="Wes Bos" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" value="wesbos@gmail.com" />
    <input type="checkbox" id="agree" name="agree" />
    <label for="agree">I agree to the terms and conditions</label>
    <hr />
    <button type="submit">Submit</button>
  </form>
  ```

  ```javascript
  const signup = document.querySelector("[name='signup']");
  signup.addEventListener('submit', (e) => {
    const name = e.currentTarget.name.value.toLowerCase();
    if (name.includes('chad')) {
      alert('Sorry bro, no Chads allowed!');
      e.preventDefault();
    }
  });
  ```

  - More form events.

  ```javascript
  function logEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }

  signup.addEventListener('keyup', logEvent);
  signup.addEventListener('keydown', logEvent);
  signup.addEventListener('focus', logEvent);
  signup.addEventListener('blur', logEvent);
  ```

## Accessibility and Keyboard Codes

- Don't use links as buttons and vice versa.
  - Links go somewhere, buttons do something.
- Elements that are not keyboard accessible should not have clicks registered on them, unless absolutely necessary.
  - Can be done but best avoided

    ```html
    <img
    class="photo"
    role="button"
    tabindex="0"
    src="https://picsum.photos/500"
    alt="Picture"
    />
    ```

    ```javascript
      const photo = document.querySelector('.photo');

      function handlePhotoClick(e) {
        if (e.key === 'Enter' || e.type === 'click') {
        console.log('Click');
        }
      }

      photo.addEventListener('click', handlePhotoClick);
      photo.addEventListener('keyup', handlePhotoClick);
    ```

## Logic and Flow Control

# If Statements

-If 10 is greater than 2, log "Yep" to the console.

  ```javascript
  if (10 > 2) {
    console.log('Yep');
  }
  ```

- The entire if statement is `if (10 > 2) { console.log('Yep); }`

- The code within the parenthesis following the if statement, `(10 > 2)`, is  the condition.

- You can also chain  "else ifs" as many times as you want.

  ``` javascript
  if (10 > 2) {
  console.log('Yep');
  } else if (11 > 10) {
  console.log('Yep');
  } else if (3 > 1) {
  console.log('Yep');
  }
  ```

  - Although all 3 conditions above 👆 are true, the 2nd and 3rd blocks will never run because the first condition evaluates to true and runs.

- An `else{}` at the end of the if statement will run if nothing is matched

  ```javascript
  if (age > 70) {
    console.log('In your seventies');
  } else if (age > 60) {
    console.log('In your sixties');
  } else if (age > 50) {
    console.log('In your 50s');
  } else {
    console.log("nothing was true");
  }
  ```

  - Not always necessary to use multiple if statements when evaluating conditions..

```javascript
 function slugify(sentence, lowercase) {
  const slug = sentence.replace(/\s/g, '-');
  if (lowercase) {
    return slug.toLowerCase();
  }
  // No
  return slug;
        }

  slugify('I am a meat popsicle', 1); // Returns 'i-am-a-meat-popsicle'
```

# Operators

- === equals (same as).
  - Don't use == as 1t doesn't compare types.
- != not equal to
- `>` greater than
- `<` Less than
- > = Greater than or equal to
- < = Less than or equal to
- || or
- && and

# Truthy and Falsy

- Some methods return true of false

  ```javascript
  const sentence = 'Mark is cool!';
  const name = 'Mark';

  const isItMe = sentence.includes(name);

  if (isItMe) {
    console.log("It's me");
  } // Logs It's me
  ```
