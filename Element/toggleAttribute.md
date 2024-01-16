# toggleAttribute()
Element 인터페이스의 toggleAttribute() 메서드는 Boolean attribute를 토글함.

<br/>

## Syntax
```javascript
toggleAttribute(name);
toggleAttruibute(name, force);
```

### Parameters
- name: 토글할 attribute 이름. HTML 문서의 HTML element에서 toggleAttribute()가 호출될 때, 자동으로 lower-case로 변환됨.

- force: Optional. 
    * 명시하지 않으면, toggleAttribute 메서드는 'name' attribute를 토글함. name이 존재하면 삭제하고, 아니라면 추가함.
    * true: 'name' attribute를 추가
    * false: 'name' attribute를 삭제

<br/>

## Examples
```html
<input value="text" />
<button>toggleAttribute("disabled")</button>
```

```javascript
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListner("click", () => {
    input.toggleAttribute("disabled");
});
```