function sorting(){
    buttons_disable();
    switch(this.id){
        case "Bubble":
            BubbleSort();
            break;
        case "Merge":
            MergeSort();
            break;
        case "Quick":
            QuickSort();
            break;
        case "Selection":
            SelectionSort();
            break;
        case "Insertion":
            InsertionSort();
            break;
        case "Heap":
            HeapSort();
            break;
    }
}
var bar_sizes = [];
var arr_bars = [];
var bars_section = document.getElementById("bars");

var array_size_toggler = document.getElementById("size");
var arr_size_val = array_size_toggler.value;

function new_array_generation(){
    bars_section.innerHTML="";
    for(var i=0;i < arr_size_val;i++){
        arr_bars[i] = document.createElement("div");
        bars_section.appendChild(arr_bars[i]);
        bar_sizes[i] = Math.floor(Math.random()*40) + 10;
        arr_bars[i].style = " margin:0% " + 0.1 + "%; background-color:black; width:" + (100/arr_size_val-(2*0.1)) + "%; height:" + (bar_sizes[i]) + "%;";
    }
}

array_size_toggler.addEventListener("input",arr_input_change);
window.onload = arr_input_change();
function arr_input_change(){
    arr_size_val=array_size_toggler.value;
    new_array_generation();
}


var new_array_btn = document.getElementById("new_array");
new_array_btn.addEventListener("click",new_array_generation);


var sorting_btns = document.querySelectorAll(".button-div button");
for(var i=0;i<sorting_btns.length;i++){
    sorting_btns[i].addEventListener("click",sorting);
}

var array_speed_toggler = document.getElementById("speed");

function buttons_disable(){
    new_array_btn.disabled=true;
    array_size_toggler.disabled=true;
    array_speed_toggler.disabled=true;
    for(var i=0;i < sorting_btns.length;i++){
        sorting_btns[i].disabled=true;
    }
}
