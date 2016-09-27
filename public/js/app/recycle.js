function recycle() {
	// 定义页面模板
	content = '<div id=\"demo\"><p>{{message}}</p></div>';

	// 打开对话框
	$.dialog({
		title: '这里是回收站',
		content: content,
		width:800,
		height:450,
		padding:'0px',
		minWidth: 96,				// 最小宽度限制
		minHeight: 200,				// 最小高度限制
	});

	// 渲染模板
	var demo = new Vue({
		el: '#demo',
		data: {
			message: '这里是回收站'
		}
	});
}