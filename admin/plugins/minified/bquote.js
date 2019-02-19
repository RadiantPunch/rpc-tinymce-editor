jQuery,tinymce.PluginManager.add("rpc_tinymce_bquote",function(D,e){D.addButton("bquote",{title:"Blockquote",image:e+"/icons/bquote.svg",cmd:"bquoteCmd"}),D.addCommand("bquoteCmd",function(){var e=D.selection.getContent({format:"html"}),u=D.windowManager.open({title:"Blockquote",width:500,height:500,body:[{type:"textbox",name:"bquoteText",label:"Quote *",value:e,multiline:!0,minHeight:100},{type:"listbox",name:"bquoteType",label:"Blockquote Type *",padding:"0 0 20 0",values:[{text:"Simple",value:"simple",onselect:function(){var e=u.find("#bquoteReg"),t=u.find("#bquoteTest");e.hide(),t.hide(),e.disabled(),t.disabled()}},{text:"Regular",value:"regular",onselect:function(){var e=u.find("#bquoteReg"),t=u.find("#bquoteTest");e.show(),t.hide(),e.active(),t.disabled()}},{text:"Testimonial",value:"testimonial",onselect:function(){var e=u.find("#bquoteReg"),t=u.find("#bquoteTest");e.hide(),t.show(),e.disabled(),t.active()}}]},{type:"fieldset",hidden:!0,disabled:!0,border:"1 0 1 0",padding:"15 0 0 0",name:"bquoteReg",items:[{type:"container",html:'<p style="text-align:center; font-weight:bold; margin: 10px 0;">Regular Blockquote</p>'},{type:"textbox",name:"bquoteRegAuthor",label:"Quote Author *"},{type:"textbox",name:"bquoteRegWork",label:"Quote Source Title"},{type:"textbox",name:"bquoteRegURL",label:"Quote Source URL"}]},{type:"fieldset",hidden:!0,disabled:!0,border:"1 0 1 0",padding:"15 0 0 0",name:"bquoteTest",items:[{type:"container",html:'<p style="text-align:center; font-weight:bold; margin: 10px 0;">Testimonial</p>'},{type:"textbox",name:"bquoteTestAuthor",label:"Testimonial Author *"},{type:"textbox",name:"bquoteTestTitle",label:"Author’s Title †"},{type:"textbox",name:"bquoteTestCo",label:"Author’s Company †"},{type:"textbox",name:"bquoteTestURL",label:"Company Website"}]},{type:"container",html:'<p style="font-size:0.9em;font-style:italic;opacity:0.9;">* indicates required<br />† indicates one or the other must be filled out</p>'}],buttons:[{text:"Ok",subtype:"primary",onclick:function(){u.submit()}},{text:"Cancel",onclick:"close"}],onsubmit:function(e){var t=e.data.bquoteText,u=D.windowManager;if(!(0<t.length))return u.alert("Please enter a quotation."),void e.preventDefault();var o=e.data.bquoteType,a="";if("regular"!=o&&"testimonial"!=o)return a="<blockquote>"+t+"</blockquote>",void D.insertContent(a);var F="",n="",i="",l="",d="",r="",s="",b="",p="",c=0,m='<span class="edit">',h="</span>";if(n="regular"==o?(d=e.data.bquoteRegAuthor,F=e.data.bquoteRegWork,e.data.bquoteRegURL):(d=e.data.bquoteTestAuthor,i=e.data.bquoteTestTitle,l=e.data.bquoteTestCo,e.data.bquoteTestURL),!(0<d.length))return u.alert("Please enter an author name."),void e.preventDefault();if(0<n.length){if(!0!==/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n))return u.alert("The URL you entered is invalid. Leave the field blank or input a full URL (example: http://example.com)."),void e.preventDefault();s=' url="'+m+n+h+'"',c=1}else c=1;if("regular"==o)0<F.length&&(r=' work="'+m+F+h+'"');else{if(!(0<i.length||0<l.length))return u.alert("Please enter either the author’s professional title, company, or both."),void e.preventDefault();0<i.length&&(b=' title="'+m+i+h+'"'),0<l.length&&(p=' company="'+m+l+h+'"')}return 1==c?(a='<p class="scode no-edit no-return first">[blockquote'+(o=' type="'+o+'"')+(d=' author="'+m+d+h+'"')+r+b+p+s+"]</p><p>"+t+'</p><p class="scode no-edit last">[/blockquote]</p>',void D.insertContent(a)):void 0}})})});