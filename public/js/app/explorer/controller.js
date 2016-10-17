function explorer(appObject) {

	// 打开对话框
	$.dialog({
		title: appObject.attr('title'),
		content: '<div id="appcontent"></div>',
		width:800,
		height:450,
		padding:'0px',
		minWidth: 96,				// 最小宽度限制
		minHeight: 200,				// 最小高度限制
	});
	
	tpl = '<div class="explorer-topbar">\
				<div class="next-prev-box"></div>\
				<div class="sortstyle-box"></div>\
				<div class="config-button"></div>\
				<div class="higher-button"></div>\
				<div class="collection-button"></div>\
				<div class="search-box"></div>\
		   </div>\
			<div class="explorer-main">\
			    <div class="explorer-main-menu"></div>\
			    <div class="explorer-main-content">\
			        <div class="app-list">\
					  <template v-for="item in items">\
			            <div class="app-box middle" title="{{item.title}}" @dblclick="openapp(item.name)" name="{{item.name}}">\
			                <span class="app-icon">\
			                    <img src="{{item.icon}}" alt="{{item.title}}" class="img-rounded">\
			                </span>\
			                <span class="app-name">{{item.title}}</span>\
			                <div class="clear"></div>\
			            </div>\
					   </template>\
			        </div>\
			   </div>\
			</div>'

	// 渲染模板
	var appcontent = new Vue({
		el: '#appcontent',
		template:tpl,
		data: {
			items: [
			{ name: 'explorer',title: '我的电脑',icon: 'images/apps/com.apple.imac-aluminum-24.png' },
			{ name: 'system',title: '系统设置',icon: 'images/apps/ToolbarCustomizeIcon.png' }
			]
		},
		methods: {
			openapp: function (msg) {
				// 重新获取远程数据
				this.items = [
					{ name: 'explorer',title: '我的世界',icon: 'images/apps/com.apple.imac-aluminum-24.png' },
					{ name: 'system',title: '我的生活',icon: 'images/apps/ToolbarCustomizeIcon.png' }
					];
				// 图标重排
				setTimeout("explorerAppSort()", 1);
			}
		}
	});

	// 图标重排
	explorerAppSort();

}

// 图标重排
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
		$(this).animate({left:width+"px",top:height+'px'});
		height = $(this).outerHeight(true) +height+10;
	});
}