jQuery,tinymce.PluginManager.add("rpc_tinymce_strong",function(o,n){o.on("init",function(n){o.formatter.register("strong_format",{inline:"strong"})}),o.addButton("strong",{title:"Strong",image:n+"/icons/strong.svg",onclick:function(){o.execCommand("mceToggleFormat",!1,"strong_format")},onpostrender:function(){var t=this;o.on("init",function(){o.formatter.formatChanged("strong_format",function(n){t.active(n)})})}})});