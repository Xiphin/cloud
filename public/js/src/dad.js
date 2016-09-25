define("src/dad", [ "dad", "jquery" ], function(require) {
    var _x,_y;//鼠标离控件左上角的相对位置
    var _move = false;
    $(".app-box").mousemove(function(){  
          _move = true;
        }).mousedown(function(e){  
          _x=e.pageX-parseInt($(this).css("left"));  
          _y=e.pageY-parseInt($(this).css("top")); 
        }); 

    $('.desktop').mousemove(function(e) {
      var pointX = e.originalEvent.x || e.originalEvent.layerX || 0;
      var pointY = e.originalEvent.y || e.originalEvent.layerY || 0;
      var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置  
      var y=e.pageY-_y; 

      $('#pointX').val(x);
      $('#pointY').val(y);
    });

    var d = $('.app-list').dad(
      {
        callback: function (e) {
          // 获取当前元素坐标
          x = parseInt(e.css("left"));
          y = parseInt(e.css("top"));
          // 获取当前鼠标坐标
          pointY = $('#pointY').val();
          pointX = $('#pointX').val();

          appboxHeight = e.outerHeight(true);
          appboxWidth = e.outerWidth(true);
          // 解决点击也移动图标的问题，合理范围内才移动
          if(!((x-appboxWidth/2) < pointX && pointX < (x+appboxWidth/2)) || !((y-appboxHeight/2)<pointY && pointY<(y+appboxHeight/2)))
          {
            e.css('left',pointX+'px');
            e.css('top',pointY+'px');
          }
        }
      }
    );
    // 模仿回收站
    d.addDropzone('#test', function (e) {
      e.remove();
    });
})