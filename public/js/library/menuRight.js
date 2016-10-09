define("library/menuRight", [ "sidebar-modernizr","sidebar-classie", "jquery" ], function(require) {
 	// 初始化侧边栏
    var menuRight = document.getElementById( 'cbp-spmenu' ),showRight = document.getElementById( 'showRight' ),body = document.body;
    showRight.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( menuRight, 'cbp-spmenu-open' );
    };

	$(document).on('mouseover', '.me-codesta', function(){
		$('.finale h1:first').css({opacity:0});
		$('.finale h1:last').css({opacity:1});
	});
	
	$(document).on('mouseout', '.me-codesta', function(){
		$('.finale h1:last').css({opacity:0});
		$('.finale h1:first').css({opacity:1});
	});
})