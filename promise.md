# Promise
Promise는 비동기 작업의 결과로서 일어나는 completion 또는 failure와 그것의 결과값을 나타낸다.

### 예시

#### 단일 Promise 처리

```javascript
requestData1()
	.then(() => {
 		configureWithData1();
	})
 	.catch((error) => {
  		alert(error.message);
	});

// 혹은
requestData1()
	.then(function() {
 		configureWithData1();
	})
 	.catch(function(error) {
  		alert(error.message);
	});
```

#### 모든 비동기 작업이 완료되면 메서드 실행

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

function requestData1(queryData) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: myUrl,
			type: "POST",
			contentType: "application/json",
			data: JSON.stringify(queryData), 
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

#### resolve

```javascript
function performQuery() {
	const queryData1 = {
		a : "1",
		b : "2"
	};

	const queryData2 = {
		a : "3",
		b : "4"
	};

	Promise.all([
		requestData(queryData1),
		requestData(queryData2)
	]).then(function([resultList1, resultList2]){
		resultList1.concat(resultList2);
	}).catch(function() {
		//
	});
}

function requestData(queryData) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "${contextPath}/outProductionId/ajax/selectOutProductionIds.json", 
			type: "POST", 
			data: queryData, 
			success: function(response) {
				resolve(response.resultList);
			}, 
			error: function() {
				reject();
			}
		});
	});
}
```


