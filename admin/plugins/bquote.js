(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_bquote', function( editor, url ) {


        // ----- BUTTON REGISTRATION -----
        editor.addButton('bquote', {
            title: 'Blockquote',
            image: url + '/bquote.svg',
            cmd: 'bquoteCmd',
        });
  
        // ----- BUTTON COMMANDS -----
        editor.addCommand('bquoteCmd', function(){
            var selectedText = editor.selection.getContent({format: 'html'});
            var win = editor.windowManager.open({
                title: 'Blockquote',
                width: 500,
                height: 500,
                body: [
                    {
                        type: 'textbox',
                        name: 'bquoteText',
                        label: 'Quote *',
                        value: selectedText,
                        multiline: true,
                        minHeight: 100,
                    },
                    {
                        type: 'listbox',
                        name: 'bquoteType',
                        label: 'Blockquote Type *',
                        padding: '0 0 20 0',
                        values : [
                            {
                                text: 'Simple',
                                value: 'simple',
                                onselect: function() {
                                    var bquoteReg = win.find('#bquoteReg');
                                    var bquoteTest = win.find('#bquoteTest');
                                    
                                    bquoteReg.hide();
                                    bquoteTest.hide();
                                    bquoteReg.disabled();
                                    bquoteTest.disabled();
                                },
                            },
                            {
                                text: 'Regular',
                                value: 'regular',
                                onselect: function() {
                                    var bquoteReg = win.find('#bquoteReg');
                                    var bquoteTest = win.find('#bquoteTest');
                                    
                                    bquoteReg.show();
                                    bquoteTest.hide();
                                    bquoteReg.active();
                                    bquoteTest.disabled();
                                },
                            },
                            {
                                text: 'Testimonial',
                                value: 'testimonial',
                                onselect: function() {
                                    var bquoteReg = win.find('#bquoteReg');
                                    var bquoteTest = win.find('#bquoteTest');
                                    
                                    bquoteReg.hide();
                                    bquoteTest.show();
                                    bquoteReg.disabled();
                                    bquoteTest.active();
                                }
                            },
                        ]
                    },
                    {
                        type: 'fieldset',
                        hidden: true,
                        disabled: true,
                        border: '1 0 1 0',
                        padding: '15 0 0 0',
                        name: 'bquoteReg',
                        items: [
                            {
                                type: 'container',
                                html: '<p style="text-align:center; font-weight:bold; margin: 10px 0;">Regular Blockquote</p>'
                            },
                            {
                                type: 'textbox',
                                name: 'bquoteRegAuthor',
                                label: 'Quote Author *',
                            },
                            {
                                type: 'textbox',
                                name: 'bquoteRegWork',
                                label: 'Quote Source Title',
                            },
                            {
                                type: 'textbox',
                                name: 'bquoteRegURL',
                                label: 'Quote Source URL',
                            }
                        ]
                    },
                    {
                        type: 'fieldset',
                        hidden: true,
                        disabled: true,
                        border: '1 0 1 0',
                        padding: '15 0 0 0',
                        name: 'bquoteTest',
                        items: [
                            {
                                type: 'container',
                                html: '<p style="text-align:center; font-weight:bold; margin: 10px 0;">Testimonial</p>'
                            },
                            {
                                type: 'textbox',
                                name: 'bquoteTestAuthor',
                                label: 'Testimonial Author *',
                            },
                            {
                                type: 'textbox',
                                name: 'bquoteTestTitle',
                                label: 'Author’s Title †',
                            },
                            {
                                type: 'textbox',
                                name: 'bquoteTestCo',
                                label: 'Author’s Company †',
                            },
                            {
                                type: 'textbox',
                                name: 'bquoteTestURL',
                                label: 'Company Website',
                            },
                        ]
                    },
                    {
                        type: 'container',
                        html: '<p style="font-size:0.9em;font-style:italic;opacity:0.9;">* indicates required<br />† indicates one or the other must be filled out</p>'
                    }
                ],
                buttons: [
                    {
                        text: 'Ok',
                        subtype: 'primary',
                        onclick: function() {
                            win.submit();
                        }
                    },
                    {
                      text: 'Cancel',
                      onclick: 'close'
                    }
                ],
                onsubmit: function(e) {
                    var quote = e.data.bquoteText;

                    var winManager = editor.windowManager;

                    function isValidURL(value) {
                        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
                    }

                    if ( quote.length > 0 ) {
                        var type = e.data.bquoteType;
                        var returnText = '';

                        if ( type == 'regular' || type == 'testimonial' ) {
                            var workInput = '';
                            var urlInput = '';
                            var titleInput = '';
                            var companyInput = '';

                            var author = '';
                            var work = '';
                            var url = '';
                            var title = '';
                            var company = '';
                            
                            var validURL = 0;

                            var editOpen = '<span class="edit">';
                            var editClose = '</span>';

                            if ( type == 'regular' ) {
                                author = e.data.bquoteRegAuthor;
                                workInput = e.data.bquoteRegWork;
                                urlInput = e.data.bquoteRegURL;
                            } else {
                                author = e.data.bquoteTestAuthor;
                                titleInput = e.data.bquoteTestTitle;
                                companyInput = e.data.bquoteTestCo;
                                urlInput = e.data.bquoteTestURL;
                            }

                            if ( author.length > 0 ) {

                                if ( urlInput.length > 0 ) {
                                    if ( isValidURL(urlInput) === true ) {
                                        url = ' url="' + editOpen + urlInput + editClose + '"';
                                        validURL = 1;
                                    } else {
                                        winManager.alert('The URL you entered is invalid. Leave the field blank or input a full URL (example: http://example.com).');
                                        e.preventDefault();
                                        return;
                                    }
                                } else {
                                    validURL = 1;
                                }

                                if (type == 'regular') {

                                    if ( workInput.length > 0 ) {
                                        work = ' work="' + editOpen + workInput + editClose + '"';
                                    }

                                } else {

                                    if ( titleInput.length > 0 || companyInput.length > 0 ) {

                                        if ( titleInput.length > 0 ) {
                                            title = ' title="' + editOpen + titleInput + editClose + '"';
                                        }

                                        if ( companyInput.length > 0 ) {
                                            company = ' company="' + editOpen + companyInput + editClose + '"';
                                        }

                                    } else {
                                        winManager.alert('Please enter either the author’s professional title, company, or both.');
                                        e.preventDefault();
                                        return;
                                    }
                                }

                                if ( validURL == 1 ) {
                                    type = ' type="' + type + '"';
                                    author = ' author="' + editOpen + author + editClose + '"';

                                    var firstCodeStart = '<p class="scode no-edit no-return first">';
                                    var firstCodeEnd = '</p>';
                                    var secondCodeStart = '<p class="scode no-edit last">';
                                    var secondCodeEnd = '</p>';

                                    returnText = firstCodeStart + '[blockquote' + type + author + work + title + company + url + ']' + firstCodeEnd + '<p>' + quote + '</p>' + secondCodeStart + '[/blockquote]' + secondCodeEnd;
                                    editor.insertContent(returnText);
                                    return;
                                }

                            } else {
                                winManager.alert('Please enter an author name.');
                                e.preventDefault();
                                return;
                            }

                        } else {
                            returnText = '<blockquote>' + quote + '</blockquote>';
                            editor.insertContent(returnText);
                            return;
                        }
                    } else {
                        winManager.alert('Please enter a quotation.');
                        e.preventDefault();
                        return;
                    }
                }

            });

        });


    });
})(jQuery);