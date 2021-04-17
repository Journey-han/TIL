// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);      // add
console.log(1 - 1);      // substract
console.log(1 / 1);      // divide
console.log(5 % 2);      // remainder
console.log(1 * 1);      // multiply
console.log(2 ** 3);     // exponentiation

// 3. Increment and decrement operators
let counter = 2;
// 변수 전에 +1. 전위 연산자
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// 변수 뒤에 +1. 후위연산자
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assignment operators
// 연산 후 변수에 담기.
let x = 3;
let y = 6;
x += y;     // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), first the true truthy value
// 개 중에 하나라도 true가 되는 애가 있으면 true로 출력해라
// 비교 연산 사용 할 때 상대적으로 시간이 오래걸리는 함수를 최대하 뒤로 보내서 컴파일 시간 줄이기.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// 개 중에 하나라도 false가 되는 애가 있으면 false로 출력해라.
console.log(`and: ${value1 && value2 && check()}`);

// often use to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.someting;
// }

// check()함수는 하나하나 검사를 다 하고 true를 출력해준다. 시간을 많이 쓴다.
function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😨');
    }
    return true;
}

// ! (not)
// 값을 반대로 바꿔준다.
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 타입을 변경해서 검사한다. 문자열이지만 안에 들어있는건 숫자이니까 둘이 비교하면 똑같아
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 타입을 신경써서 검사한다. 타입이 다르면 다른 애들이라고 비교한다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
// object는 레퍼런트 형태로 저장된다.
// object는 메모리가 각각 저장되어 있기 때문에 값이 같아도 서로 다른애들이다.
const jay1 = { name: 'jay' };
const jay2 = { name: 'jay' };
const jay3 = jay1;
console.log(jay1 == jay2);
console.log(jay1 === jay2);
console.log(jay1 === jay3);

// equality - puzzler
// 0, null, undefined, NaN, ''(empty String)은 false로 간줄 될 수 있다.
console.log(0 == false);    // true
console.log(0 === false);   // false. 0은 boolean타입이 아니기 때문에, 타입이 다른 애들이다.
console.log('' == false);   // true
console.log('' === false);  // false. 마찬가지로 '' is not boolean type. different type with false.
console.log(null == undefined); // true
console.log(null === undefined); // false. 다른 타입.

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'jay') {
  console.log('Welcome, Jay!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// if문 간단히. 삼항연산자. true니? true면 yes 출력 false면 no 출력.
console.log(name === 'jay' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
  } while (i > 0);
  
  // for loop, for(begin; condition; step)
  for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
  }
  
  for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
  }
  
  // nested loops
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`i: ${i}, j:${j}`);
    }
  }
  
  // break, continue
  // Q1. iterate from 0 to 10 and print only even numbers (use continue)
  for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(`q1. ${i}`);
  }
  
  // Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
  for (let i = 0; i < 11; i++) {
    if (i > 8) {
      break;
    }
    console.log(`q2. ${i}`);
  }