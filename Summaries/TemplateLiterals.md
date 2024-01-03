# Template literals
Template literals는 backtick(`) 문자를 사용해서 여러 줄의 문자열 표기, 표현식을 사용한 문자열 보간법(string interpolation)을 가능하게 해준다.


## Syntax
```javascript
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`

// Using backtick within template literals
`\`` === "`"; // true

// Using dollar sign within template literals
`\${1}` === "${1}"; // true
```

### Description
placeholder로서  ${expression} 형식으로 표현식을 포함할 수 있다. 문자열과 placeholder는 default 함수 또는 사용자가 제공한 함수로 전달된다.

- default 함수: string interpolation

### Multi-line strings + String interpolation
```javascript
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
```

### Nesting templates
```javascript
const classes = `header ${
    isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Tagged templates
```javascript
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
    const str0 = strings[0]; // "That"
    const str1 = strings[1]; // " is a "
    const str2 = strings[2]; // "."

    const ageStr = argExp < 100 ? "youngster" : "centenarian";

    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output); // That Mike is a youngster.
```