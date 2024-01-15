# matches
Element 인터페이스의 matches() 메서드는 특정 CSS selector가 일치하는 지 확인한다.

<br/>

## Syntax
```javascript
matches(selectors)
```

<br/>

### Examples
```html
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>
```

```javascript
const birds = document.querySelectorAll("li");

for (const bird of birds) {
  if (bird.matches(".endangered")) { // 일치하면 true, 아니라면 false 반환
    console.log(`The ${bird.textContent} is endangered!`);
  }
}
```

