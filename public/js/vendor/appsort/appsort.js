var appsort = appsort || (function () {
	function init() {
		appHeight = 0;
		desktopHeight = $(window).height()-50;

		width = 10;
		height = 10;
		$(".desktop .app-list .app-box").each(function(){
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
	return {
		init: init,
	};
})();