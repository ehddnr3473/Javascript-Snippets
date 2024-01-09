# closest()
Element.closest()는 조상(document root 방향)으로 향하며 지정한 CSS selector와 일치하는 노드(Element를 포함)를 찾을 때 까지 탐색한다. 

<br/>

## Syntax
```javascript
closest(selectors);
```

### Return value
CSS selector와 일치하는 가장 가까운 조상 Object. 없다면, null 반환.

<br/>

## Examples
```html
<article>
  <div id="div-01">
    Here is div-01
    <div id="div-02">
      Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>

  <div id="test"></div>
</article>
```

```javascript
const el = document.getElementById("div-03");

// the closest ancestor with the id of "div-02"
console.log(el.closest("#div-02")); // <div id="div-02">

// the closest ancestor which is a div in a div
console.log(el.closest("div div")); // <div id="div-03">Here is div-03</div>

// the closest ancestor which is a div and has a parent article
console.log(el.closest("article > div")); // <div id="div-01">

// the closest ancestor which is not a div
console.log(el.closest(":not(div)")); // <article>

console.log(el.closest("#div-03")); // <div id="div-03">Here is div-03</div>

console.log(el.closest("#test")); // null

const div = el.closest("#div-03");
const p = document.createElement("p");
p.textContent = "test";
div.append(p);
```