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
console.log(hey('Kate'));
console.log(howdy('Kate'));
console.log(hey('Mark'));
console.log(howdy('Mark'));
