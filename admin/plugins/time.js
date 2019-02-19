(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_time', function( editor, url ) {

      // ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
         editor.formatter.register('time_format', {inline: 'time'});
            editor.formatter.register('time_format_remove', {inline: 'time', attributes: {datetime : 'remove-me'}});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('time', {
            title: 'Time',
            image: url + '/icons/time.svg',
            onclick: function() {
               var node = $(editor.selection.getNode());
               if (node.is('time')) {
                 editor.formatter.apply('time_format_remove');
                 editor.formatter.remove('time_format_remove');
             } else {
                 editor.execCommand('timeCmd');
             }
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'time_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

        // ----- BUTTON COMMANDS -----

        editor.addCommand('timeCmd', function(){
         var selectedText = editor.selection.getContent({format: 'html'});
         var win = editor.windowManager.open({
            title: 'Time',
            body: [
               {
                  type: 'listbox',
                     name: 'timeSelect',
                     label: 'Time Options',
                     minWidth: 300,
                     padding: '0 0 15 0',
                     values : [
                            {
                                text: 'Just Date',
                                value: 'dateOnly',
                                onselect: function() {
                                    var timeFields = win.find('#timeFields');
                                    var dateFields = win.find('#dateFields');
                                    
                                    dateFields.show();
                                    timeFields.hide();
                                    dateFields.active();
                                    timeFields.disabled();
                                },
                            },
                            {
                                text: 'Just Time',
                                value: 'timeOnly',
                                onselect: function() {
                                    var timeFields = win.find('#timeFields');
                                    var dateFields = win.find('#dateFields');
                                    
                                    dateFields.hide();
                                    timeFields.show();
                                    dateFields.disabled();
                                    timeFields.active();
                                },
                            },
                            {
                                text: 'Both Date and Time',
                                value: 'dateTimeBoth',
                                onselect: function() {
                                    var timeFields = win.find('#timeFields');
                                    var dateFields = win.find('#dateFields');
                                    
                                    dateFields.show();
                                    timeFields.show();
                                    dateFields.active();
                                    timeFields.active();
                                }
                            },
                        ]
               },
               {
                  type: 'fieldset',
                     name: 'dateFields',
                        border: '1 0 0 0',
                        padding: '25 0 0 0',
                     items: [
                        {
                        type: 'listbox',
                           name: 'timeMonth',
                           label: 'Month',
                           'values': [
                              {text: 'Not Set', value: ''},
                              {text: 'January', value: '01'},
                              {text: 'February', value: '02'},
                              {text: 'March', value: '03'},
                              {text: 'April', value: '04'},
                              {text: 'May', value: '05'},
                              {text: 'June', value: '06'},
                              {text: 'July', value: '07'},
                              {text: 'August', value: '08'},
                              {text: 'September', value: '09'},
                              {text: 'October', value: '10'},
                              {text: 'November', value: '11'},
                              {text: 'December', value: '12'}
                           ]
                     },
                     {
                        type: 'textbox',
                           name: 'timeYear',
                           label: 'Year',
                           value: ''
                     },
                     {
                        type: 'textbox',
                           name: 'timeDay',
                           label: 'Day',
                           value: ''
                     },
                     ]
               },
               {
                  type: 'fieldset',
                     name: 'timeFields',
                     hidden: true,
                        disabled: true,
                        border: '1 0 0 0',
                        padding: '25 0 0 0',
                        items: [
                           {
                        type: 'textbox',
                           name: 'timeHour',
                           label: 'Hour of the Day',
                     },
                     {
                        type: 'textbox',
                           name: 'timeMinutes',
                           label: 'Minutes',
                     },
                     {
                        type: 'listbox',
                        name: 'timeAMPM',
                        label: 'AM or PM',
                        'values': [
                           {text: 'Not Set', value: ''},
                           {text: 'AM', value: 'am'},
                           {text: 'PM', value: 'pm'}
                        ],
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
              onsubmit: function(e) {
               var timeSelect = e.data.timeSelect;

               var timeHour = e.data.timeHour;
               var timeMinutes = e.data.timeMinutes;
               var timeAMPM = e.data.timeAMPM;
               var timeMonth = e.data.timeMonth;
               var timeYear = e.data.timeYear;
               var timeDay = e.data.timeDay;

               var hour = '';
               var minutes = '';
               var month = '';
               var year = '';
               var day = '';

               var timeValid = false;
               var dateValid = false;

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


               if ( timeSelect == 'dateTimeBoth' || timeSelect == 'timeOnly' ) {

                  var hourSet = false;
                  var minutesSet = false;
                  
                  if ( inputsFilled([timeHour,timeMinutes,timeAMPM]) ) {

                     if (inputNumeric(timeHour)) {
                        timeHour = Number(timeHour);
                        if (timeHour < 24) {
                           if (timeHour < 12) {
                              if (timeAMPM == 'pm') {
                                 timeHour = timeHour + 12;
                              } else if (timeHour < 10) {
                                 timeHour = '0' + timeHour;
                              }
                           }
                           hourSet = true;
                        } else {
                           winManager.alert('The Hour of the Day should be between 0 and 23.');
                           e.preventDefault();
                           return;
                        }
                     } else {
                        return;
                     }

                     if (inputNumeric(timeMinutes)) {
                        if (Number(timeMinutes) < 60 && timeMinutes.length === 2) {
                           minutesSet = true;
                        } else {
                           winManager.alert('Minutes should be a 2-digit number between 00 and 59.');
                           e.preventDefault();
                           return;
                        }
                     } else { 
                        return;
                     }

                     if (hourSet && minutesSet) {
                        hour = timeHour + ':';
                        minutes = timeMinutes;
                        timeValid = true;
                     }

                  } else {
                     winManager.alert('All time fields are required.');
                        e.preventDefault();
                        return;
                  }

               } else {
                  timeValid = true;
               }

               if ( timeSelect == 'dateTimeBoth' || timeSelect == 'dateOnly' ) {
                  if (inputsFilled([timeYear]) || inputsFilled([timeMonth]) || inputsFilled([timeDay]) ) {
                     var monthSet = false;
                     var yearSet = false;
                     var daySet = false;

                     if ( timeMonth.length === 2 ) {
                        monthSet = true;
                     }

                     if ( inputsFilled([timeYear]) ) {
                        if (inputNumeric(timeYear) && timeYear.length === 4) {
                           yearSet = true;
                        } else {
                           winManager.alert('Please use a 4-digit year. The time element can only reliably include dates in the Gregorian Calendar.');
                           e.preventDefault();
                           return;
                        }
                     }

                     if ( inputsFilled([timeDay]) ) {
                        if (inputNumeric(timeDay)) {
                           timeDay = Number(timeDay);
                           if ( timeDay <= 31 && timeDay > 0 ) {
                              if (timeDay.toString().length === 1) {
                                 timeDay = '0' + timeDay;
                              }
                              daySet = true;
                           } else {
                              winManager.alert('The Day input must be between 1 and 31.');
                              e.preventDefault();
                              return;
                           }
                        } else {
                           return;
                        }
                     }

                     if ( daySet ) {
                        if (monthSet) {
                           timeDay = '-' + timeDay;
                           dateValid = true;
                        } else {
                           winManager.alert('If you specify a Day, you must include at least a month as well.');
                           e.preventDefault();
                           return;
                        }
                     }

                     if ( monthSet ) {
                        if (yearSet) {
                           timeMonth = '-' + timeMonth;
                           dateValid = true;
                        } else if (!daySet) {
                           winManager.alert('If you specify a Month, you must include at least a year as well.');
                           e.preventDefault();
                           return;
                        }
                     }

                     if ( yearSet && !(daySet && monthSet) ) {
                        dateValid = true;
                     }

                     if (dateValid) {
                        month = timeMonth;
                        year = timeYear;
                        day = timeDay;
                     }
                  } else {
                     winManager.alert('Please add some date information.');
                     e.preventDefault();
                     return;
                  }
               } else {
                  dateValid = true;
               }

               if (timeValid && dateValid) {
                  if (timeSelect == 'dateTimeBoth') {
                     hour = 'T' + hour;
                  }
                  var returnText = '<time datetime="' + year + month + day + hour + minutes + '">' + selectedText + '</time>';
                  editor.execCommand('mceReplaceContent', false, returnText);
                     return;
               }

            }
         });
       });

    });
})(jQuery);