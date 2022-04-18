![](https://res.cloudinary.com/wesbos/image/upload/v1574876851/BJS/BJS-Social-Share.png)

# Beginner JavaScript

These are the starter files and solutions to the [Beginner JavaScript](https://BeginnerJavaScript.com) course

## Function Definition Diagram

![Description of javaScript function](function-definition.jpg)

## Community Resources

Please feel free to add your blog post, videos, notes, or anything else related to the course :)

- [Soumya Ranjan Mohanty](https://github.com/geekysrm)'s [Github repo](https://github.com/geekysrm/javascript-notes) with notes and lessons learnt, along with [full notes here](https://notes.soumya.dev/javascript).
- [Linda has documented all her exercises on Codepen](https://twitter.com/lindakatcodes/status/1331702581220020225)
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

## Selecting elements

    - querySelector can be used on any element. <https://wesbos.com/javascript/04-the-dom/selecting-elements/#searching-inside-already-selected-elements>

## Adding Text

- textContent shows hidden nodes and elements. innerText is aware of styling and shows only actual text. <https://wesbos.com/javascript/04-the-dom/element-properties-and-methods/#textcontent-and-innertext>

- insertAdjacentText, best way to add text to elements. <<https://wesbos.com/javascript/04-the-dom/element-properties-and-methods/#insertadjacenttext-and-insertadjacentelemen>

## Data Attributes

- Data attributes are accessed with `.dataset`.
  <https://wesbos.com/javascript/04-the-dom/built-in-and-custom-data-attributes/#data-attributes>

## Creating & Adding HTML

- Create HTML with `document.createElement()`.
  <https://wesbos.com/javascript/04-the-dom/creating-html>
  <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement>

- Several ways to add elements to the page. <https://wesbos.com/javascript/04-the-dom/creating-html/#append-method>

  - Add elements to page with `appendChild()`. <https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild>
  - Or use newer `.append()`. <https://developer.mozilla.org/en-US/docs/Web/API/Element/append>

- Add elements in specific places with `insertAdjacentElement()`. <https://wesbos.com/javascript/04-the-dom/creating-html/#insertadjacentelement-method>
- <https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML>

## Creating HTML with Strings

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

## Traversing the DOM

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

## Removing Elements

- Use `el.remove()`. <https://wesbos.com/javascript/04-the-dom/traversing-and-removing-nodes/#removing-elements>

- Elements may still be accessed after removal.

  ```javascript
  const para = document.createElement('p');
  para.textContent = 'Soon I will be gone!';
  document.body.append(para);
  para.remove();
  console.log(para); // Logs <p>Soon I will be gone!</p>
  ```

# Events

## Event Listeners

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

## Targets, Bubbling, Propagation and Capture

- <https://wesbos.com/javascript/05-events/targets-bubbling-propagation-and-capture>
- Access event object by adding it as the paramiter of event listener callback function.

  - Event listener callback only accepts one param, the event object. <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback>

  ```Javascript
    function handleBuyButtonClick(event) {
      console.log('You are buying it');
      console.log(event);
    }
  ```

## Target

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

## Propagation

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

## Prevent Default and Form Events

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

# Logic and Flow Control

## If Statements

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

- Simple if statement can be one liners

  ```javascript
  function doSomething() {
    console.log('Doing something!');
  }
  const isTrue = true;
  if(isTrue) doSomething();
  ```

## Operators

- === equals (same as).
  - Don't use == as 1t doesn't compare types.
- != not equal to
- `>` greater than
- `<` Less than
- > = Greater than or equal to
- < = Less than or equal to
- || or
- && and

## Truthy and Falsy

- Truthy
  - 1 // truthy
  - -10 // truthy
  - full string // truthy
  - a string of "0" // truthy
  - empty array // truthy
    - Check if array is empty with `.length`.
  - empty object // truthy
    - Check if object is empty with `.keys` .

- Falsy
  - 0 // falsy
  - undefined variable // falsy
  - null / Variable set to null // falsy
  - NaN // falsy
  - empty string // falsy

- Some methods return true of false

  ```javascript
  const sentence = 'Mark is cool!';
  const name = 'Mark';

  const isItMe = sentence.includes(name);

  if (isItMe) {
    console.log("It's me");
  } // Logs It's me
  ```

## Coercion

- A bang  (`!`) in front of a boolean flips it.
- A double bang  (`!!`) before a value coerces it into a boolean.
  - Coercion is usually not used very often.

```javascript
let bool = true; // bool === true
bool = !bool; // bool === false

let val = 10 // val === 10
val = !!val // val === true

```

## Ternary

- Like a shorthand if statement.

- Ternarys have three things...
  1. A condition
  2. What to do if true
  3. What to do if false

- Example
  - Simple if statement...

  ```javascript
    const count = 2;
    let word;
    if (count === 1) {
      word = 'item';
    } else {
      word = 'items';
    }
    const sentence = `You have ${count} ${word} in your cart.`;
    //Sentence -  'You have 2 items in your cart.'
  ```

  - Ternary version...

  ```javascript
     const word = count === 1 ? 'item' : 'items';
      const sentence = `You have ${count} ${word} in your cart.`;
  ```

  - Or even...

  ```javascript
     const word = count === 1 ? 'item' : 'items';
      const sentence = `You have ${count} item${count === 1 ? '' : 's' } in your cart.`;
  ```

- Can be used to run functions

  ```javascript
        function showAdminBar() {
        console.log('Show admin bar.');
      }

      const isAdmin = true;
      isAdmin ? showAdminBar() : null;
  ```

## Short Circuiting - The AND AND Trick

- JavaScript will abort a condition when one of them is false
- This can be used... or abused to run checks

  ```javascript
        function check1() {
        console.log('Running check 1');
        return true;
      }
      function check2() {
        console.log('Running check 2');
        return false;
      }
      function check3() {
        console.log('Running check 3');
        return true;
      }

      // The && conditions below will stop at check 2 as it's false.
      if (check1() && check2() && check3()) {
        console.log('All checks passed!');
      } else {
        console.log('Some checks failed');
      }
  ```

- You could use this instead of the ternary further up
  - So instead of...

  ```javascript
    const isAdmin = true;
      isAdmin ? showAdminBar() : null;
  ```

  - You could use...

  ```javascript
    const isAdmin = true;
      isAdmin && showAdminBar();
  ```

  - Some people don't like this though, others do.
  - This pattern is used in React.

- <https://wesbos.com/javascript/07-logic-and-flow-control/coercion-ternaries-and-conditional-abuse>

## Switch Statement

```javascript
switch (event.key) {
  case 'ArrowUp':
    y = y - 1;
    break;
  case 'ArrowDown':
    y = y + 1;
    break;
  case 'ArrowLeft':
    x =  x + 1;
    break;
  case 'ArrowRight':
    x = x - 1;
    break;
  default:
    console.log("That is not a valid move");
    break;
}
```

- Needs a break after each cases.
- Needs a default case which will run if the condition doesn't match any of the cases.

# Intervals and Timers

## Timers

- `setTimeout()` is used for timers.
- Takes two things.
  - A callback function (named, anonymous or arrow).
  - The number of milliseconds to wai.t

    ```javascript
          setTimeout(() => {
        console.log('Done!');
      }, 1000);

      // Takes anonymous, named or arrow function...

      function timer() {
      console.log('Done');
      }

      setTimeout(timer, 1000);
      ```

- Timers don't act as pauses in JavaScript.
- This is due to the asynchronous nature of JavaScript.

  ```javascript
       function timer() {
        console.log('Done');
      }

      console.log('Starting');
      setTimeout(timer, 1000);
      console.log('Finishing');

      // Will log..
      //Starting, Finishing, Done; In that order
  ```

- JavaScript queues up the timer to be run after 1000 milliseconds, it will go to the next line of code and come back to timer when it's time.
  - That's why the function is called a callback as JavaScript will come back and call it at a later point in time.

## Intervals

- Intervals accomplished with `setInterval()`
- Like `setTimeout()` it also takes a callback function and a time in milliseconds for the interval.
- Theres no built in way to run a function immediately and add an intereval.
  - Can be done like so...

  ```javascript

      function sayHI() {
        console.log('Hi!');
      }

      function setImmediateInterval(funcToRun, ms) {
        // Run the function right away
        funcToRun();
        // Set an interval to run the function along with interval in
        return setInterval(funcToRun, ms);
      }

      setImmediateInterval(sayHI, 500);
  ```

## Clearing timers and intervals

- To clear a timer or interval you have to save the reference to it.
  - Clear timers with `clearTimeout()`.

  ```javascript

      function destroy() {
       document.body.innerHTML = `<p>DESTROY</p>  `;
      }

      // Countdown
      const destroyTimer = setTimeout(destroy, 5000);

      // Stops countdown with a click
      window.addEventListener('click', () => {
        console.log('You stopped the destruction!');
        clearTimeout(destroyTimer);
      });
  ```

  - Clear intervals with `clearInterval()`.

  ```javascript
    // Sets interval
    const wutInterval = setInterval(() => {
      console.log('Wut!');
    }, 500);

    // Clears interval after 3 seconds
    setTimeout(() => {
      clearInterval(wutInterval);
      console.log('Wut Stopped!');
    }, 3000);
  ```

# Objects

- Group together keys (properties) and values of related data or collections of functionality.
- Order of properties is objects doesn't matter. If you need the order to matter, use an array or Map data structure.
- Object creation with object literal syntax.

  ```javascript
       const person = {
        name: 'Mark',
        age: 500,
      };
  ```

- If an object's property has the same name as a variable you can just insert the variable name like so.

  ```javascript
        const age = 100;

        const person = {
          name: 'Mark',
          age,
        };
  ```

- Can use strings for property names if you need dashes or spaces etc.
  - recommended to use a trailing comma (comma dangle).

  ```javascript
      const age = 100;
      const person = {
        name: 'Mark',
        age,
        'cool-dude': true,
      };
  ```

- Objects values can be any type, including objects.

  ```javascript
      const age = 100;

      const person = {
        name: 'Mark',
        age,
        'cool-dude': true,
        clothing: {
          shirts: 5,
          trousers: 3,
        },
      };
  ```

- Properties can be added to an object with dot notation

  ```javascript
    person.job = 'Web Developer';
    console.log(person);
    // Console: {name: 'Mark', age: 100, cool-dude: true, clothing: {…}, job: 'Web Developer'}
  ```

- Values can be changes with dot notation

  ```javascript
      const age = 100;
      const person = {
        name: 'Mark',
        age,
        'cool-dude': true,
        clothing: {
          shirts: 5,
          trousers: 3,
        },
      };

      person.age = 50;

      console.log(person);
      // Console: {name: 'Mark', age: 50, cool-dude: true, clothing: {…}, job: 'Web Developer'}
  ```

## Const

- Doesn't mean the values of an object can't be changed. Means the binding to the object cannot be changed.

  ```javascript

    const person = {
      name: 'Mark',
      etc...
      },
    };

    person = {
      name: 'Robert',
    };
    // Will throw 'Assignment to constant variable' error.
  ```

- Can create a frozen (immutable) object, one where properties an values can't be changed with `Object.freeze()`.

  ```javascript
      const personFroze = Object.freeze(person);
      console.log(personFroze);
      // Console: {name: 'Mark', age: 50, cool-dude: true, clothing: {…}, job: 'Web Developer'}
      personFroze.name = 'Jon';
      console.log(personFroze);
      // Console: {name: 'Mark', age: 50, cool-dude: true, clothing: {…}, job: 'Web Developer'}
  ```

## Acessing properties

- Using dot notation, most common

    ```javascript
      console.log(person.age);
    ```

  - Dot notation can be chained

      ```javascript
        console.log(person.clothing.shirts);
        // Console: 50
      ```

- Can use square brackets.

    ```javascript
      console.log(person[age]);
    ```

  - Used when a property name is attached to a variable.

    ```javascript
      const propertyToCheck = prompt('What do you want to check?');
      console.log(person[propertyToCheck]);
      // Displays a prompt where you enter a property name top check
    ```

  - Also used when a non-valid propert name is used. Ig it contains spaces or hyphens etc.

- If a property doesn't exist a lookup will return undefined

    ```javascript
      console.log(person.clothing.jumpers);
      // Console: undefined
    ```

- Looking up a property on a property that doesn't exist will throw an error

  ```javascript
    console.log(person.clothing.jumpers.colour);
    // Console: Uncaught TypeError: Cannot read properties of undefined (reading 'colour') at objects.html:35:43
  ```

  - Can use optional chaining
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>

      ```javascript
        console.log(person.clothing?.jumpers?.colour);
        // Console: undefined
      ```

  - Or could do something like this as a fallback for a property that doesn't exist.

    ```javascript
      console.log(person.clothing.jumpers.colour ? person.clothing.jumpers.colour : `Property does not exist`);
      // Console: Property does not exist
    ```

- Delete a property with `delete` keyword.
  - Can check if it has worked as it will return `true` or `false` depending on whether it's successfull or not

    ```javascript
      console.log(delete person.clothing);
      // Console: true
      console.log(person.clothing);
      // Console: undefined
    ```

## Methods

- An object property that is a function

    ```javascript
        const person = {
          name: 'Mark',
          ...
          // Below is shorthand it is not an arrow function!
          greeting(greeting = 'Hi') {
          return `${greeting} ${this.name}`;
        },
        };
        person.greeting();
        // Returns Hi Mark
    ```

  - `this` generally the thing that's left of the dot.
    - So `this` in the case of `person.greeting()` is `person`.

- Arrow functions can be used for methods, but that means you don't have access to `this` on the object. `this` will refer to the `window` object.

## Reference vs Value

- Created Objects with the same properties and values are not the same object.

  ```javascript
      const person1 = {
        first: 'Mark',
        second: 'Phoenix',
      };

      const person2 = {
        first: 'Mark',
        second: 'Phoenix',
      };

      console.log(person1 === person2);
        // Console: false
  ```

- If you assign a variable to an existing object both variables point to the same object.

  ```javascript
      const person1 = {
      first: 'Mark',
      second: 'Phoenix',
    };

    const person3 = person1;

    console.log(person3 === person1);
    // Console: true
  ```

- `person1` and `person3` point to the SAME object!

- So if you change properties on `person1` or `person3` you're changing a property on one object, not two separate ones.

  ```javascript
    const person1 = {
      first: 'Mark',
      second: 'Phoenix',
    };

    const person3 = person1;

    person3.first = 'Dug';
    console.log(person3.first);
    // Console: 'Dug'

    console.log(person1.first);
    // Console: 'Dug'
  ```

  - See Just JavaSCript for the right mental model. <https://justjavascript.com/learn>

- A way to copy and create a separate object is to use the spread operator.

    ```javascript
      const person3 = { ...person1 };

      console.log(person3 === person1);
      // Console: false

      person3.first = 'Dug';

      console.log(person3.first);
      // Console: 'Dug'
      console.log(person1.first);
      // Console: 'Mark'
    ```

  - Older, not so popular these days, way. Just in case you see it somewhere.

      ```javascript
        const person3 = Object.assign({}, person1)
      ```

- Spread operator runs into the same problem with 'nested' objects as it makes a shallow copy.

  ```javascript
          const person1 = {
        first: 'Mark',
        second: 'Phoenix',
        clothing: {
          shirts: 10,
          hats: 2,
        },
      };

      person3.clothing.shirts = 100;
      console.log(person3.clothing.shirts);
      // Console: 100
      console.log(person1.clothing.shirts);
      // Console: 100
  ```

- Can use outside library, like Lodash. <https://lodash.com/>
  - Lodash has a `_.cloneDeep()` method for deep cloning. <https://lodash.com/docs/4.17.15#cloneDeep>

  ```javascript
      const person3 = _.cloneDeep(person1);

      console.log(person3 === person1);
      // Console: false

      person3.first = 'Dug';

      console.log(person3.first);
      // Console: 'Dug'
      console.log(person1.first);
      // Console: 'Mark'

      person3.clothing.shirts = 100;
      console.log(person3.clothing.shirts);
      // Console: 100
      console.log(person1.clothing.shirts);
      // Console: 10
  ```

- Objects can be merged with the spread operator
- You can also add properties onto the merged object literal

  ```javascript
        const meatInventory = {
        bacon: 2,
        sausage: 3,
      };

      const veggieInventory = {
        lettuce: 5,
        tomatoes: 3,
      };

      const inventory = {
        ...meatInventory,
        ...veggieInventory,
        fish: 33,
      };
  ```

- If there are duplicate properties they will be overwritten. So the oyster property in the first object is overwritten by the oyster property in the second.

  ```javascript
        const meatInventory = {
        bacon: 2,
        sausage: 3,
        oysters: 14
      };

      const veggieInventory = {
        lettuce: 5,
        tomatoes: 3,
        oysters: 56
      };

      const inventory = {
        ...meatInventory,
        ...veggieInventory,
        fish: 33,
      };

    console.log(inventory.oysters);
    // Console: 56
  ```

- If you use an object in a function any modifications madeare made on the external object. Changes are not scoped to the function.

  ```javascript
      function doStuff2(data) {
        data.tomatoes = 10000;
        console.log(data);
      }
      doStuff2(inventory);
      console.log(inventory.tomatoes);
      // Console: 10000
  ```

- Make a copy of an object with one of the aforementioned methods if you need to use it but don't want to alter it.

# Maps

- Create a map with `new map()`.

    ```javascript
      const myMap = new Map();
    ```

- Add keys and values with `set()`

  ```javascript
    myMap.set('name', 'Mark');
  ```

- Can also use arrays to add keys and values to a map.

    ```javascript
        const myMap2 = new Map([
          ['name', 'mark'],
          ['age', 48],
        ]);
    ```

- Keys can be any type

  ```javascript
    const myMap = new Map();
    myMap.set('name', 'Mark');
    myMap.set(100, 'This is a number');
  ```

- Can for instance use a map for additional information for an object, using the object variable.

  ```javascript
      const person1 = {
        name: 'wes',
        age: 200,
      };

      const myMap = new Map();
      myMap.set(person1, 'Really Cool');
  ```

- As you can use any type as a key you could use a map to get prizes relating to a score number...

  ```javascript
      const score = 200;
      const prizes = new Map();
      prizes.set(100, 'Bear');
      prizes.set(200, 'Duck');
      prizes.set(300, 'Car');
      console.log(`you win a ${prizes.get(score)}`);
      // Console: you win a duck
  ```

  - Loop over the map to show points and prizes on the page

    ```javascript
      const prizes = new Map();
      prizes.set(100, 'Bear');
      prizes.set(200, 'Duck');
      prizes.set(300, 'Car');

      const ul = document.querySelector('.prizes');
      for (const [points, prize] of prizes) {
        const li = `<li> ${points} points wins a ${prize}  </li>`;
        ul.insertAdjacentHTML('afterbegin', li);
      }
    ```

![Screenshot 2022-02-15 165059](https://user-images.githubusercontent.com/3149496/154111317-f5e8d318-ebc6-4541-874b-380be73040aa.png)

- Maps keep things in order.
- Can't put functions in a map.
- JSON doesn't handle maps.

# Arrays

- A list of items where the order matters.
- Each thing in an array is an item.
- The position of each item in an array is call an index.
- The number of items is called the length.
- Each item can be any type, including other arrays.
- Most commonly created with array literal syntax.

  ```javascript
    const names = ['Mark', 'Kate'];
  ```

- Arrays are actually objects.

  ```javascript
     const names = ['Mark', 'Kate'];
      console.log(typeof names);
      // Console: object
  ```

  - If you need to check if something is an array use `Array.isArray()`

    ```javascript
      const names = ['Mark', 'Kate'];
      console.log(Array.isArray(names));
      // Console: true
    ```

- Use indexes to access array items
- Arrays indexes are zero based.
- Access indexes with square brackets.

  ```javascript
    const names = ['Mark', 'Kate'];
    console.log(names[1]);
    // Console: Kate
  ```

- Array length is not zero based.

  ```javascript
      const names = ['Mark', 'Kate'];
      console.log(names.length);
      // Console: 2
  ```

- To find the last item in an array use `array.length - 1`

  ```javascript
    console.log(names[names.length - 1]);
  ```

## Mutation

- Some array methods will alter the original array, even if you attempt to make a new array.
  - `.reverse()` is a mutation method. It alters the array it's run on. This will cause bugs if forgotten!

  ```javascript
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const numbersBackwards = numbers.reverse();

      console.log(numbersBackwards);
      // Console: [9, 8, 7, 6, 5, 4, 3, 2, 1]

      console.log(numbers);
      // Console: [9, 8, 7, 6, 5, 4, 3, 2, 1]
      // Original numbers array is altered (mutated).
  ```

- To avoid altering the original array make a copy first, then run any mutation methods on the copy.

  ```javascript
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      // Make a copy first, then run reverse() on the copy.
      const numbersReversed = [...numbers].reverse();

      console.log(numbers);
      // Console: [1, 2, 3, 4, 5, 6, 7, 8, 9]

      console.log(numbersReversed);
      // Console: [9, 8, 7, 6, 5, 4, 3, 2, 1]
  ```

## Push

- Add items to the end of an array with `push()`.
  - `push()` is a mutation method!

    ```javascript
        const names = ['Mark', 'Kate', 'Dug', 'Jon', 'Sam'];
      console.log(names);
      // Console: ['Mark', 'Kate', 'Dug', 'Jon', 'Sam', 'Pete']

    ```

  - Can make a copy of an array with spread and add new items to avoid mutating the original,

    ```javascript
      const names = ['Mark', 'Kate', 'Dug', 'Jon', 'Sam'];
      const newNames = [...names, 'Pete'];
    ```

## Unshift

- Add items to the front of the array with `unshift()`.
  - `unshift()` mutates the original array.

  ```javascript
      const names = ['Mark', 'Kate', 'Dug', 'Jon', 'Sam'];
      names.unshift('Meg');
  ```

  - Can make a copy of an array with spread and add new items to the front to avoid mutating the original.

  ```javascript
      const names = ['Mark', 'Kate', 'Dug', 'Jon', 'Sam'];
      const newNames = ['meg', ...names];
  ```

## Splice

- `splice()` mutates an array by removing or replacing existing elements and/or adding new elements in place.
  - Has a start, a optional delete count and the option to insert new elements from the start.

  ```javascript
    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2, itemN)
  ```

## **Slice**

- The **`slice()`** method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
- Is **NOT A MUTATION METHOD**.

```javascript
  slice()
  slice(start)
  slice(start, end)
```

- Start is optional and zero index based. If it's undefined it'll start from 0.
- If `start` is greater than the index range of the sequence, an empty array is returned.
- End (also optional) is zero-based index before which to end extraction. slice extracts **UP TO** but **NOT INCLUDING END**.
- If end is omitted, slice extracts through the end of the array `(arr.length)`.
- If end is greater than the length of the sequence, slice extracts through to the end of the array `(arr.length)`.
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#syntax>

```javascript
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const pizzaSlice = numbers.slice(2, 4);

  console.log(pizzaSlice);
  // Console: [3, 4]

  console.log(numbers);
  // Console: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

- Using `slice()` to 'remove' the last item from an array.

  ```javascript
      const toppings = [
        'Mushrooms ',
        'Tomatoes',
        'Eggs',
        'Chili',
        'Lettuce',
        'Avocado',
        'Chiles',
        'Bacon',
        'Pickles',
        'Onions',
        'Cheese',
      ];

      // Make new array & copy toppings into it without last item.
      let toppingsEnd = toppings.slice(0, toppings.length - 1);
      console.log(toppingsEnd);
      // Cheese removed
      // Console: ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions']
  ```

- Adding the last item back.

  ```javascript
     let newToppings = toppings.slice(0, toppings.length - 1);
      console.log(newToppings);

      // Get last item from toppings array
      const lastItem = toppings[toppings.length - 1];
      console.log(lastItem);
      // Console: Cheese

      // Add it back to newToppings with spread
      newToppings = [...newToppings, lastItem];
      console.log(newToppings);
      // Cheese is back
      // Console: ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']
  ```

- Can be used to make a copy of an array and insert items to the copy like so.

  ```javascript
  const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
  const newBikes = [...bikes.slice(0, 3), 'benotto', ...bikes.slice(3)];
  console.log(newBikes);
  // Console:  ['bianchi', 'miele', 'panasonic', 'benotto', 'miyata']
  // Copies original array and adds benotto
  ```

- Can be used to make a copy of an array and 'remove' items from the copy.

  ```javascript
       console.log(newBikes);
    // Console: ['bianchi', 'miele', 'panasonic', 'benotto', 'miyata']

      const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)];
      console.log(newBikes2);
    // Console: ['bianchi', 'miele', 'panasonic', 'miyata']
    // Copies original array and adds removes benotto
  ```

## **Find Index**

- Removing items with **`findIndex()`**
  - Simple example...

  ```javascript
    const names = ['Mark', 'Kate', 'Dug', 'Jon', 'Sam'];

    // Find index of Kate
    const namesIndex = names.findIndex((name) => name === 'Kate');
    // Returns 1

    // Make a new array with Kate removed
    const noKate = [
      ...names.slice(0, namesIndex),
      ...names.slice(namesIndex + 1),
    ];

    console.log(names);
    // Console: ['Mark', 'Kate', 'Dug', 'Jon', 'Sam']

    console.log(noKate);
    // Console: ['Mark', 'Dug', 'Jon', 'Sam']
  ```

  - Example finding object in array with an id...

    ```javascript
        const comments = [
          { text: 'Cool Beans', id: 123 },
          { text: 'Love this', id: 133 },
          { text: 'Neato', id: 233 },
          { text: 'good bikes', id: 333 },
          { text: 'so good', id: 433 },
        ];

        function deleteComment(id, commentsArray) {
          // Find index of comment in the array
          const commentIndex = commentsArray.findIndex(
            (comment) => comment.id === id,
          );
          console.log(commentsArray[commentIndex]);
          // Make new array minus the comment & return it
          return [
          ...commentsArray.slice(0, commentIndex),
          ...commentsArray.slice(commentIndex + 1),
          ];
        }

        const commentsUpdated = deleteComment(123, comments);
        console.log(commentsUpdated);
        /* Console: [
          // Comment 123 'removed'
          { text: 'Love this', id: 133 },
          { text: 'Neato', id: 233 },
          { text: 'good bikes', id: 333 },
          { text: 'so good', id: 433 },
          ];
      */
    ```

# Array Static Methods

- 'Built in' methods on the array object constructor rather than on the array instance
- Methods called on object instances are called instance methods.
- Array static methods are...
  - `Array.of()`. Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments (not often used).
  - `Array.from()`. Creates a new Array instance from an array-like object or iterable object (something with a length) .
  - Takes the array-like thing and an optional map function.

    ```javascript
      // Arrow function
      Array.from(arrayLike, (element) => { /*...*/ } )
      Array.from(arrayLike, (element, index) => { /*...*/ } )
    ```

  - Examples...

    ```javascript
      // Create array
      const makeArray = Array.from({ length: 10 }, (_, index) => index);
      console.log(makeArray);
      // Console: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      // Function that creates a range from x to y with Array.from();
      function createRange(start, end) {
        return Array.from(
          { length: end - start + 1 },
          (_item, index) => index + start,
          // item will be undefined, the underscore is just to show that.
        );
      }

      const myRange = createRange(5, 17);
      console.log(myRange);
      // Console: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    ```

  - `Array.isArray()`. Returns true if the argument is an array, or false otherwise.

    ```javascript
      const isArray = Array.isArray(myRange);
      console.log(isArray);
      // Console: true
    ```

# Object Static Methods

## Entries

- Object.entries() method returns an array of an object's [key, value] pairs.

  ```javascript
    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7,
    };

    console.log(Object.entries(meats));
    // Console: [['beyond', 10], ['beef', 5], ['pork', 7]]

    // Looping over entries with forEach()
    // Shows examples of destructuring
    // Destructured variables can be called anything you choose
    Object.entries(meats).forEach(([meat, qty]) => {
      // const meat = entry[0];
      // const qty = entry[1];
      // const [meat, qty] = entry;
      console.log(meat, qty);
    });
  ```

## Keys

- Object.keys() returns a new array that contains the keys for each index in the array.

    ```javascript
      console.log(Object.keys(meats));
      // Console: ['beyond', 'beef', 'pork']
    ```

- Object.values() method returns an array of a given object's enumerable property values.

  ```javascript
    console.log(Object.values(meats));
    // Console: [10, 5, 7]
  ```

# Array Instance Methods

- <https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375674172>

## Join

- The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

  ```javascript
    const buns = ['egg', 'wonder', 'brioche'];
    const bunsString = buns.join();
    console.log(bunsString);
    // Console: egg,wonder,brioche

    const bunsStringTwo = buns.join(' and ');
    console.log(bunsStringTwo);
    // Console: egg and wonder and brioche
  ```

## Split

- The `split()` method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
  - The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

    ```javascript
      const foodString = 'hot dogs,hamburgers,sausages,corn';

      const foodArray = foodString.split();
      console.log(foodArray);
      // Console: ['hot dogs,hamburgers,sausages,corn']]

      const foodArrayTwo = foodString.split('');
      console.log(foodArrayTwo);
      // Console: ['h', 'o', 't', ' ', 'd', 'o', 'g', 's', ',', 'h', 'a', 'm', 'b', 'u', 'r', 'g', 'e', 'r', 's', ',', 's', 'a', 'u', 's', 'a', 'g', 'e', 's', ',', 'c', 'o', 'r', 'n']
    ```

## Pop

- The `pop()` method removes the last element from an array (mutating it) and returns that element.

    ```javascript
      const toppings = [
        'Mushrooms ',
        'Tomatoes',
        'Eggs',
        'Chili',
        'Lettuce',
        'Avocado',
        'Chiles',
        'Bacon',
        'Pickles',
        'Onions',
        'Cheese',
      ];

      const topPop = toppings.pop();
      console.log(toppings);
      // Removes last item (cheese)
      // Console: ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions']

      console.log(topPop);
      // Console: Cheese
    ```

## Push

- The push() method adds one or more elements to the end of an array (mutating it) and returns the new length of the array.

  ```javascript
      const topPush = toppings.push(topPop);
      console.log(toppings);
      // Cheese is back
      // Console: ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']

      console.log(topPush);
      // Console: 11 (length of the mutated array)
  ```

## Shift

- The `shift()` method removes the first element from an array and returns the removed element.

  ```javascript
      console.log(toppings);
      // Console: ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']

      const toppingsShift = toppings.shift();
      console.log(toppingsShift);
      // Console: Mushrooms

      console.log(toppings);
      // Mushrooms removed
      // Console: ['Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']
  ```

## Unshift

- The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

  ```javascript
      const topUnshift = toppings.unshift(toppingsShift);
      console.log(toppings);
      // Mushrooms are back!
      // Console: ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']

      console.log(topUnshift);
      // Console: 11 (length of the mutated array)
  ```

## Includes

- The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  - When comparing strings and characters, includes() is **case-sensitive**.

    ```javascript
      const toppings = [
        'Mushrooms ',
        'Tomatoes',
        'Eggs',
        'Chili',
        'Lettuce',
        'Avocado',
        'Chiles',
        'Bacon',
        'Pickles',
        'Onions',
        'Cheese',
      ];

      const AnyEggs = toppings.includes('Eggs');
      console.log(AnyEggs);
      // Console: true
      const canHazHot = toppings.includes('Hot Sauce');
      console.log(canHazHot);
      // Console: false
    ```

# Callback Array Methods

## Find

- The `find()` method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  - Takes a callback function which has 3 arguments.
    - element. The current element in the array.
    - index (Optional). The index (position) of the current element in the array.
    - array (Optional). The array that find was called on.

  ```javascript
          const feedback = [
        { comment: 'Love the Burgs', rating: 4 },
        { comment: 'Horrible Service', rating: 2 },
        { comment: 'Smoothies are great, liked the burger too', rating: 5 },
        { comment: 'Ambiance needs work', rating: 3 },
        { comment: 'I DONT LIKE BURGERS', rating: 1 },
      ];

      const burgRating = feedback.find((item) =>
        item.comment.toLowerCase().includes('burg'),
      );

      // Or...

      function findBurgRating(feedbackItem) {
        return feedbackItem.comment.toLowerCase().includes('burg');
      }

      // Or...

      const findBurgRating = (feedbackitem) =>
        feedbackitem.comment.toLowerCase().includes('burg');

       const burgRating = feedback.find(findBurgRating);

      console.log('burgRating - ', burgRating);
      // Console: burgRating -  {comment: 'Love the Burgs', rating: 4}

  ```

  - Higher order function (function that returns a function) version of above.
    - <https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375678133>

    ```javascript
        function findByWord(word) {
        return function (commentObject) {
          return commentObject.comment.toLowerCase().includes(word);
        };
      }

      const findBurgRating = feedback.find(findByWord('burg'));
      console.log(findBurgRating);
      // Console: {comment: 'Love the Burgs', rating: 4}

     const findBadRating = feedback.find(findByWord('horrible'));
      console.log(findBadRating);
      // Console: {comment: 'Horrible Service', rating: 2}
    ```

## Filter

- The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
  - Takes a callback function which has 3 arguments.
    - element. The current element in the array.
    - index (Optional). The index (position) of the current element in the array.
    - array (Optional). The array that find was called on.

    ```javascript

      function findTwoRating(feedbackItem) {
        return feedbackItem.rating > 2;
      }

      // Higher order function version...

      function findByRating(minRating) {
        return function (feedbackItem) {
          return feedbackItem.rating >= minRating;
        };
      }

      const highRating = feedback.filter(findByRating(2));
      console.table(highRating);

      // Console: [{comment: 'Love the Burgs', rating: 4}, {comment: 'Smoothies are great, liked the burger too', rating: 5}]
    ```

## Some

- The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
  - Example plus extracting values from an Object...

  ```javascript
      const meats = {
        beyond: 10,
        beef: 5,
        pork: 7,
      };

    const EnufMeat = Object.values(meats).some((meat) => meat >= 5);
    console.log(EnufMeat);
    // Console: true
  ```

## Every

- The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

  ```javascript
      const allMeats = Object.values(meats).every((meat) => meat >= 3);
      console.log(allMeats);
      // Console: true
  ```

## Sort

- The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values (alphabetically).
  - Takes a compare callback function.

    ```javascript
      // Alphabetical sorting
      const pizzaToppings = ['Pickles', 'Onions', 'Cheese', 'Avocado'];
      console.log(pizzaToppings.sort());
      ['Avocado', 'Cheese', 'Onions', 'Pickles']

      // Numeric sorting
      const numbers = [10, 100, 50, 76, 22, 17];
      const sortedNumbers = numbers.sort(
        (firstItem, secondItem) => firstItem - secondItem,
      );
      console.log(sortedNumbers);
      // Console:  [10, 17, 22, 50, 76, 100]

      // Sorting an Object

      const prices = {
        hotDog: 453,
        burger: 765,
        sausage: 634,
        corn: 234,
      };

      // Put in order by price
      const pricesSorted = Object.entries(prices).sort((a, b) => b[1] - a[1]);
      console.table(pricesSorted);
      // Console:
      // (index)   0           1
      // 0         'burger'    765
      // 1         'sausage'   634
      // 2         'hotDog'    453
      // 3         'corn'      234
    ```

# Looping And Iterating

## For Each

- The `forEach()` method executes a provided function once for each array element.
- Takes a callback function with the three arguments, the element, the index and the array.
- Doesn't return anything.
- <https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375687421>

  ```javascript
      const toppings = [
        'Mushrooms ',
        'Tomatoes',
        'Eggs',
        'Chili',
        'Lettuce',
        'Avocado',
        'Chiles',
        'Bacon',
        'Pickles',
        'Onions',
        'Cheese',
      ];

      function logTopping(topping, index, array) {
        const prevTopping = array[index - 1];
        const nextTopping = array[index + 1];

        console.log(
          prevTopping
            ? `Previous topping is ${prevTopping}`
            : `This is the first topping`,
        );

        console.log('Topping - ', topping);

        console.log(
          nextTopping
          ? `Next Topping is ${nextTopping}`
          : `No more toppings`,
        );

        console.log(`--- 🍕---`);
      }

      toppings.forEach(logTopping);

      // Console:
      // This is the first topping
      // Topping -  Mushrooms
      // Next Topping is Tomatoes
      // --- 🍕---
      // Previous topping is Mushrooms
      // Topping -  Tomatoes
      // Next Topping is Eggs
      // --- 🍕---
      // etc...
  ```

## Map

- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  - Takes callback with three arguments.
  - Resulting array is the same length as the one it is run on.
  - Doesn't alter the array it's run on.
  - <https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375690567>

    ```javascript
      const firstNames = ['Mark', 'Kate'];

      const fullNames = ['Mark', 'Kate'].map((name) => `${name} Phoenix`);

      // Or...

      function addSurname(firstName) {
        return `${firstName} Phoenix`;
      }

      const fullNames = firstNames.map(addSurname);

      // Or higher order function...

      function addSurname(lastName) {
        return function (firstName) {
          return `${firstName} ${lastName}`;
        };
      }

      const fullNames = firstNames.map(addSurname('Phoenix'));

      console.log(fullNames);
    ```

  - Maps can be chained

    ```javascript
        const firstNames = ['mark', 'kate'];

      function addSurname(firstName) {
        return `${firstName} Phoenix`;
      }

      function capitalize(word) {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
      }

       const fullNames = firstNames
       .map(capitalize)
       .map(addSurname);

        console.log(fullNames);
        // Console:  ['Mark Phoenix', 'Kate Phoenix']
    ```

  - Using `map` on numbers...

    ```javascript
        const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

        const orderTotalsWithTax = orderTotals.map((total) =>
        (total * 1.2).toFixed(2),
      );

      console.log(orderTotalsWithTax);
      // Console: ['410.40', '1202.40', '627.60', '40.80', '760.80', '1024.80', '1972.80', '2666.40']
    ```

  - Mapping array of objects

      ```javascript
        const people = [
        {
          birthday: 'April 22, 1993',
          names: {
            first: 'Keith',
            last: 'Buckley',
          },
        },
        {
          birthday: 'January 3, 1975',
          names: {
            first: 'Larry',
            last: 'Heep',
          },
        },
        {
          birthday: 'February 12, 1944',
          names: {
            first: 'Linda',
            last: 'Bermeer',
          },
        },
      ];

      function personMapper(person) {
        // Get birthday timestamp
        const birthday = new Date(person.birthday).getTime();
        // Get current time
        const now = Date.now();
        // Calculate age
        const age = Math.floor((now - birthday) / 31536000000);
        // Return their age and birthday in a object
        return {
          age,
          name: `${person.names.first} ${person.names.last}`,
          birthday: `${person.birthday}`,
        };
      }

      const cleanedPeople = people.map(personMapper);

      console.table(cleanedPeople);

      // Console:
      // (index)   age   name              birthday
      // 0         28    'Keith Buckley'   'April 22, 1993'
      // 1         47    'Larry Heep'      'January 3, 1975'
      // 2         78    'Linda Bermeer'   'February 12, 1944'
      ```

## Reduce

- The **`reduce()`** method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
- The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
- Doesn't mutate the array it's called on.

  - Simple example, adding an array of numbers.

  ```javascript
      const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

      function orderSum(previousValue, currentValue) {
        return previousValue + currentValue;
      }

      const totalSum = orderTotals.reduce(orderSum);

      console.log(totalSum)
      // Console: 7255
  ```

  - Looping over an object and reducing the results into an object.

    ```javascript
      const inventory = [
        { type: 'shirt', price: 4000 },
        { type: 'pants', price: 4532 },
        { type: 'socks', price: 234 },
        { type: 'shirt', price: 2343 },
        { type: 'pants', price: 2343 },
        { type: 'socks', price: 542 },
        { type: 'pants', price: 123 },
      ];

      // Reducer  function
      function inventoryReducer(totals, item) {
        // Check if the property already exists in the object
        totals[item.type]
        // If it does increment it by one
        ? (totals[item.type] += 1)
        // Otherwise this is the first time it occurs, so set it to 1
        : (totals[item.type] = 1);
        // Return totals so the next iteration has access to it
        return totals;
      }

      // Run reduce with the reducer function callback and an empty object as the initial value
      const inventoryCounts = inventory.reduce(inventoryReducer, {});

      console.log(inventoryCounts);
      // Console: {shirt: 2, pants: 3, socks: 2}
    ```

## For

- The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

  ```javascript
      const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
      }

      // Console: 2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6
  ```

## For in & For of

- The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.
- The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:
- For in loop will access an object's prototype properties.

  ```javascript
      const arr = [3, 5, 7];
      arr.foo = 'hello';

      // For in
      for (let i in arr) {
      console.log(i); // logs "0", "1", "2", "foo"
      }

      // For of
      for (let i of arr) {
      console.log(i); // logs 3, 5, 7
      }
  ```

  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement>

## While & Do While

- While takes a condition and runs as long as it evaluates to true.
- Do while is the same except that it will run once then check the condition.
- Not used often as there are betters ways to loop.

  ```javascript

      // While
      // These examples will cause an infinite loop as the condition is always true. This will cause the browser to crash.
      const cool = true;
      while (cool === true) {
        console.log('Cool');
      }

      // Do while
      do {
        console.log('Cool');
      } while (cool === true);
  ```

# Prototypes and Inheritance

## New Keyword

- Creates a new instance object from a constructor function

## This Keyword

- Initially bound to the window object

    ```javascript
      console.log(this);
      // Console: Window {window: Window, self: Window, document: ...}
    ```

- The this keyword in JavaScript refers to the instance of an object that a function is bound to.
- Often it's what's left of the dot when calling a method.

  ```html
    <button class="one">Button 1</button>
    <button class="two">Button 2</button>
  ```

  ```javascript
      const button1 = document.querySelector('.one');
      const button2 = document.querySelector('.two');

      function whichButton() {
        console.log('this -', this);
      }

      button1.addEventListener('click', whichButton);
      // Console: this = <button class=​"one">​Button 1​</button>​

      button2.addEventListener('click', whichButton);
      // Console: this = <button class="two">Button 2</button>
  ```

  - This is Function scoped.
    - Arrow functions don't change the this.

      ```javascript
      // As above but changed to arrow function
        const whichButton = () => console.log(this);

        button1.addEventListener('click', whichButton);
        // Console: Window {window: Window, self: Window, document: ...}

        button2.addEventListener('click', whichButton);
        // Console: Window {window: Window, self: Window, document: ...}
      ```

- **`This` is determined by where a function is called not where it is defined.**

## Bind

- `bind` can be used to change what `this` is bound to.

  ```javascript
    const person = {
        name: 'Mark',
        sayHi() {
          console.log(this);
          return `Hi ${this.name}`;
        },
      };

      person.sayHI()
      // Console: this = {name: 'Mark', sayHi: ƒ}
      // 'Hi Mark'

      const sayHI = person.sayHi.bind(person);
      sayHi();
      // Console: this = Window {window: Window, self: Window...,}
      //'Hi '

      // Using bind to bind this to the person object...

      const sayHI = person.sayHi.bind(person);
      sayHi();
      // Console: this = {name: 'Mark', sayHi: ƒ}
      // 'Hi Mark'

    // Using bind to bind this to a different object...

    const sayHI = person.sayHi.bind(kate);
    sayHi();
    // Console: this = {name: 'Kate'}
    // 'Hi Kate'
  ```

  - Below doesn't work as when `lookFor` is called there's nothing to the left of the querySelector method so to speak.

    ```javascript
      const lookFor = document.querySelector;
      console.log(lookFor('.paragraph'));
      // Console: Uncaught TypeError: Illegal invocation
    ```

  - By using bind we tell the `lookFor` function that it's bound to `document` as the this value when it's called

    ```javascript
      const lookFor = document.querySelector.bind(document);
      console.log(lookFor('.paragraph'));
      // Console: <p class="paragraph">...</p>
    ```

- Bind can take arguments that line up with parameters in the original function.

  ```javascript
      const bill = {
        total: 1000,
        calculate(taxRate) {
          console.log('this =', this);
          return this.total + this.total * taxRate;
        },
      };

    const total = bill.calculate(0.25);
    console.log(total);
    // Console: this = {total: 1000, calculate: ƒ}
    // 1250

    // Doesn't work like this as this is the window object (nothing to the left of the dot when it's called)
    const calc = bill.calculate;
    console.log(calc(0.25));

    // But works when bound, and can accept arguments. First argument is whatever you can this to be bound to. Subsequent arguments are whatever you've specified in the function definition, in this case `taxRate`. Can then just be run as the arguments are preloaded with `bind`.

    const calc = bill.calculate.bind({ total: 500 }, 0.25);
    // Console: this = {total: 500}
    // 625
  ```

- Bind returns a function that you need to run yourself. But..

## Call

- Call works in the same way but it also calls the function for you.

  ```javascript
    const calcTwo = bill.calculate.call({ total: 1000 }, 0.25);
    console.log(calcTwo);
    // Console: this = {total: 1000}
    // 1250
  ```

- Use bind if you want to return a function to call later on.
- Use call if you want to call the function right away.
- Call can be used to chain constructors

  ```javascript
      function Product(name, price) {
        this.name = name;
        this.price = price;
      }

      function Food(name, price) {
        // Calls the name and price properties from the Product constructor and binds them here
        Product.call(this, name, price);
        this.category = 'food';
      }

      function Toy(name, price) {
        // Calls the name and price properties from the Product constructor and binds them here
        Product.call(this, name, price);
        this.category = 'toy';

      const cheese = new Food('feta', 5);
      console.log(cheese.name);
      // Console: feta
      const fun = new Toy('robot', 40);
      console.log(fun.price);
      // Console: 40
  ```

## Apply

- Apply works in the same way as call but takes an array for arguments.

  ```javascript
      const bill = {
        total: 1000,
        calculate(taxRate) {
          console.log('this =', this);
          return this.total + this.total * taxRate;
        },
        describe(meal, drink, tax) {
          return `Your meal of ${meal} and ${drink} was £${this.calculate(tax)}`;
        },
      };

      //Using call...
      const mealTwo = bill.describe.call(bill, 'Spaghetti', 'Wine', 0.13);
      console.log(mealTwo);
      // Console: this = {total: 1000, calculate: ƒ, describe: ƒ}
      // Your meal of Spaghetti and Wine was £1130

      // Using apply
      const mealThree = bill.describe.apply(bill, ['Kebab', 'Cider', 0.13]);
      console.log(mealThree);
      // this = {total: 1000, calculate: ƒ, describe: ƒ}
      // Your meal of Kebab and Cider was £1130
  ```

## Prototype Inheritance

- The Pizza constrictor function makes instances of the pizza object. Properties and methods are assigned to the object with the this keyword.

  ```javascript
      function Pizza(customer, toppings = []) {
        this.toppings = toppings;
        this.customer = customer;
        this.slices = 10;
        this.size = 'Large';
        this.eat = function () {
          if (this.slices > 0) {
            this.slices -= 1;
            console.log(`Chomp! you now have ${this.slices} slices left`);
          } else {
            console.log('No More Slices!');
          }
        };
      }


    const pepperoniPizza = new Pizza('Dug', ['cheese', 'pepperoni']);
    console.log(pepperoniPizza);
    // Console: Pizza {toppings: Array(2), customer: 'Dug', slices: 10, size: 'Large', eat: ƒ}

    const hamPizza = new Pizza('Tim', ['cheese', 'ham']);
    console.log(hamPizza);
    // Console: Pizza {toppings: Array(2), customer: 'Tim', slices: 10, size: 'Large', eat: ƒ}
  ```

  - In the above example a new `eat` function is made every time a new instance of Pizza is made.

    ```javascript
    hamPizza.eat === pepperoniPizza.eat
    // false as they're not the same function.
    ```

  - Methods can be added to the Pizza prototype and will be inhereted by each instance. In this case it means that only one eat function is created which is inherited by all instances of Pizza

    ```javascript
      function Pizza(customer, toppings = []) {
        this.toppings = toppings;
        this.customer = customer;
        this.slices = 10;
        this.size = 'Large';
      }

      Pizza.prototype.eat = function () {
        if (this.slices > 0) {
          this.slices -= 1;
          console.log(`Chomp! you now have ${this.slices} slices left`);
        } else {
          console.log('No More Slices!');
        }
      };

    hamPizza.eat === pepperoniPizza.eat
    // true this time as they are the same function.
    ```

  - Properties can be added to each instance. As they occur earlier omn the lookup they will in a way overwrite the same property if it exists on the prototype or in the constructor.

    ```javascript
    // Size in the constructor
      function Pizza(customer, toppings = []) {
        this.toppings = toppings;
        this.customer = customer;
        this.slices = 10;
        this.size = 'Large';
      }

      hamPizza.size = 'Medium';
      console.log(hamPizza);
      // Console: Pizza {toppings: Array(2), customer: 'Tim', slices: 10, size: 'Medium', eat: ƒ}

      // Or size in the prototype...
      function Pizza(customer, toppings = []) {
        this.toppings = toppings;
        this.customer = customer;
        this.slices = 10;
      }

      Pizza.protype.size = 'Large';
      hamPizza.size = 'Medium';

      console.log(hamPizza.size);
      // Console: Medium

      console.log(pepperoniPizza.size);
      // Console: Large

    ```

## Pollyfills

- It's possible to overwrite the built in methods and properties of objects, like `Array` for instance, but this shouldn't be done.
- Pollyfills can be added this way.
  - A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

# Event Loop

- JavaScript is a single threaded language, meaning that only one thing can be run at a time. Some other languages are multi-threaded, which means they can run multiple processes at once.
- JavaScript is non-blocking (asynchronous).
- While the single-threaded languages simplify writing code because you don’t have to worry about the concurrency issues, this also means you can’t perform long operations such as network access without blocking the main thread.
- Imagine requesting some data from an API. Depending upon the situation the server might take some time to process the request while blocking the main thread making the web page unresponsive.
- Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.
  - <https://www.youtube.com/watch?v=8aGhZQkoFbQ>
  - <http://latentflip.com/loupe/>

# Promises

- Promises are an IOU (I Owe You) for something that will happen in the future.
- Promises take two arguments, `resolve` and `reject`.

  ```javascript
      function makePizza(toppings = []) {
        return new Promise((resolve, reject) => {
          // Wait 200 ms for each topping
          const bakeTime = 500 + toppings.length * 200;
          setTimeout(() => {
            // When your are ready resolve this promise
            resolve(`Here is your Pizza with toppings ${toppings.join(' ')}`);
          }, bakeTime);
        });
      }

    const pepperoniPromise = makePizza(['pepperoni', 'mozzarella']);
    console.log(pepperoniPromise);
    // Console: Promise {<fulfilled>: 'Here is your Pizza with toppings pepperoni mozzarella'}
  ```

## Then

- Access results with the `then()` method, which takes in a callback.

  ```javascript
         pepperoniPromise.then((pizza) => {
        console.log('Ahh I got it!');
        console.log(pizza);
      });
      // Console: Ahh I got it!
      // Here is your Pizza with toppings pepperoni
  ```

- `then()` can be chained.

  ```javascript
          makePizza(['pepperoni', 'mozzarella', 'olives'])
        .then((pizza) => {
          console.log(pizza);
          return makePizza(['cheese']);
        })

        .then((pizza) => {
          console.log(pizza);
          return makePizza();
        })
        .then((pizza) => {
          console.log('Last pizza!');
          console.log(pizza);
        });
        // Console: Here is your Pizza with toppings pepperoni mozzarella olives
        // Here is your Pizza with toppings cheese
        //  Last pizza!
        //  Here is your Pizza with toppings
  ```

## All

- Promises can be run concurrently with `all()`.

  ```javascript
      const pizzaPromise1 = makePizza(['chicken', 'peppers', 'onions', 'sweetcorn']);
      const pizzaPromise2 = makePizza(['ham', 'cheese']);
      const pizzaPromise3 = makePizza(['olives', 'peppers']);

      const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

      dinnerPromise.then((pizzas) => {
        const [pizza1, pizza2, pizza3] = pizzas;
        console.log(pizza1, pizza2, pizza3);
      });
      // Console: Here is your Pizza with toppings chicken peppers onions sweetcorn Here is your Pizza with toppings ham cheese Here is your Pizza with toppings olives peppers
  ```

## Race

- Get the first of multiple promise

  ```javascript
      //  Get first one
      const firstPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

      firstPizzaPromise.then((pizzas) => {
      console.log('First pizza is...');
      console.log(pizzas);
      });

    // Console:  First pizza is...
    // Here is your Pizza with toppings ham cheese
  ```

## Error Handling
