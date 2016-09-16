$('document').ready(function (argument) {

  $(".app-box").hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});

  $(".app-box").mousedown(function(){
		$(".app-box").removeClass('active');
		$(this).addClass('active');
		// 阻止冒泡事件
		return false;
	});

  $(".explorer").mousedown(function(){
		$(".app-box").removeClass('active');
	});

// 程序排列
appsort()
function appsort() {
	appHeight = 0;
	desktopHeight = $(window).height()-50;

	width = 10;
	height = 10;
	$(".app-box").each(function(){
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

$(".explorer").height($(window).height()-50);
	//初始化高度  
	$(".explorer").height($(window).height()-50);  
	//当文档窗口发生改变时 触发  
	$(window).resize(function(){  
	  $(".explorer").height($(window).height()-50);
		appsort();
	});

  // 右击menu菜单
	context.init({preventDoubleContext: false});
	context.settings({compress: true});
	context.attach('.explorer', [
		{header: ''},
		{text: '查看', subMenu: [
			{text: '自动对齐', action: function(e){
				e.preventDefault();
				appsort();
			}}
		]},
		{text: '刷新', href: '#'},
		{divider: true},
		{text: '保存', href: '#'},
		{text: '打印', href: '#'},
		{text: '新建', subMenu: [
			{text: '快捷方式', href: 'http://lab.jakiestfu.com/contextjs/context.bootstrap.css', target:'_blank', action: function(e){
				_gaq.push(['_trackEvent', 'ContextJS Bootstrap CSS Download', this.pathname, this.innerHTML]);
			}},
			{text: '文件夹', href: 'http://lab.jakiestfu.com/contextjs/context.bootstrap.css', target:'_blank', action: function(e){
				_gaq.push(['_trackEvent', 'ContextJS Bootstrap CSS Download', this.pathname, this.innerHTML]);
			}},
			{text: '文本文档', href: 'http://lab.jakiestfu.com/contextjs/context.standalone.css', target:'_blank', action: function(e){
				_gaq.push(['_trackEvent', 'ContextJS Standalone CSS Download', this.pathname, this.innerHTML]);
			}}
		]},
		{divider: true},
		{text: '主题设置', href: '#'},
		{text: '个性化', action: function(e){
			e.preventDefault();
			context.destroy('.explorer');
			alert('html contextual menu destroyed!');
		}}
	]);
	
})