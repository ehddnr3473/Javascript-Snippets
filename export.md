# export
- JavaScript 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용. 
- 내보낸 값은 다른 프로그램에서 import 문으로 가져가서 사용.

## Syntax
```javascript
// 하나씩 내보내기
export let name1, name2, /* ..., */ nameN; // var, const도 동일
export let name1 = 'a', name2 = 'b', /* ..., */ nameN; // var, const도 동일
export function myFunction() {/* ... */}
export class ClassName {/* ... */}

// 목록으로 내보내기
export { name1, name2, /* ..., */ nameN };

// 내보내면서 이름 바꾸기
export { variable1 as name1 };

// 비구조화로 내보내기
export const { name1, name2: bar } = o;

// 기본 내보내기
export default expression;
export default function(/* ... */) {/* ... */} // also class, function
export default name1(/* ... */) {/* ... */} // also class, function
export { name1 as default, /* ... */ };

// 모듈 조합
export * from ...;
export * as name1 from ...;
export { name1, name2, /* ..., */ nameN } from ...;
export { import as name1, import2 as name2, ..., nameN } from ...;
export { default } from ...;
```

<br/>

## Description
export에는 두 종류, named와 default 내보내기가 있다. 모듈 하나에서, named export는 여러 개 존재할 수 있지만 default export는 하나만 가능하다.

### named export
```javascript
// 먼저 선언한 식별자 내보내기
export { myFunction, myVariable };

// 각각의 식별자 내보내기
// (변수, 상수, 함수, 클래스)
export let myVariables = Math.sqrt(2);
export function myFunction() {/* ... */};
```
named export는 여러 값을 내보낼 때 유용하다. 가져갈 때는 내보낸 이름과 동일한 이름을 사용해야 한다. 식별자 충돌을 피하기 위해 named export 중 이름을 바꿔줄 수도 있다. 아래는 예시

```javascript
export { myFunction as function1, myVariable as variable }; // function1과 variable로 가져간 파일에서 사용
```

### default export
```javascript
// 먼저 선언한 식별자 내보내기
export { myFunction as default };

// 각각의 식별자 내보내기
export default function() {/* ... */};
export default class {/* ... */};
```
default export는 어떤 이름으로도 가져올 수 있다. 아래는 예시

```javascript
// test.js
let k;
export default k = 12;
```

```javascript
// 임의의 다른 파일
import m from "./test"; // k가 default export이므로, 가져오는 이름으로 k 대신 m을 사용해도 문제 없음.
console.log(m); // 12
```

<br/>

## 다시 내보내기/조합
부모 모듈이 자식 모듈을 가져와서 다시 내보낼 수도 있음. 즉, 여러 개의 모듈을 모아놓을 하나의 모듈을 만들 수 있음.

```javascript
export foo from "bar.js";
// ==
import foo from "bar.js";
export foo;
```