(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_progress', function( editor, url ) {

        // ----- BUTTON REGISTRATION -----
        editor.addButton('progress', {
            title: 'Progress',
            image: url + '/icons/progress.svg',
            cmd: 'progressCmd',
        });

        // ----- BUTTON COMMANDS -----
        editor.addCommand('progressCmd', function(){
            var selectedText = editor.selection.getContent({format: 'text'});
            var win = editor.windowManager.open({
                title: 'Progress',
                body: [
                    {
                        type: 'textbox',
                        name: 'progressMax',
                        label: 'Maximum',
                    },
                    {
                        type: 'textbox',
                        name: 'progressValue',
                        label: 'Progress Value',
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
                onsubmit: function(e){
                    var maxInput = e.data.progressMax;
                    var valInput = e.data.progressValue;

                    var max = '';
                    var val = '';

                    var maxFilled = false;
                    var valFilled = false;

                    var validInputs = false;

                    var winManager = editor.windowManager;

                    function inputFilled(input) {
                        var sum = 0;
                        for ( var i = 0; i < input.length; i++ ) {
                            var currentInput = input[i];
                            sum += currentInput.length;
                        }
                        if ( sum === 0 ) {
                            return false;
                        } else {
                            return true;
                        }
                    }

                    function inputNumeric(input) {
                        if ( !$.isNumeric(input) ) {
                            winManager.alert('Please input numbers only.');
                            e.preventDefault();
                            return false;
                        } else {
                            return true;
                        }
                    }

                    function greaterThanZero(input) {
                        input = Number(input);
                        if ( input === 0 ) {
                            winManager.alert('Inputs must be greater than 0.');
                            e.preventDefault();
                            return false;
                        } else {
                            return true;
                        }
                    }

                    if ( inputFilled([maxInput, valInput]) ) {

                        if ( inputFilled(maxInput) && inputNumeric(maxInput) ) {
                            if (greaterThanZero(maxInput)) {
                                maxInput = Number(maxInput);
                                maxFilled = true;
                            } else {
                                return;
                            }
                        }

                        if ( inputFilled(valInput) && inputNumeric(valInput) ) {
                            if (greaterThanZero(valInput)) {
                                valInput = Number(valInput);
                                valFilled = true;
                            } else {
                                return;
                            }
                        }

                        if ( maxFilled && valFilled ) {
                            if ( valInput <= maxInput ) {
                                validInputs = true;
                            } else {
                                winManager.alert('The Progress Value must be between 0 and the Maximum.');
                                e.preventDefault();
                                return;
                            }
                        } else if ( valFilled ) {
                            if (valInput <= 1) {
                                validInputs = true;
                            } else {
                                winManager.alert('If no Maximum is set, the Progess Value must be between 0 and 1.');
                                e.preventDefault();
                                return;
                            }
                        } else {
                            validInputs = true;
                        }

                    } else {
                        validInputs = true;
                    }

                    if ( validInputs ) {
                        if ( maxFilled ) {
                            max = ' max="' + maxInput + '"';
                        }
                        if ( valFilled ) {
                            val = ' value="' + valInput + '"';
                        }
                        var returnText = '<progress' + max + val + '>' + selectedText + '</progress>';
                        editor.insertContent(returnText);
                    }

                }
            });
        });


    });
})(jQuery);