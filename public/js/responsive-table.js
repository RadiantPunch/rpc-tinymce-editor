/*
 * @license jQuery Basictable | MIT | Jerry Low | https://www.github.com/jerrylow/basictable
 * Slightly customized by RPC to use different classes.
 */

(function($) {

  $(document).ready(function() {
      $('.responsive-table').basictable({
        breakpoint: 767,
      });
  });

  $.fn.basictable = function(options) {

    var setup = function(table, data) {
      var headings = [];

      if (data.tableWrap) {
        table.wrap('<div class="rt-wrapper"></div>');
      }

      // Table Header
      if (data.header) {
        var format = '';

        if (table.find('thead tr th').length) {
          format = 'thead th';
        }
        else if (table.find('tbody tr th').length) {
          format = 'tbody tr th';
        }
        else if (table.find('th').length) {
          format = 'tr:first th';
        }
        else {
          format = 'tr:first td';
        }

        $.each(table.find(format), function() {
          var $heading = $(this);
          var colspan = parseInt($heading.attr('colspan'), 10) || 1;
          var row = $heading.closest('tr').index();

          if (!headings[row]) {
            headings[row] = [];
          }

          for (var i = 0; i < colspan; i++) {
            headings[row].push($heading);
          }
        });
      }

      // Table Body
      $.each(table.find('tbody tr'), function() {
        setupRow($(this), headings, data);
      });

      // Table Footer
      $.each(table.find('tfoot tr'), function() {
        setupRow($(this), headings, data);
      });
    };

    var setupRow = function($row, headings, data) {
      $row.children().each(function() {
        var $cell = $(this);

        if (($cell.html() === '' || $cell.html() === '&nbsp;') && (!data.showEmptyCells)) {
          $cell.addClass('rt-hide');
        }
        else {
          var cellIndex = $cell.index();

          var headingText = '';

          for (var j = 0; j < headings.length; j++) {
            if (j !== 0) {
              headingText += ': ';
            }

            var $heading = headings[j][cellIndex];
            headingText += $heading.text();
          }

          $cell.attr('data-th', headingText);

          if (data.contentWrap && !$cell.children().hasClass('rt-content')) {
            $cell.wrapInner('<span class="rt-content" />');
          }
        }
      });
    };

    var unwrap = function(table) {
      $.each(table.find('td'), function() {
        var $cell = $(this);
        var content = $cell.children('.rt-content').html();
        $cell.html(content);
      });
    };

    var check = function(table, data) {
      // Only change when table is larger than parent if force
      // responsive is turned off.
      if (!data.forceResponsive) {
        if (table.removeClass('rt').outerWidth() > table.parent().width()) {
          start(table, data);
        }
        else {
          end(table, data);
        }
      }
      else {
        if ((data.breakpoint !== null && $(window).width() <= data.breakpoint) || (data.containerBreakpoint !== null && table.parent().width() <= data.containerBreakpoint)) {
          start(table, data);
        }
        else {
          end(table, data);
        }
      }
    };

    var start = function(table, data) {
      table.addClass('rt');

      if (!data.header) {
        table.addClass('rt--no-header');
      }

      if (data.tableWrap) {
        table.parent('.rt-wrapper').addClass('active');
      }
    };

    var end = function(table, data) {
      table.removeClass('rt rt--no-header');

      if (data.tableWrap) {
        table.parent('.rt-wrapper').removeClass('active');
      }
    };

    var destroy = function(table, data) {
      table.removeClass('rt rt--no-header');
      table.find('td').removeAttr('data-th');

      if (data.tableWrap) {
        table.unwrap();
      }

      if (data.contentWrap) {
        unwrap(table);
      }

      table.removeData('basictable');
    };

    var resize = function(table) {
      if (table.data('basictable')) {
        check(table, table.data('basictable'));
      }
    };

    // Get table.
    this.each(function() {
      var table = $(this);

      // If table has already executed.
      if (table.length === 0 || table.data('basictable')) {
        if (table.data('basictable')) {
          // Destroy basic table.
          if (options == 'destroy') {
            destroy(table, table.data('basictable'));
          }
          // Start responsive mode.
          else if (options === 'start') {
            start(table, table.data('basictable'));
          }
          else if (options === 'stop') {
            end(table, table.data('basictable'));
          }
          else {
            check(table, table.data('basictable'));
          }
        }
        return false;
      }

      // Extend Settings.
      var settings = $.extend({}, $.fn.basictable.defaults, options);

      var vars = {
        breakpoint: settings.breakpoint,
        containerBreakpoint: settings.containerBreakpoint,
        contentWrap: settings.contentWrap,
        forceResponsive: settings.forceResponsive,
        noResize: settings.noResize,
        tableWrap: settings.tableWrap,
        showEmptyCells: settings.showEmptyCells,
        header: settings.header
      };
      // Maintain the original functionality/defaults
      if(vars.breakpoint === null && vars.containerBreakpoint === null){
        vars.breakpoint = 568;
      }

      // Initiate
      table.data('basictable', vars);

      setup(table, table.data('basictable'));

      if (!vars.noResize) {
        check(table, table.data('basictable'));

        $(window).bind('resize.basictable', function() {
          resize(table);
        });
      }
    });
  };

  $.fn.basictable.defaults = {
    breakpoint: null,
    containerBreakpoint: null,
    contentWrap: true,
    forceResponsive: true,
    noResize: false,
    tableWrap: false,
    showEmptyCells: false,
    header: true
  };
})(jQuery);