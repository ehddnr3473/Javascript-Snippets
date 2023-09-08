# Promise
비동기 처리

### 예시
모든 비동기 작업이 완료되면 메서드 실행

```javascript
Promise.all([
	requestData1(), 
	requestData2(), 
	requestData3()
]).then(() => {
	configureWithData1();
	configureWithData2();
	configureWithData3();
}).catch((error) => {
	alert(error.message);
});

function requestData1() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: myUrl,
			type: "POST",
			success: function(response) {
				console.log(response.myVO.myProperty);
				resolve();
			},
			error: function(error) {
				reject(error);
			}
		});
	});
}

...
```



