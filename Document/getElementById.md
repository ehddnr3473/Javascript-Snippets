# getElementById()
- 특정 id(unique)를 가진 Element 객체 반환. 만약 document에 같은 id가 있다면, 첫 요소를 반환.
- id parameter는 case-sensitive하며, 요소를 못 찾을 경우, null 반환.
- id가 없는 요소에 접근해야 한다면, querySelector()를 사용할 것.

<br>

## Examples
```javascript
const myTitle = document.getElementById("myTitle");
myTitle.style.color = 'blue';
```

<br>

## Usage notes
Document.querySelector()와 Document.querySelectorAll()과 다르게, getElementById()는 global document 객체로만 사용 가능하다. id 값은 전체 document에서 유일해야 하기 때문에, local 객체(예를 들면 container 객체)의 인스턴스 메서드로 사용해서 요소를 찾을 필요가 없기 때문.

```javascript
const parentDOM = document.getElementById("parent-id");
const test = parentDOM.getElementById("test");
// throw error
// Uncaught TypeError: parentDOM.getElementById is not a function
```