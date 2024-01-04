# async

## Examples
```javascript
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
```

<br/>


# await
- await 키워드는 Promise를 기다리고 fulfillment value를 가져올 때 사용한다. await는 async function 또는 모듈의 최상위 레벨(모듈 파일에서 어떤 함수나 블록 안에 속하지 않은, 파일의 가장 바깥쪽 범위)에서 사용할 수 있다.

<br/>

## Syntax
```javascript
await expression
```

<br/>

## Examples
Promise가 await expression에 사용되면, Promise가 fulfilled 되고 fulfilled value를 반환할 때 까지 대기한다.

<br/>

### Thenable objects
Thenable objects는 Promise objects와 똑같이 resolve 또는 reject.

```javascript
async function f() {
    const thenable = {
        then(resolve, _reject) {
            resolve("resolved!");
        },
    };

    console.log(await thenable); // "resolved!"
}

f();
```
<br/>

### Top level await
상위 모듈은 다른 하위 모듈을 block하지 않고 await를 사용하는 하위 모듈의 실행을 기다림.

```javascript
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```