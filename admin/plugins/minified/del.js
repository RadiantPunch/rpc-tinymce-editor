jQuery,tinymce.PluginManager.add("rpc_tinymce_del",function(t,n){t.on("init",function(n){t.formatter.register("del_format",{inline:"del"})}),t.addButton("del",{title:"Deletion",image:n+"/icons/del.svg",onclick:function(){t.execCommand("mceToggleFormat",!1,"del_format")},onpostrender:function(){var e=this;t.on("init",function(){t.formatter.formatChanged("del_format",function(n){e.active(n)})})}})});