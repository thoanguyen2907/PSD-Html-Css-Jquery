jQuery(function($) {
    "use strict";

    var select_plugin = window.select_plugin || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    select_plugin.customSelect = function() {
		$('.tcl_select').each(function (idx, el) {
			var $target = el,
				uid = Math.floor(Math.random() * 99999999),
				$childrens = $($target).children(),
				hint = "";

			var $options = $("<ul>", {
				"id": "tcl_options",
				"class": "tcl_options"
			});

			$childrens.each(function(_idx, _el) {
				if( $(_el).is("option") ) {
					if( $(_el).attr("value") == "" ) {
						hint = $(_el).text();
						$(_el).attr("disabled", true);
					}
					else {
						// Create <li>
						console.log( $(_el).is(":selected") );
						let li = $("<li>", {
							"value": $(_el).attr("value"),
							"text": $(_el).text(),
							"click": function(e) {
								e.preventDefault();
								// TODO:
								$("#tcl_selector_" + uid).text( $(e.target).text() );
								console.log( $(e.target).attr("value") );
							}
						});
						$options.append(li);
					}
					
				}
			});

			var $wrapperClone = $("<div>", {
				"id": "tcl_select_" + uid,
				"class": "tcl_select"
			});
			var $result = $("<a>", {
				"id": "tcl_selector_" + uid,
				"class": "tcl_selector",
				"text": hint,
				"click": function(e) {
					console.log(e);
					// TODO: 
				}
			});

			// console.log($childrens);
			$wrapperClone.append($result);
			$wrapperClone.append($options);
			$wrapperClone.insertAfter($target);

		});
	}

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        select_plugin.customSelect();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
