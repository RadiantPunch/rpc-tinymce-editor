(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_scode_key_disable', function( editor, url ) {

        var deleteKeys = [8,46];
        var typingKeys = [];
        var removeKeys = [];
        for (var x = 48; x <= 222; x++) {
            typingKeys.push(x);
        }
        for (var y = 112; y <= 145; y++) {
            removeKeys.push(y);
        }
        removeKeys.push(91, 92, 93);
        typingKeys = typingKeys.filter( function( keys ) {
          return !removeKeys.includes( keys );
        } );

        function containsClass(c) {
            var currentNode = $(editor.selection.getNode());
            if ( currentNode.is(c) ) {
                return true;
            }
            return false;
        }

        function checkKeys(e, k) {
            if ($.inArray(e.which, k) >= 0) {
                return true;
            }
            return false;
        }

        function checkKeyCmds(e) {
            if ( e.ctrlKey || e.metaKey || e.altKey ) {
                return true;
            }
            return false;
        }

        function charBefore(containerEl) {
            var precedingChar = '', sel, range, precedingRange;
            if (editor.selection.getSel()) {
                sel = editor.selection.getSel();
                if (sel.rangeCount > 0) {
                    range = sel.getRangeAt(0).cloneRange();
                    range.collapse(true);
                    range.setStart(containerEl, 0);
                    precedingChar = range.toString().slice(-1);
                }
            } else if ( (sel = editor.selection) && sel.type != "Control") {
                range = sel.createRange();
                precedingRange = range.duplicate();
                precedingRange.moveToElementText(containerEl);
                precedingRange.setEndPoint("EndToStart", range);
                precedingChar = precedingRange.text.slice(-1);
            }
            return precedingChar;
        }

        function beforeAfterCaret() {
            var currentNode = editor.selection.getNode();
            var caretPosVal = editor.selection.getSel().anchorNode.nodeValue;
            var before = charBefore(currentNode).charCodeAt(0);
            if (caretPosVal !== null) {
                if (caretPosVal.charCodeAt(0) === 65279 && ( before === 65279 || isNaN(before)) ) {
                    return true;
                }
                return false;
            } else {
                if (before === 65279 || isNaN(before)) {
                    return true;
                }
                return false;
            }
        }

        editor.on('keydown', function(e) {
            var currentNode = $(editor.selection.getNode());
            var range = editor.selection.getRng();
            
            if ( (containsClass('.edit')) && (checkKeys(e,deleteKeys)) && (range.startOffset + range.endOffset === 0) ) {
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if ( containsClass('.scode') && checkKeys(e,deleteKeys) ) {
                if ( containsClass('.first') ) {
                    currentNode.nextUntil('.last').remove();
                    currentNode.next('.last').remove();
                } else if ( containsClass('.last') ) {
                    currentNode.prevUntil('.first').remove();
                    currentNode.prev('.first').remove();
                } else if ( currentNode.parent().hasClass('ddescription') || currentNode.parent().hasClass('dterm') ) {
                    e.preventDefault();
                    editor.undoManager.add();
                    currentNode.parent().remove();
                    editor.undoManager.add();
                }
                else if ( currentNode.parent().hasClass('dsummary') && checkKeys(e,deleteKeys)) {
                    e.preventDefault();
                }
            } else if ( containsClass('.br-only') ) {
                if ( checkKeyCmds(e) && checkKeys(e,typingKeys) ) {
                    return;
                } else {
                    if ((e.which === 13 || checkKeys(e,typingKeys) || checkKeys(e,deleteKeys)) && beforeAfterCaret() ) {
                        e.preventDefault();
                        return;
                    } else if ( e.which === 13 ){
                        e.preventDefault();
                        editor.insertContent('<br />');
                    }
                }
            }
        });

    });
})(jQuery);