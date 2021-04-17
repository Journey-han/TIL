// 1. Use strict
// added in Es5
// use this for Vanilla Javascript.
'use strict';

// 2. Variable      rw(read/write). Mutable
// let (added in ES6). Mutable
// 자바 스크립트에서 변수를 추가할 수 있는 키워드 단 하나. let
let globalName = 'global name';
{
    let name = 'zzangu';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName)
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var는 선언 하기전에 값부터 할당. 값이 어떤 형태이냐에 따라 변수가 정해진다.
// var hoisting (move declaration from bottom to top.) 어디에나 선언했냐에 상관없이 항상 제일 위로 선언을 끌어 올려준다.
// has no block scope. {}이 없다. 
{
console.log(age);
age = 4;
console.log(age);
var age;
}
console.log(age);

// 3. Constants     r(read only). Immutable
// use const whenever possible.
// 변수를 선언하는 동시에 값을 할당하면 값이 절대 바뀌지 않는다.
const daysInweek = 7;
const maxNumber = 5;

/*
 Note!
 Immutable data types: primitive types, fozen objects (i.e. object.freeze())
 Mutable data types: all objects by default are mutable in JS
 favor immutable data type always for a few reasons:
    - security
    - thread safety
    - reduce human mistakes
*/

// 4. Variable types
// Primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'Not A Number' / 2
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet.) 크롬이랑 파이어폭스에서만 추가
// 값 끝에 n을 붙여서 사용
const nomal = 1234567890123456789012345678901234567890; // over (-2**53 ~ 2*53)
console.log(`value: ${nomal}, type: ${typeof nomal}`);
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`; // template literals (string) `` 원하는 문자열 + ${변수}+기호를 이용하면 변수에 자동적으로 붙여서 나온다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob); // ''를 사용하게 되면 +로 잇기. 번거롭다.

// boolean
// false: 0, null, undefined, NaN, ''(empty String)
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 넌 텅텅 비어있는 empty값이야. 아무것도 아니야!
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 되어 있지만 아무것도 값이 지정되어있지 않는다. 텅텅 비었는지 값이 비었는지 아직 정해지지 않았다.
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
// Map이나 다른 자료구조에서 주어진 문자열에 상관없이 고유한 식별자가 필요하거나, 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때
//create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2) // true 
// symbol을 바로 출력할 수 없다. .description써서 스트링으로 변환해서 출력해야 한다.
console.log(`value: ${symbol1.description}}, type: ${typeof Symbol}`);

// object, real-life, object, data structure
// 변수 zzangu에 한 번 할당된 object는 다른 object로 변경이 불가하다.
const zzangu = { name: 'zzangu', age: 5 };
// zzangu object 안에있는 변수들은 변경이 가능하다.
console.log(zzangu);
zzangu.age = 10;
console.log(zzangu);

// 5. Dynamic typing : dynamically typed language
// 선언할 때 타입을 선언하지 않고 런타임 할때 할당된 값에 따라서 타입이 변경될 수 있다.
let text = 'hello';
console.log(text.charAt(0)); //t text의 0번지는 h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 문자열에 +가 있으면 뒤에 숫자가 와도 문자열로 변환해서 계산.
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number 타입에서만 쓸 수 있는 /를 썼고 '문자열' 안에 숫자가 있으므로 숫자로 변환해서 계한
// console.log(text.charAt(0)); // 런타임 에러. // 이러한 이유 때문에 TypeScript가 생겨났다. 나중에 배우기