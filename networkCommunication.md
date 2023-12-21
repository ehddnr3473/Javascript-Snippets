<h1>프로퍼티 매핑</h1>

<h3>java - spring</h3>

```java
@Getter
@Setter
public class SearchVO {
	private int no;
	private String code;
}
```

```java
@PostMapping("/ajax/search.json")
public ModelAndView search(SearchVO searchVO) throws Excpetion {
	ModelAndView mav = new ModelAndView("jsonView);

	List<SearchVO> results = searchService.select(searchVO);
	mav.addObject("results", results);

	return mav;
}
```

<br>
<h3>javascript + jquery ajax</h3>

```javascript
function request(parameters) {
	$.ajax({
		url: "${contextPath}/mappingUrl/ajax/search.json",
		type: "POST", 
		data: parameters,
		success: function(response) {
			console.log(response.results);
		},
		error: function() {
			alert("error");
		}
	});
}
```

<br>

<h1>객체 프로퍼티 매핑</h1>
<h3>java - spring</h3>

```java
@Getter
@Setter
public class SearchVO {
	private int no;
	private String code;
	private List<PersonVO> persons; 
}
```

```java
@PostMapping("/ajax/search.json")
public ModelAndView search(@RequestBody SearchVO searchVO) throws Excpetion {
	ModelAndView mav = new ModelAndView("jsonView);

	List<SearchVO> results = searchService.select(searchVO);
	mav.addObject("results", results);

	return mav;
}
```

<br>
<h3>javascript + jquery ajax</h3>

```javascript
function request(parameters) {
	$.ajax({
		url: "${contextPath}/mappingUrl/ajax/search.json",
		type: "POST",
		contentType: "application/json", 
		data: JSON.stringify(parameters),
		success: function(response) {
			console.log(response.results);
		},
		error: function() {
			alert("error");
		}
	});
}
```


