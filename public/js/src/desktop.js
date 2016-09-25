define("src/desktop", ["jquery","appsort","artDialog"], function(require) {

		// 程序排列
		appsort.init();

		$(".desktop").height($(window).height()-50);
		//初始化高度  
		$(".desktop").height($(window).height()-50);  
		//当文档窗口发生改变时 触发  
		$(window).resize(function(){  
			$(".desktop").height($(window).height()-50);
			appsort.init();
		});

		$(".app-box").on("dblclick", function() {
			name = $(this).attr('name');
			seajs.use("app/"+name,function() {
				init();
			});
		})

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

})