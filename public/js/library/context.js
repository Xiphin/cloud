define("library/context", [ "context", "jquery","appsort" ], function(require) {
    // 右击menu菜单
    var $ = require("jquery");
	context.init({preventDoubleContext: false});
	context.settings({compress: true});
	context.attach('.desktop', [
		{header: ''},
		{text: '查看', subMenu: [
			{text: '自动对齐', action: function(e){
				e.preventDefault();
				appsort.init();
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
});