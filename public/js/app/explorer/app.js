function explorer(appObject) {

	// 页面模板
	// var content = require("./explorer.html");
	// alert(content);
	// 打开对话框
	$.dialog({
		title: appObject.attr('title'),
		content: content,
		width:800,
		height:450,
		padding:'0px',
		minWidth: 96,				// 最小宽度限制
		minHeight: 200,				// 最小高度限制
	});
	
	// 图标重排
	explorerAppSort();

	// 打开对应程序
	$(".aui_state_focus .explorer-main-content .app-list .app-box").on("dblclick", function() {
		var appObject = $(this);
		// 加载动态调用的js
		name = appObject.attr('name');
		seajs.use("app/"+name,function() {
			//动态调用方法、并传递参数
			doCallback(eval(name),[appObject]);
		});
	});

	// 定义执行回调函数方法
	function doCallback(fn,args)    
	{    
		fn.apply(this, args);  
	}

	// 渲染模板
	var demo = new Vue({
		el: '#demo',
		data: {
			message: 'Hello Vue.js!'
		}
	});
}

function explorerAppSort() {
	appHeight = 0;
	desktopHeight = $('.aui_state_focus').height()-50;
	width = 10;
	height = 10;
	$(".aui_state_focus .explorer-main-content .app-list .app-box").each(function(){
		appHeight = appHeight+$(this).outerHeight(true);
		if(appHeight>desktopHeight){
			width = $(this).outerWidth(true) +width+10;
			// 重置总高度和图标相对高度
			appHeight = 0;
			height = 10;
		}
		$(this).css('left',width+'px');
		$(this).css('top',height+'px');
		height = $(this).outerHeight(true) +height+10;
	});
}