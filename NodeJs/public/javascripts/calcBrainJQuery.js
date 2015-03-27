/**
 * Created by phil on 06.03.15.
 * This contains the functionality for the calculator used for the WEDTestat1
 */
var WED_TESTAT = {};
/**
 * Regular Expression to evaluate the operators
 * @const
 */
WED_TESTAT.REGEX_PATTERN = new RegExp("[^0-9]");
/**
 * Global boolean that checks if the expression was evaluated in the last step
 */
WED_TESTAT.CALCULATED = Boolean(false);
jQuery.noConflict();
(function ($) {
	$.getScript("/math.min.js", function(){});
	$(function () {
		$("body").on("click", "input[type=button]", function () {
			onClickCalculations(this.name);
		});
	});
	/**
	 * Sets the onClickEvents based on the buttons name
	 * @param {string} name This contains the buttons name
	 */
	function onClickCalculations(name) {
		var display_value = $("#output").val();
		switch (name) {
			case "=":
				display_value = mathjs.eval(display_value);
				WED_TESTAT.CALCULATED = Boolean(true);
				break;
			case "+":
			case "-":
			case "*":
			case "/":
				if (WED_TESTAT.REGEX_PATTERN.test(display_value.slice(-1))) {
					display_value = display_value.slice(0,
						display_value.length - 2) + name + " ";
				} else {
					display_value += " " + name + " ";
				}
				WED_TESTAT.CALCULATED = Boolean(false);
				break;
			default:
				if (WED_TESTAT.CALCULATED) {
					display_value = "0";
					WED_TESTAT.CALCULATED = Boolean(false);
				}
				if(display_value==="0") {
					display_value = name;
				} else {
					display_value += name;
				}
				break;
		}
		$("#output").val(display_value);
	}
})(jQuery);
