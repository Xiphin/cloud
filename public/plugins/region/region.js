	(function($) {
		$.fn.dom = function() { return this[0] ;}
	})($) ;
	function Pointer(x, y) {
		this.x = x ;
		this.y = y ;
	}
	function Position(left, top) {
		this.left = left ;
		this.top = top ;
	}
	function Direction(horizontal, vertical) {
		this.horizontal = horizontal ;
		this.vertical = vertical ;
	}
	$(function() {

		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth ;
		var clientHeight = document.documentElement.clientHeight || document.body.clientHeight ;
		$(".desktop_bg").width(clientWidth).height(clientHeight) ;

		var oldPointer = new Pointer() ;
		var oldPosition = new Position() ;
		var direction = new Direction() ;
		var div = $("<div></div>").css({
			background : "blue",
			position  : "absolute",
			opacity : "0.2"
		}).appendTo($("body")) ;
		var isDown = false ;
		$(document).mousedown(function(e) {
			
			e.preventDefault() ;
			if(div.dom().setCapture) {
				div.dom().setCapture(true) ;
			}
			$("ul li").css("border", "1px solid transparent") ;
			isDown = true ;
			oldPointer.x = e.clientX ;
			oldPointer.y = e.clientY ;
			oldPosition.left = e.clientX,
			oldPosition.top = e.clientY
			div.css({
				left : e.clientX,
				top : e.clientY
			}) ;
		}) ;
		div.extend({
			 checkC : function() {
				var $this = this ;
				$("ul li").each(function() {
					if($this.offset().left + $this.width() > $(this).offset().left && 
					  $this.offset().left < $(this).offset().left + $(this).width()
					   && $this.offset().top + $this.height() > $(this).offset().top 
					   && $this.offset().top < $(this).offset().top + $(this).height()) {
						$(this).css("border", "1px solid #90bedb") ;
					 } else {
						$(this).css("border", "1px solid transparent") ;
					 }
				}) ;
			}
		}) ;
		$(document).mousemove(function(e) {
			if(!isDown) return isDown ;
			if(e.clientX > oldPointer.x) {
				direction.horizontal = "Right" ;
			} else if(e.clientX < oldPointer.x) {
				direction.horizontal = "Left" ;
			} else {
				direction.horizontal = "" ;
			}
			if(e.clientY > oldPointer.y) {
				direction.vertical = "Down" ;
			} else if(e.clientY < oldPointer.y) {
				direction.vertical = "Up" ;
			} else {
				direction.vertical = "" ;
			}
			var directionOperation = {
				LeftUp : function() {
					div.css({
						width : Math.abs(e.clientX - oldPointer.x),
						height : Math.abs(e.clientY - oldPointer.y),
						top : oldPosition.top - Math.abs(e.clientY - oldPointer.y) ,
						left : oldPosition.left - Math.abs(e.clientX - oldPointer.x)
					}) ;
				},
				LeftDown : function() {
					div.css({
						width : Math.abs(e.clientX - oldPointer.x),
						height : Math.abs(e.clientY - oldPointer.y),
						left : oldPosition.left - Math.abs(e.clientX - oldPointer.x)
					}) ;
				},
				Down : function() {
					div.css({
						width : 1,
						height : Math.abs(e.clientY - oldPointer.y)
					}) ;
				},
				Up : function() {
					div.css({
						width : 1,
						height : Math.abs(e.clientY - oldPointer.y),
						top : oldPosition.top - Math.abs(e.clientY - oldPointer.y)
					}) ;
				},
				Right : function() {
					div.css({
						width : Math.abs(e.clientX - oldPointer.x),
						height : 1
					}) ;
				},
				Left : function() {
					div.css({
						width : Math.abs(e.clientX - oldPointer.x),
						height : 1,
						left : oldPosition.left - Math.abs(e.clientX - oldPointer.x)
					}) ;
				},
				RightDown : function() {
					div.css({
						width : Math.abs(e.clientX - oldPointer.x),
						height : Math.abs(e.clientY - oldPointer.y)
					}) ;
				},
				RightUp : function() {
					div.css({
						width : Math.abs(e.clientX - oldPointer.x),
						height : Math.abs(e.clientY - oldPointer.y),
						top : oldPosition.top - Math.abs(e.clientY - oldPointer.y)
					}) ;
				}
			}
			directionOperation[direction.horizontal + direction.vertical]() ;
			div.checkC() ;
			
		}) ;
		$(document).mouseup(function() {
			if(!isDown) return isDown ;
			isDown = false ;
			div.width(0).height(0) ;
			if(div.dom().releaseCapture) {
				div.dom().releaseCapture(true) ;
			}
		}) ;
		
	}) ;