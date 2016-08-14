<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>wanpiao</title>
  <!-- Bootstrap 核心 CSS 文件 -->
  <link rel="stylesheet" href="{{asset('css/app.css')}}">
  <!-- style CSS 文件 -->
  <link rel="stylesheet" href="{{asset('css/style.css')}}">
  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- MVVM框架 -->
  <script src="{{asset('js/app.js')}}"></script>
  <style>
    body{
      background-image:url({{asset('images/wallpapers/Andromeda%20Galaxy.jpg')}});
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle glyphicon glyphicon-apple" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
          <ul class="dropdown-menu">
            <li><a href="#">关于本机</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">系统偏好设置</a></li>
            <li><a href="#">App Store</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">最近使用的项目</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">锁屏</a></li>
            <li><a href="#">退出</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><b>Finder</b></a>
          <ul class="dropdown-menu">
            <li><a href="#">关于Finder</a></li>
            <li><a href="#">偏好设置</a></li>
            <li><a href="#">清倒废纸篓</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">服务</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">隐藏Finder</a></li>
            <li><a href="#">隐藏其他</a></li>
          </ul>
        </li>
          <li><a href="#">文件</a></li>
          <li><a href="#">编辑</a></li>
          <li><a href="#">显示</a></li>
          <li><a href="#">前往</a></li>
          <li><a href="#">窗口</a></li>
          <li><a href="#">帮助</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-nav-right">
          <li><a class="glyphicon glyphicon-volume-up" aria-hidden="true" href="#"></a></li>
          <li><a class="glyphicon glyphicon-eject" aria-hidden="true" href="#"></a></li>
          <li><a href="#">周四下午22：13</a></li>
          <li><a class="glyphicon glyphicon-search" aria-hidden="true" href="#"></a></li>
          <li><a class="glyphicon glyphicon-list" id="showRight" aria-hidden="true" href="#"></a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
  <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu" style="margin-top:30px;">
    <h3>7月9日星期六</h3>
    <a href="#">天气预报</a>
    <a href="#">最新资讯</a>
    <a href="#">热点股市</a>
    <h3>每天一个笑话</h3>
    <a href="#">小明的故事书</a>
  </nav>
  <div class="container desktop">
    <div class="starter-template">

    </div>
	  <div id="dock"></div>
  </div><!-- /.container -->
  <script type="text/javascript">
    var root_path = '{{asset('')}}';
  </script>
  <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
  <script src="{{asset('plugins/jquery/1.11.3/jquery.min.js')}}"></script>
  <script src="{{asset('plugins/jquery/1.11.3/jquery-ui.min.js')}}"></script>

  <link rel="stylesheet" href="{{asset('plugins/dock/dockmenu.css')}}">
  <script src="{{asset('plugins/dock/dockmenu.min.js')}}"></script>

  <link rel="stylesheet" type="text/css" href="{{asset('plugins/context/css/context.standalone.css')}}">
	<script src="{{asset('plugins/context/js/context.js')}}"></script>

  <link rel="stylesheet" href="{{asset('plugins/sidebar/css/component.css')}}" />
  <script src="{{asset('plugins/sidebar/js/modernizr.custom.js')}}"></script>
	<script src="{{asset('plugins/sidebar/js/classie.js')}}"></script>

  <script src="{{asset('plugins/artDialog/4.1.7/jquery.artDialog.source.js?skin=aero')}}"></script>
  <script src="{{asset('plugins/artDialog/4.1.7/plugins/iframeTools.source.js')}}"></script>
  
  <script src="{{asset('js/script.js')}}"></script>
</body>
</html>