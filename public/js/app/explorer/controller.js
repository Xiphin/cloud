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
			        {{message}}\
			            <div class="app-box middle" title="我的电脑" v-on:click="openapp(\'explorer\')" name="explorer" path="c:/">\
			                <span class="app-icon">\
			                    <img src="images/apps/com.apple.imac-aluminum-24.png" alt="我的电脑" class="img-rounded">\
			                </span>\
			                <span class="app-name">我的电脑</span>\
			                <div class="clear"></div>\
			            </div>\
			            <div class="app-box middle" title="系统设置" name="explorer">\
			                <span class="app-icon">\
			                    <img src="images/apps/ToolbarCustomizeIcon.png" alt="系统设置" class="img-rounded">\
			                </span>\
			                <span class="app-name">系统设置</span>\
			                <div class="clear"></div>\
			            </div>\
			        </div>\
			   </div>\
			</div>'

	// 渲染模板
	var appcontent = new Vue({
		el: '#appcontent',
		template:tpl,
		data: {
			message: 'Hello Vue.js!'
		},
		methods: {
			openapp: function (msg) {
			  this.message = this.name;
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
		$(this).css('left',width+'px');
		$(this).css('top',height+'px');
		height = $(this).outerHeight(true) +height+10;
	});
}