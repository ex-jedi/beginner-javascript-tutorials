// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375524347

function outer() {
  const outerVar = 'I an the outer Var!';

  function inner() {
    const innerVar = 'I am the inner Var!';
    console.log(outerVar); // Looks up to find this
    console.log(innerVar);
  }

  return inner;
}

const innerFN = outer(); // The inner function is the value returned by outer().

innerFN(); // inner() still has acesss to the outer variable (outerVar). Can still reach out to the parent scope to get variables even though the parent function has 'closed'.

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const hey = createGreeting('hey');
const howdy = createGreeting('howdy');

// Inner function can still access variables from the parent scope even when the parent function has 'closed over'.
console.log(hey('Kate'));
console.log(howdy('Kate'));
console.log(hey('Mark'));
console.log(howdy('Mark'));

// Private variables

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
// Above attaches `win` function to the variables. Outer variable `score` is available to the inner `win function`. So you

footballGame();
tennisGame();
