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

		// 打开对应程序
		$(".app-box").on("dblclick", function() {
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

		// 任务栏程序
		$(".navbar-nav-right").on("click",'li', function() {
			id = $(this).attr('id');
			display = $('.'+id).css('visibility');
			if(display != 'hidden'){
				$.dialog.list[id].display(false);
			} else {
				$.dialog.list[id].display(true);
			}

		})

		// dock程序
		$("#dock-menu-list").on("click",'li', function() {
			id = $(this).attr('id');
			$.dialog.list[id].display(true);
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
			//return false;
		});
		$(".desktop").mousedown(function(){
			$(".app-box").removeClass('active');
		});

})