function recycle() {
	// 定义页面模板
	content = '<style>.w70 {width: 70px !important;}</style><div id="toolbar"><div class="form-inline" role="form"><div class="form-group"><span>Offset: </span><input name="offset" class="form-control w70" type="number" value="0"></div><div class="form-group"><span>Limit: </span><input name="limit" class="form-control w70" type="number" value="5"></div><div class="form-group"><input name="search" class="form-control" type="text" placeholder="Search"></div><button id="ok" type="submit" class="btn btn-default">OK</button></div></div><table id="table" data-url="http://www.project.com/json/data.json" data-toggle="table" data-toolbar="#toolbar" data-show-refresh="true" data-show-toggle="true" data-show-columns="true" data-side-pagination="server" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]"><thead><tr><th data-field="id">ID</th><th data-field="name">Item Name</th><th data-field="price">Item Price</th></tr></thead></table>';
	// 定义程序图标
	appicondata = '';

	// 打开对话框
	$.dialog({
		title: '这里是回收站',
		content: content,
		width:800,
		height:450,
		padding:'0px',
		minWidth: 96,				// 最小宽度限制
		minHeight: 200,				// 最小高度限制
		appicon: appicondata,		// app图标
		toolbar: true,				// 应用打开时添加到工具栏
		dockbar: false,				// 应用打开时添加到dock
	});

	// 创建表格
	$('#table').bootstrapTable();

}