문자열 템플릿 내에서 변수를 사용하려면, 백틱(backtick) 문자(`)로 문자열을 둘러싸고, 변수나 표현식을 '${}'로 감싸줌. 

```javascript
function getGridTopPager(selectId, inputId, buttonId) {
	return `<div class="grid_top_pager">
				<ul>
					<li><label for="${selectId}">표시줄수</label></li>
					<li class="select_form">
						<select id="${selectId}" class="form_control">
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="30">30</option>
							<option value="50">50</option>
							<option value="100">100</option>
							<option value="200">200</option>
						</select>
						<span class="caret"></span>
					</li>
				</ul>
				<ul>
					<li><label for="${inputId}">페이지이동</label></li>
					<li><input type="number" id="${inputId}" class="form_control" /></li>
					<li><button id="${buttonId}" class="btn btn_bk">GO</button></li>
				</ul>
			</div>`;
}
```
