function buttons_enable(){
    window.setTimeout(function(){
        array_size_toggler.disabled=false;
        new_array_btn.disabled=false;
        array_speed_toggler.disabled=false;
        for(var i=0;i<sorting_btns.length;i++){
            sorting_btns[i].disabled=false;
        }
    },change_div_delay = change_div_delay + delay);
}

var speed_val = 100;
array_speed_toggler.addEventListener("input",function(){
    var array_speed = array_speed_toggler.value;
    switch(parseInt(array_speed))
    {
        case 1: 
            speed_val=10;
            break;
        case 2: 
            speed_val=30;
            break;
        case 3: 
            speed_val=100;
            break;
        case 4: 
            speed_val=1000;
            break;
        case 5: 
            speed_val=5000;
            break;
    }
    delay=10000/(Math.floor(arr_size_val/10)*speed_val);        
});



var delay = 10000/(Math.floor(arr_size_val/10)*speed_val);        
var change_div_delay = 0;

function change_height(bars_section,height,color){
    window.setTimeout(function(){
        bars_section.style=" margin:0% " + 0.1 + "%; width:" + (100/arr_size_val-(2*0.1)) + "%; height:" + height + "%; background-color:" + color + ";";
    },change_div_delay = change_div_delay + delay);
}

