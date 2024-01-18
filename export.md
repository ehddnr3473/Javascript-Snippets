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


```