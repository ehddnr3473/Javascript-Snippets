# after() & before()
Element.after() 및 before()는 Node 또는 문자열 객체들을 Element의 부모의 자식 요소 리스트에 (after - Element의 다음 요소로, before - Element의 이전 요소로)삽입하는 것이다. 문자열 객체는 Text 노드로 삽입된다.

아래는 after() 내용

<br/>

## Syntax
```javascript
after(node1);
after(node1, node2, /* ..., */ nodeN);
```

<br/>

### Examples
```javascript
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>";
```

