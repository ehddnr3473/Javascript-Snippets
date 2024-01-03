# querySelectorAll()
CSS selectors와 일치하는 document의 NodeList(Array) 반환.

## Examples
```javascript
const matches = document.querySelectorAll("p");

// document 내부의 div 내부의 note 또는 alert 클래스를 가진 요소들 반환.
const matches = document.querySelectorAll("div.note, div.alert");
```

<br>

id가 test인 컨테이너를 가져와서, 그 내부의 div(클래스: highlighted)를 부모 요소로 하는 p 요소 리스트 가져오기.
```javascript
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```