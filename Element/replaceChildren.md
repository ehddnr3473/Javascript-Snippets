# replaceChildren
Element.replaceChildren()은 현재 자식을 새로운 자식 set으로 대체한다. 문자열 혹은 Node 객체로 교체할 수 있다.

<br/>

## Syntax
```javascript
replaceChildren(param1);
replaceChildren(param1, param2);
replaceChildren(param1, param2, /* ..., */ paramN);
```

### Parameters
**param1, ..., paramN**: 현재 Element의 자식을 대체할 Node 또는 문자열 객체 set. 대체할 객체(parameter)가 없다면, Element의 모든 자식 노드는 비워진다.

<br/>

## Examples

### Emptying a node

```javascript
myNode.replaceChildren();
```

### Transferring nodes between elements
replaceChildren()은 element 사이에서 node를 전달하기 쉽게 해준다.

```javascript
const noSelect = document.getElementById("no");
const yesSelect = document.getElementById("yes");
const noBtn = document.getElementById("to-no");
const yesBtn = document.getElementById("to-yes");

yesBtn.addEventListener("click", () => {
  const selectedTransferOptions =
    document.querySelectorAll("#no option:checked");
  const existingYesOptions = document.querySelectorAll("#yes option");
  yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener("click", () => {
  const selectedTransferOptions = document.querySelectorAll(
    "#yes option:checked",
  );
  const existingNoOptions = document.querySelectorAll("#no option");
  noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});
```