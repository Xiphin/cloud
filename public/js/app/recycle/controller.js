function recycle() {
	// 定义页面模板
	content = '<style>.w70 {width: 70px !important;}</style><div id="toolbar"><button id="button" class="btn btn-default">remove</button></div><table id="table" data-url="http://www.laravelcloud.com/json/data.json" data-toggle="table" data-toolbar="#toolbar" data-show-refresh="true" data-show-toggle="true" data-show-columns="true" data-side-pagination="server" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-search="true"><thead><tr><th data-field="state" data-checkbox="true"></th><th data-field="id">ID</th><th data-field="name" data-editable="true">Item Name</th><th data-field="price">Item Price</th></tr></thead></table>';
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

    var $table = $('#table'),$button = $('#button');
	// 创建表格
	$table.bootstrapTable({
		columns: [
			{
                checkbox: true
            }, {
                field: "id",
                title: "ID",

            }, {
                field: "name",
                title: "用户名",
                editable: {
                    type: 'text',
                    title: '用户名',
                    validate: function (v) {
                        if (!v) return '用户名不能为空';
                    }
                }
            }, {
                field: "price",
                title: "价格"
            }
		],
		onEditableSave: function (field, row, oldValue, $el) {
			$.ajax({
				type: "post",
				url: "/editable/edit",
				data: row,
				dataType: 'JSON',
				success: function (data, status) {
					if (status == "success") {
						alert('提交数据成功');
					}
				},
				error: function () {
					alert('编辑失败');
				}
			});
		}
	});

	// 执行删除方法
    $(function () {
        $button.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                return row.id;
            });
            $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            });
        });
    });

}