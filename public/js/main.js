seajs.config({
    base: "./js/",
    alias: {
    "jquery": "dist/jquery/1.11.3/jquery.min.js",
    "jquery-ui": "dist/jquery/1.11.3/jquery-ui.min.js",
    "artDialog": "dist/artDialog/4.1.7/jquery.artDialog.source.js",
    "context": "dist/context/js/context.js",
    "sidebar-modernizr": "dist/sidebar/js/modernizr.custom.js",
    "sidebar-classie": "dist/sidebar/js/classie.js",
    "tdrag": "dist/tdrag/tdrag.js",
    "appsort": "dist/appsort/appsort.js",
    "bootstrap": "bootstrap.min.js",
    "bootstrap-table": "dist/bootstrapTable/bootstrap-table.min.js",
    "bootstrap-editable": "dist/bootstrapTable/editable/bootstrap-editable.js",
    }
});
seajs.use("src/region");
seajs.use("src/desktop");
seajs.use("src/context");
seajs.use("src/menuRight");
seajs.use("src/dock");
seajs.use("src/tdrag");
