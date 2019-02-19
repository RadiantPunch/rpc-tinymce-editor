!function(H){tinymce.PluginManager.add("rpc_tinymce_meter",function(O,e){O.addButton("meter",{title:"Meter",image:e+"/meter.svg",cmd:"meterCmd"}),O.addCommand("meterCmd",function(){var E=O.selection.getContent({format:"text"}),e=O.windowManager.open({title:"Meter",body:[{type:"fieldset",border:"0 0 1 0",padding:"15 0 0 0",items:[{type:"container",html:'<p style="text-align:center; font-weight:bold; margin: 10px 0;">Required Meter Parameters</p>'},{type:"textbox",name:"meterMin",label:"Meter Minimum"},{type:"textbox",name:"meterMax",label:"Meter Maximum"},{type:"textbox",name:"meterVal",label:"Measurement"}]},{type:"fieldset",border:"0 0 0 0",padding:"15 0 0 0",items:[{type:"container",html:'<p style="text-align:center; font-weight:bold;">Optional Parameters</p>'},{type:"textbox",name:"meterLow",label:"Low End"},{type:"textbox",name:"meterHigh",label:"High End"},{type:"textbox",name:"meterOpt",label:"Optimum Value"}]}],buttons:[{text:"Ok",subtype:"primary",onclick:function(){e.submit()}},{text:"Cancel",onclick:"close"}],onsubmit:function(r){var e=r.data.meterMin,t=r.data.meterMax,n=r.data.meterVal,a=r.data.meterLow,i=r.data.meterHigh,m=r.data.meterOpt,l="",u="",o="",s="",d="",p="",f=!1,b=!1,c='<span class="edit">',h="</span>",M=O.windowManager;function g(e){for(var t=0;t<e.length;t++){if(0===e[t].length)return!1}return!0}function x(e){for(var t=0;t<e.length;t++){var n=e[t];if(!H.isNumeric(n))return M.alert("Please input numbers only."),r.preventDefault(),!1}return!0}if(!g([e,t,n]))return M.alert("Please fill out all required fields."),void r.preventDefault();if(x([e,t,n])){if(e=Number(e),t=Number(t),n=Number(n),!(e<t&&e<=n&&n<t))return M.alert("Make sure your Meter Minimum is less than Meter Maximum and that the Measurement is between the two."),void r.preventDefault();if(l=' min="'+c+e+h+'"',u=' max="'+c+t+h+'"',o=' value="'+c+n+h+'"',f=!0,function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].length;return 0!==t}([a,i,m])){var v=!1,y=!1,w=!1,D=!1,N=!1;if(g([a])&&x([a])){if(!(e<=(a=Number(a))&&a<t))return M.alert("The Low End must be between the Meter Minimum and Maximum"),void r.preventDefault();D=!0}else v=!0;if(g([i])&&x([i])){if(!(e<(i=Number(i))&&i<=t))return M.alert("The High End must be between the Meter Minimum and Maximum"),void r.preventDefault();N=!0}else y=!0;if(g([m])&&x([m])){if(!(e<=(m=Number(m))&&m<=t))return M.alert("The Optimum must be between the Meter Minimum and Maximum"),void r.preventDefault();w=!0,p=' optimum="'+c+m+h+'"'}else w=!0;if(!0===N&&!0===D){if(!(a<i))return M.alert("The Low End must be less than the High End"),void r.preventDefault();y=v=!0,s=' low="'+c+a+h+'"',d=' high="'+c+i+h+'"'}else!0===N?(d=' high="'+c+i+h+'"',y=!0):!0===D?(s=' low="'+c+a+c+'"',v=!0):y=v=!0;!0===v&&!0===y&&!0===w&&(b=!0)}else b=!0;if(!0===f&&!0===b){var C='<span class="no-edit"><span class="scode no-return">[meter'+l+u+o+s+d+p+']</span><span class="edit">'+E+'</span><span class="scode">[/meter]</span></span>';O.insertContent(C)}}}})})})}(jQuery);