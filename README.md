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

- Simple if statement can be one liners

  ```javascript
  function doSomething() {
    console.log('Doing something!');
  }
  const isTrue = true;
  if(isTrue) doSomething();
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

# Coercion

- A bang  (`!`) in front of a boolian flips it.
- A double bang  (`!!`) before a value coerces it into a boolian.
  - Coercion is usually not used very often.

```javascript
let bool = true; // bool === true
bool = !bool; // bool === false

let val = 10 // val === 10
val = !!val // val === true

```

# Ternary

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

# Short Circuiting - The AND AND Trick

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

# Switch Statement

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

## Intervals and Timers

# Timers

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

# Intervals

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

# Clearing timers and intervals

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

## Objects

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

# Const

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

# Acessing properties

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

# Methods

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

# Reference vs Value

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

## Maps

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

## Arrays

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

# Mutation

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

  - `slice()` which returns a 'slice' of an array based on index values passed in, is not a mutation method. It will not alter the array it's run on.

  ```javascript
    slice()
    slice(start)
    slice(start, end)
  ```

  - Start is optional and zero index based. If it's undefined it'll start from 0.
  - If `start` is greater than the index range of the sequence, an empty array is returned.
  - End (also optional) is zero-based index before which to end extraction. slice extracts UP TO but NOT INCLUDING end.
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

- Add items to the end of an array with `push()`.
  - `push()` is a mutation method!

    ```javascript
          const names = ['Mark', 'Kate', 'Dug', 'Jon', 'Sam'];
      names.push('Pete');
      console.log(names);
      // Console: ['Mark', 'Kate', 'Dug', 'Jon', 'Sam', 'Pete']

    ```
