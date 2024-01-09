# after()

## Syntax
```javascript
after(node1);
after(node1, node2, /* ..., */ nodeN);
```

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

