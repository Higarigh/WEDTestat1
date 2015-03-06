/**
 * Created by phil on 06.03.15.
 */
var calculated
var pattern = new RegExp("[^0-9]");

function onClickCalculations(name){
    display = document.getElementsByName("display")[0];
    switch (name){
        case "=":
            display.value = eval(display.value);
            calculated = true;
            break;
        case "+":
        case "-":
        case "*":
        case "/":

            console.log(display.value.length);
            if(pattern.test(display.value.slice(-1))) {
                display.value = display.value.slice(0,display.value.length - 1) + name;
                console.log("NOT A NUMBER")
            }else{
                display.value += name;
            }
            calculated = false;


            break;
        default:
            if(calculated){
                display.value = 0;
                calculated = false;
            }
            if(display.value == 0){
                display.value = name;
            }else {
                display.value += name;
            }

            break;
    }
    
}
function setOnClickEvents() {
    var childs = document.querySelectorAll("input[type=button]")
    for(var i=0;i<childs.length;i++){
        childs[i].onclick = function(){
            onClickCalculations(this.name);
        }
    }

}
