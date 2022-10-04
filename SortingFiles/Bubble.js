function BubbleSort(){
    change_div_delay = 0;
    for(var i=0;i<  arr_size_val-1;i++){
        for(var j=0;j<arr_size_val-i-1;j++){
            change_height(arr_bars[j],bar_sizes[j],"yellow");
            if(bar_sizes[j]>bar_sizes[j+1]){
                change_height(arr_bars[j],bar_sizes[j], "red");
                change_height(arr_bars[j+1],bar_sizes[j+1], "red");

                var t = bar_sizes[j];
                bar_sizes[j] = bar_sizes[j+1];
                bar_sizes[j+1] = t;

                change_height(arr_bars[j],bar_sizes[j],"red");
                change_height(arr_bars[j+1],bar_sizes[j+1], "red");
            }
            change_height(arr_bars[j],bar_sizes[j], "black");
        }
        change_height(arr_bars[j],bar_sizes[j], "green");
    }
    change_height(arr_bars[0],bar_sizes[0], "green");
    buttons_enable();
}