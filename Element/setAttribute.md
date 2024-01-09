# setAttribute()
특정 element에 attribute를 설정한다. attribute가 이미 존재하면, 값을 갱신한다.

<br/>

## Syntax
```javascript
setAttribute(name, value);
```

### Parameters
- name: attribute의 name은 자동으로 lower-case로 변환된다.
- value: 문자열이 아닌 값은 자동으로 문자열로 변환된다.
- boolean attribute는 value로 true를 주고 싶을 때, 공백 없는 "" 빈 문자열을 넘겨주면 됨.
- attribute를 삭제하거나 값을 null로 지정하고 싶다면, value로 null이 아닌 "null"을 넘겨주면 됨.
- attribute를 삭제하고 싶다면, removeAttribute()를 호출하면 됨.

<br/>

## Examples
```html
<button>Test Button</button>
```

```javascript
const button = document.querySelector("button");

button.setAttribute("name", "testButton");
button.setAttribute("disabled", ""); // disable a button
```