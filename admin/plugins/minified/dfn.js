jQuery,tinymce.PluginManager.add("rpc_tinymce_dfn",function(i,n){i.on("init",function(n){i.formatter.register("dfn_format",{inline:"dfn"})}),i.addButton("dfn",{title:"Definition",image:n+"/icons/dfn.svg",onclick:function(){i.execCommand("mceToggleFormat",!1,"dfn_format")},onpostrender:function(){var t=this;i.on("init",function(){i.formatter.formatChanged("dfn_format",function(n){t.active(n)})})}})});