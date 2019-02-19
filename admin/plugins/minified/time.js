!function(C){tinymce.PluginManager.add("rpc_tinymce_time",function(T,e){T.on("init",function(e){T.formatter.register("time_format",{inline:"time"}),T.formatter.register("time_format_remove",{inline:"time",attributes:{datetime:"remove-me"}})}),T.addButton("time",{title:"Time",image:e+"/icons/time.svg",onclick:function(){C(T.selection.getNode()).is("time")?(T.formatter.apply("time_format_remove"),T.formatter.remove("time_format_remove")):T.execCommand("timeCmd")},onpostrender:function(){var t=this;T.on("init",function(){T.formatter.formatChanged("time_format",function(e){t.active(e)})})}}),T.addCommand("timeCmd",function(){var w=T.selection.getContent({format:"html"}),a=T.windowManager.open({title:"Time",body:[{type:"listbox",name:"timeSelect",label:"Time Options",minWidth:300,padding:"0 0 15 0",values:[{text:"Just Date",value:"dateOnly",onselect:function(){var e=a.find("#timeFields"),t=a.find("#dateFields");t.show(),e.hide(),t.active(),e.disabled()}},{text:"Just Time",value:"timeOnly",onselect:function(){var e=a.find("#timeFields"),t=a.find("#dateFields");t.hide(),e.show(),t.disabled(),e.active()}},{text:"Both Date and Time",value:"dateTimeBoth",onselect:function(){var e=a.find("#timeFields"),t=a.find("#dateFields");t.show(),e.show(),t.active(),e.active()}}]},{type:"fieldset",name:"dateFields",border:"1 0 0 0",padding:"25 0 0 0",items:[{type:"listbox",name:"timeMonth",label:"Month",values:[{text:"Not Set",value:""},{text:"January",value:"01"},{text:"February",value:"02"},{text:"March",value:"03"},{text:"April",value:"04"},{text:"May",value:"05"},{text:"June",value:"06"},{text:"July",value:"07"},{text:"August",value:"08"},{text:"September",value:"09"},{text:"October",value:"10"},{text:"November",value:"11"},{text:"December",value:"12"}]},{type:"textbox",name:"timeYear",label:"Year",value:""},{type:"textbox",name:"timeDay",label:"Day",value:""}]},{type:"fieldset",name:"timeFields",hidden:!0,disabled:!0,border:"1 0 0 0",padding:"25 0 0 0",items:[{type:"textbox",name:"timeHour",label:"Hour of the Day"},{type:"textbox",name:"timeMinutes",label:"Minutes"},{type:"listbox",name:"timeAMPM",label:"AM or PM",values:[{text:"Not Set",value:""},{text:"AM",value:"am"},{text:"PM",value:"pm"}]}]}],buttons:[{text:"Ok",subtype:"primary",onclick:function(){a.submit()}},{text:"Cancel",onclick:"close"}],onsubmit:function(i){var e=i.data.timeSelect,t=i.data.timeHour,a=i.data.timeMinutes,n=i.data.timeAMPM,r=i.data.timeMonth,l=i.data.timeYear,o=i.data.timeDay,m="",u="",d="",f="",s="",v=!1,c=!1,b=T.windowManager;function y(e){for(var t=0;t<e.length;t++){if(0===e[t].length)return!1}return!0}function p(e){for(var t=0;t<e.length;t++){var a=e[t];if(!C.isNumeric(a))return b.alert("Please input numbers only."),i.preventDefault(),!1}return!0}if("dateTimeBoth"==e||"timeOnly"==e){var h=!1;if(!y([t,a,n]))return b.alert("All time fields are required."),void i.preventDefault();if(!p(t))return;if(!((t=Number(t))<24))return b.alert("The Hour of the Day should be between 0 and 23."),void i.preventDefault();if(t<12&&("pm"==n?t+=12:t<10&&(t="0"+t)),h=!0,!p(a))return;if(!(Number(a)<60&&2===a.length))return b.alert("Minutes should be a 2-digit number between 00 and 59."),void i.preventDefault();h&&!0&&(m=t+":",u=a,v=!0)}else v=!0;if("dateTimeBoth"==e||"dateOnly"==e){if(!(y([l])||y([r])||y([o])))return b.alert("Please add some date information."),void i.preventDefault();var x=!1,g=!1,M=!1;if(2===r.length&&(x=!0),y([l])){if(!p(l)||4!==l.length)return b.alert("Please use a 4-digit year. The time element can only reliably include dates in the Gregorian Calendar."),void i.preventDefault();g=!0}if(y([o])){if(!p(o))return;if(!((o=Number(o))<=31&&0<o))return b.alert("The Day input must be between 1 and 31."),void i.preventDefault();1===o.toString().length&&(o="0"+o),M=!0}if(M){if(!x)return b.alert("If you specify a Day, you must include at least a month as well."),void i.preventDefault();o="-"+o,c=!0}if(x)if(g)r="-"+r,c=!0;else if(!M)return b.alert("If you specify a Month, you must include at least a year as well."),void i.preventDefault();!g||M&&x||(c=!0),c&&(d=r,f=l,s=o)}else c=!0;if(v&&c){"dateTimeBoth"==e&&(m="T"+m);var D='<time datetime="'+f+d+s+m+u+'">'+w+"</time>";T.execCommand("mceReplaceContent",!1,D)}else;}})})})}(jQuery);