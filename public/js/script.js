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

  $(".desktop").mousedown(function(){
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

$(".desktop").height($(window).height()-50);
	//初始化高度  
	$(".desktop").height($(window).height()-50);  
	//当文档窗口发生改变时 触发  
	$(window).resize(function(){  
	  $(".desktop").height($(window).height()-50);
		appsort();
	});
	//定义dock
	$('#dock').dockmenu({
	  buttons: [{
	    'title': 'Settings',
	    'href': '#settings',
	    'imgURL': root_path+'images/apps/ToolbarCustomizeIcon.png',
	    'onClick': function(){
				$.dialog({
							title: '欢迎',
							content: '欢迎使用artDialog对话框组件！',
							icon: 'succeed',
							follow: document.getElementById('btn2'),
							ok: function(){
									this.title('警告').content('请注意artDialog两秒后将关闭！').lock().time(2);
									return false;
							}
					});
	     }
	  },{
	    'title': 'App Store',
	    'href': '#AppStore',
	    'imgURL': root_path+'images/apps/AppStore.png',

	  },{
	    'title': 'Finder',
	    'href': '#Finder',
	    'imgURL': root_path+'images/apps/Finder.png',

	  },{
	    'title': 'iCloudDrive',
	    'href': '#iCloudDrive',
	    'imgURL': root_path+'images/apps/iCloudDrive.png',

	  },{
	    'title': 'Game Center',
	    'href': '#Game Center',
	    'imgURL': root_path+'images/apps/Game Center.png',

	  },{
	    'title': 'Calibrator',
	    'href': '#Calibrator',
	    'imgURL': root_path+'images/apps/Calibrator.png',
		'onClick': function(){
	          alert('You clicked on the Music icon');
	     }
	  },{
	    'title': 'Safari',
	    'href': '#Safari',
	    'imgURL': root_path+'images/apps/Safari.png',

	  },{
	    'title': 'firefox',
	    'href': '#firefox',
	    'imgURL': root_path+'images/apps/firefox.png',

	  }]
	});
	// 初始化侧边栏
    var menuRight = document.getElementById( 'cbp-spmenu' ),showRight = document.getElementById( 'showRight' ),body = document.body;
    showRight.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( menuRight, 'cbp-spmenu-open' );
    };
  // 右击menu菜单
	context.init({preventDoubleContext: false});
	context.settings({compress: true});
	context.attach('.desktop', [
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
			context.destroy('.desktop');
			alert('html contextual menu destroyed!');
		}}
	]);
	
	$(document).on('mouseover', '.me-codesta', function(){
		$('.finale h1:first').css({opacity:0});
		$('.finale h1:last').css({opacity:1});
	});
	
	$(document).on('mouseout', '.me-codesta', function(){
		$('.finale h1:last').css({opacity:0});
		$('.finale h1:first').css({opacity:1});
	});
	
})