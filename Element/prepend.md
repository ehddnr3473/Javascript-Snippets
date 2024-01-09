# prepend
Element.prepend()는 Node 또는 문자열 객체들을 Element의 첫 번째 자식 요소의 이전에 추가하는 메서드이다.

## Examples
```javascript
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");

div.append(p);
div.prepend("test", span);

console.log(div.childNodes); // NodeList [ "test", <span>, <p>]
```