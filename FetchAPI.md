# Fetch API
- Fetch API는 Request와 Response 객체를 사용
- request를 생성하고 리소스를 가져오려면, fetch() 메서드를 사용. fetch() 메서드는 Window와 Worker context의 global 메서드이다.

<br/>

## Supplying request options
fetch() 메서드는 첫 번째 argument인 리소스 패스 말고도, 선택적으로 두 번째 argument인 init 객체를 넘겨줄 수 있다.

```javascript
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json", 
            // "Content-Type": "application/x-www-form-urlencoded", 
        }, 
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native Javascript objects
}


postData("https://example.com/test", { answer: 42 }).then((data) => {
    console.log(data);
});
```

<br/>

## Examples
```javascript
async function postJSON(data) {
    try {
        const response = await fetch("https://example.com/profile", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(data);
        });

        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

const data = { name: "test" };
postJSON(data);
```