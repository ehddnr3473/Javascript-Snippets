	function configureMenu(menuList) {
		var appendHtml = "";
		var currentParentMenuId;
		
		for(var i = 0; i < menuList.length; i++) {
			if (menuList[i].parentMenuId == 0) {
				currentParentMenuId = menuList[i].menuId;
			} else {
				if (menuList[i].parentMenuId != currentParentMenuId) { break; }
				
				appendHtml += '<li>';
				appendHtml += '<a id="dynamicTab' + String(menuList[i].menuId); 
				appendHtml += '" href="#" onclick="fnGoMenu(' + "'";
				appendHtml += menuList[i].menuId + "', '" + menuList[i].menuName + "', '"
				appendHtml += '${contextPath}' + menuList[i].filePath + "')" + '">';
				appendHtml += menuList[i].menuName + '</a>';
				appendHtml += '</li>';
			}
		}
		
		$("#sub").html(appendHtml);
	}
	
	function configureMenu(menuList) {
		var currentParentMenuId;
		
		for(var i = 0; i < menuList.length; i++) {
			if (menuList[i].parentMenuId == 0) {
				currentParentMenuId = menuList[i].menuId;
			} else {
				if (menuList[i].parentMenuId != currentParentMenuId) { break; }
				
				const menuId = String(menuList[i].menuId);
				const menuName = menuList[i].menuName;
				const filePath = '${contextPath}' + menuList[i].filePath;
				
				const $li = $('<li>');
				const $a = $("<a>")
					.attr("id", "dynamicTab" + String(menuList[i].menuId))
					.attr("href", "#")
					.text(menuList[i].menuName);
				
				$a.on("click", function() {
					fnGoMenu(
						menuId, 
						menuName, 
						filePath
					);
				});
				
				$li.append($a);
				$("#sub").append($li);
			}
		}
	}
