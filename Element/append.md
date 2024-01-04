# append()
Element.append()는 노드 객체(들) 또는 문자열 객체들을 Element의 마지막 자식 요소 다음에 추가한다. 문자열 객체는 Text 노드로 추가됨.

**Node.appendChild()와 다른점:**
- Element.append()는 문자열 객체도 추가 가능한 반면, Node.appendChild()는 Node 객체만 추가할 수 있다.
- Element.append()는 반환 값이 없는 반면, Node.appendChild()는 추가된 Node 객체를 반환한다.
- Element.append()는 여러 개의 노드와 문자열을 추가할 수 있는 반면, Node.appendChild()는 하나의 노드만 추가할 수 있다.

## Examples

**Appending an element**
```javascript
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]
```

**Appending text**
```javascript
let div = document.createElement("div");
div.append("test");

console.log(div.textContent); // "test"
```

**Appending an element and text**
```javascript
let div = document.createElement("div");
let p = document.createElement("p");
div.append("test", p);

console.log(div.childNodes); // NodeList [ #text "test", <p> ]
```