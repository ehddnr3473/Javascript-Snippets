# removeAttribute()
element의 특정 attribute 제거

<br/>

## Syntax
```javascript
// attrName에 해당하는 attribute가 존재하지 않는다면, error를 생성하지 않고 반환
removeAttribute(attrName);
```

<br/>

## Usage notes
attribute 값을 null로 직접 또는 setAttribute로 입력하는 것 대신에 removeAttribute를 쓰는 것이 좋다. 다수의 attribute가 null로 설정했을 때, 의도대로 동작하지 않을 수 있다.

<br/>

## Examples
```javascript
document.getElementById("div1").removeAttribute("disabled");
```