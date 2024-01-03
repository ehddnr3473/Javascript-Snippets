# querySelector()
CSS selectors와 일치하는 document의 첫 번째 요소 반환. 존재하지 않는다면 null 반환.

<br>

## Syntax
```javascript
const myElement1 = document.querySelector(".myClass");
const myElement2 = document.querySelector("#myId");
```

<br>

## Complex selectors
```javascript
// document 내부의 <div class="user-panel main"> 내부의 'login'이라는 name을 가진 input 반환.
const loginInput = document.querySelector("div.user-panel.main input[name='login']");
```

<br>

## Negation
```javascript
const notMainLoginInput = document.querySelector("div.user-panel:not(.main) input[name='login']");
```