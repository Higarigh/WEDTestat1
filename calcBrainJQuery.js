/**
 * Created by phil on 06.03.15.
 */
jQuery.noConflict();
(function( $ ) {

    $(function() {
        console.log( "JQuery loaded!" );
        $("body").on("click", "input[type=button]", function() {
            onClickCalculations(this.name);
        });
    });

    var calculated;
    var pattern = new RegExp("[^0-9]");

    function onClickCalculations(name){
        displayValue = $('#output').val();

        switch (name){
            case "=":
                displayValue = eval(displayValue);
                calculated = true;
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if(pattern.test(displayValue.slice(-1))) {
                    displayValue = displayValue.slice(0,displayValue.length - 2) + name + " ";
                    console.log("NOT A NUMBER")
                }else{
                    displayValue += " " + name + " ";
                }
                calculated = false;


                break;
            default:
                if(calculated){
                    displayValue = 0;

                    calculated = false;
                }
                if(displayValue == 0){
                    displayValue = name;
                }else {

                    displayValue += name;
                }

                break;
        }
        $('#output').val(displayValue);

    }
})( jQuery );