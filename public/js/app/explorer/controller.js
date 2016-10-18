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

	var setting = {
		data: {
			simpleData: {
				enable: true
			}
		}
	};

	var zNodes =[
		{ id:1, pId:0, name:"展开、折叠", open:true, iconOpen:"js/vendor/zTree/css/zTreeStyle/img/diy/1_open.png", iconClose:"js/vendor/zTree/css/zTreeStyle/img/diy/1_close.png"},
		{ id:11, pId:1, name:"叶子节点1", icon:"js/vendor/zTree/css/zTreeStyle/img/diy/2.png"},
		{ id:12, pId:1, name:"叶子节点2", icon:"js/vendor/zTree/css/zTreeStyle/img/diy/3.png"},
		{ id:13, pId:1, name:"叶子节点3", icon:"js/vendor/zTree/css/zTreeStyle/img/diy/5.png"},
		{ id:2, pId:0, name:"展开、折叠", open:true, icon:"js/vendor/zTree/css/zTreeStyle/img/diy/4.png"},
		{ id:21, pId:2, name:"叶子节点1", icon:"js/vendor/zTree/css/zTreeStyle/img/diy/6.png"},
		{ id:22, pId:2, name:"叶子节点2", icon:"js/vendor/zTree/css/zTreeStyle/img/diy/7.png"},
		{ id:23, pId:2, name:"叶子节点3", icon:"js/vendor/zTree/css/zTreeStyle/img/diy/8.png"},
		{ id:3, pId:0, name:"不使用自定", open:true },
		{ id:31, pId:3, name:"叶子节点1"},
		{ id:32, pId:3, name:"叶子节点2"},
		{ id:33, pId:3, name:"叶子节点3"}
	];

	tpl = '<div class="explorer-topbar">\
				<div class="next-prev-box"></div>\
				<div class="sortstyle-box"></div>\
				<div class="config-button"></div>\
				<div class="higher-button"></div>\
				<div class="collection-button"></div>\
				<div class="search-box"></div>\
		   </div>\
			<div class="explorer-main">\
			    <div class="explorer-main-menu">\
					<ul id="tree" class="ztree"></ul>\
				</div>\
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
			</div>';
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
					{ name: 'explorer',title: '我的世界',icon: 'images/apps/firefox.png' },
					{ name: 'system',title: '我的生活',icon: 'images/apps/Finder.png' }
					];
				// 图标重排
				setTimeout("explorerAppSort()", 1);
			}
		}
	});

	// 图标重排
	explorerAppSort();
	$.fn.zTree.init($("#tree"), setting, zNodes);
	$(".explorer-main-menu").mCustomScrollbar();
}

// 图标重排
function explorerAppSort() {
	appWidth = 0;
	desktopWidth = $('.aui_state_focus').width()-50;
	width = 10;
	height = 10;
	$(".aui_state_focus .explorer-main-content .app-list .app-box").each(function(){
		appWidth = appWidth+$(this).outerWidth(true);
		if(appWidth>desktopWidth){
			height = $(this).outerHeight(true) +height+10;
			// 重置总高度和图标相对高度
			appWidth = 0;
			width = 10;
		}
		$(this).animate({left:width+"px",top:height+'px'});
		width = $(this).outerWidth(true) +width+10;
	});
}