(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_meter', function( editor, url ) {


    	// ----- BUTTON REGISTRATION -----
        editor.addButton('meter', {
            title: 'Meter',
            image: url + '/icons/meter.svg',
            cmd: 'meterCmd'
        });

        // ----- BUTTON COMMAND -----
        editor.addCommand('meterCmd', function(){
            var selectedText = editor.selection.getContent({format: 'text'});
            var win = editor.windowManager.open({
                title: 'Meter',
                body: [
                    {
                        type: 'fieldset',
                        border: '0 0 1 0',
                        padding: '15 0 0 0',
                        items: [
                            {
                                type: 'container',
                                html: '<p style="text-align:center; font-weight:bold; margin: 10px 0;">Required Meter Parameters</p>'
                            },
                            {
                                type: 'textbox',
                                name: 'meterMin',
                                label: 'Meter Minimum'
                            },
                            {
                                type: 'textbox',
                                name: 'meterMax',
                                label: 'Meter Maximum',
                            },
                            {
                                type: 'textbox',
                                name: 'meterVal',
                                label: 'Measurement',
                            },
                        ]
                    },
                    {
                        type: 'fieldset',
                        border: '0 0 0 0',
                        padding: '15 0 0 0',
                        items: [
                            {
                                type: 'container',
                                html: '<p style="text-align:center; font-weight:bold;">Optional Parameters</p>'
                            },
                            {
                                type: 'textbox',
                                name: 'meterLow',
                                label: 'Low End',
                            },
                            {
                                type: 'textbox',
                                name: 'meterHigh',
                                label: 'High End',
                            },
                            {
                                type: 'textbox',
                                name: 'meterOpt',
                                label: 'Optimum Value',
                            }
                        ]
                    },
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
                    var minInput = e.data.meterMin;
                    var maxInput = e.data.meterMax;
                    var valInput = e.data.meterVal;
                    var lowInput = e.data.meterLow;
                    var highInput = e.data.meterHigh;
                    var optInput = e.data.meterOpt;

                    var min = '';
                    var max = '';
                    var val = '';
                    var low = '';
                    var high = '';
                    var opt = '';

                    var requiredFieldsValid = false;
                    var optionalFieldsValid = false;

                    var winManager = editor.windowManager;

                    function inputsFilled(input) {
                        for ( var i = 0; i < input.length; i++ ) {
                            var currentInput = input[i];
                            if ( currentInput.length === 0) {
                                return false;
                            }
                        }
                        return true;
                    }

                    function optionalInputsFilled(input) {
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
                        for ( var i = 0; i < input.length; i++ ) {
                            var currentInput = input[i];
                            if ( !$.isNumeric(currentInput ) ) {
                                winManager.alert('Please input numbers only.');
                                e.preventDefault();
                                return false;
                            }
                        }
                        return true;
                    }
                	

                    if ( inputsFilled([minInput, maxInput, valInput]) ) {

                        if ( inputNumeric([minInput, maxInput, valInput]) ) {
                            minInput = Number(minInput);
                            maxInput = Number(maxInput);
                            valInput = Number(valInput);
                            if ( minInput < maxInput && ( valInput >= minInput && valInput < maxInput ) ) {
                                min = ' min="' + minInput + '"';
                                max = ' max="' + maxInput + '"';
                                val = ' value="' + valInput + '"';
                                requiredFieldsValid = true;
                            } else {
                                winManager.alert('Make sure your Meter Minimum is less than Meter Maximum and that the Measurement is between the two.');
                                e.preventDefault();
                                return;
                            }

                            // Check optional fields
                            if ( optionalInputsFilled([lowInput, highInput, optInput]) ) {
                                var lowValid = false;
                                var highValid = false;
                                var optValid = false;
                                var lowFilled = false;
                                var highFilled = false;

                                if ( inputsFilled([lowInput]) && inputNumeric([lowInput]) ) {
                                    lowInput = Number(lowInput);
                                    if ( lowInput >= minInput && lowInput < maxInput ) {
                                        lowFilled = true; 
                                    } else {
                                        winManager.alert('The Low End must be between the Meter Minimum and Maximum');
                                        e.preventDefault();
                                        return;
                                    }
                                } else {
                                    lowValid = true;
                                }

                                if ( inputsFilled([highInput]) && inputNumeric([highInput]) ) {
                                    highInput = Number(highInput);
                                    if ( highInput > minInput && highInput <= maxInput ) {
                                       highFilled = true; 
                                    } else {
                                        winManager.alert('The High End must be between the Meter Minimum and Maximum');
                                        e.preventDefault();
                                        return;
                                    }
                                } else {
                                    highValid = true;
                                }

                                if ( inputsFilled([optInput]) && inputNumeric([optInput]) ) {
                                    optInput = Number(optInput);
                                    if ( optInput >= minInput && optInput <= maxInput ) {
                                        optValid = true;
                                        opt = ' optimum="' + optInput + '"';
                                    } else {
                                        winManager.alert('The Optimum must be between the Meter Minimum and Maximum');
                                        e.preventDefault();
                                        return;
                                    }
                                } else {
                                    optValid = true;
                                }

                                if ( highFilled === true && lowFilled === true ) {
                                    if ( lowInput < highInput ) {
                                        lowValid = true;
                                        highValid = true;
                                        low = ' low="' + lowInput + '"';
                                        high = ' high="' + highInput + '"';
                                    } else {
                                        winManager.alert('The Low End must be less than the High End');
                                        e.preventDefault();
                                        return;
                                    }
                                } else if ( highFilled === true ) {
                                    high = ' high="' + highInput + '"';
                                    highValid = true;
                                } else if ( lowFilled === true ) {
                                    low = ' low="' + lowInput + '"';
                                    lowValid = true;
                                } else {
                                    lowValid = true;
                                    highValid = true;
                                }

                                if ( lowValid === true && highValid === true && optValid === true ) {
                                    optionalFieldsValid = true;
                                }

                            } else {
                                optionalFieldsValid = true;
                            }

                            // Final output
                            if ( requiredFieldsValid === true && optionalFieldsValid === true ) {                  

                                var returnText = '[meter' + min + max + val + low + high + opt + ']' + selectedText + '[/meter]';
                                editor.insertContent(returnText);

                            }
                        }
                    
                    } else {
                        winManager.alert('Please fill out all required fields.');
                        e.preventDefault();
                        return;
                    }
                }
            });
		});


    });
})(jQuery);