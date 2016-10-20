seajs.config({
    base: "./js/",
    alias: {
    "jquery": "vendor/jquery/1.11.3/jquery.min.js",
    "bootstrap": "vendor/bootstrap/bootstrap.min.js",
    "vue": "vendor/vue/2.0/vue.min.js",
    "jquery-ui": "vendor/jquery/1.11.3/jquery-ui.min.js",
    "artDialog": "vendor/artDialog/4.1.7/jquery.artDialog.source.js",
    "context": "vendor/context/js/context.js",
    "sidebar-modernizr": "vendor/sidebar/js/modernizr.custom.js",
    "sidebar-classie": "vendor/sidebar/js/classie.js",
    "tdrag": "vendor/tdrag/tdrag.js",
    "appsort": "vendor/appsort/appsort.js",
    "ztree": "vendor/zTree/js/jquery.ztree.all.min.js",
    "nicescroll": "vendor/nicescroll/jquery.nicescroll.min.js",
    }
});
seajs.use("jquery");
seajs.use("bootstrap");
seajs.use("vue");
seajs.use("library/region");
seajs.use("library/desktop");
seajs.use("library/context");
seajs.use("library/menuRight");
seajs.use("library/dock");
seajs.use("library/tdrag");