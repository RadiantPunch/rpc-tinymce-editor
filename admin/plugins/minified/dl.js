!function(n){tinymce.PluginManager.add("rpc_tinymce_dl",function(s,d){s.addButton("dl",{title:"Description List",type:"splitbutton",image:d+"/dl.svg",cmd:"dlCmd",menu:[{text:"Add New Pair",onclick:function(){s.execCommand("dtddCmd")}},{text:"Add New Term",onclick:function(){s.execCommand("dtCmd")}},{text:"Add New Description",onclick:function(){s.execCommand("ddCmd")}}]});s.addCommand("dlCmd",function(){var d=n(s.selection.getNode());if(!(d.is(".dterm")||d.is(".ddescription")||d.is("p.scode")&&d.attr("data-mce-selected"))){s.insertContent('<p class="scode no-edit first">[dlist]</p><p class="br-only dterm"><span class="scode no-edit">[dterm]</span>Term<span class="scode no-edit">[/dterm]</span></p><p class="br-only ddescription"><span class="scode no-edit">[ddescription]</span>Description<span class="scode no-edit">[/ddescription]</span></p><p class="scode no-edit last">[/dlist]</p>')}}),s.addCommand("dtddCmd",function(){s.insertContent('<p class="br-only dterm"><span class="scode no-edit">[dterm]</span>Term<span class="scode no-edit">[/dterm]</span></p><p class="br-only ddescription"><span class="scode no-edit">[ddescription]</span>Description<span class="scode no-edit">[/ddescription]</span></p>')}),s.addCommand("dtCmd",function(){s.insertContent('<p class="br-only dterm"><span class="scode no-edit">[dterm]</span>Term<span class="scode no-edit">[/dterm]</span></p>')}),s.addCommand("ddCmd",function(){s.insertContent('<p class="br-only ddescription"><span class="scode no-edit">[ddescription]</span>Description<span class="scode no-edit">[/ddescription]</span></p>')})})}(jQuery);