function SelectionSort(){
    change_div_delay=0;

    for(var i=0;i<arr_size_val-1;i++){
        change_height(arr_bars[i],bar_sizes[i],"red");

        index_min=i;

        for(var j=i+1;j<arr_size_val;j++){
            change_height(arr_bars[j],bar_sizes[j],"yellow");

            if(bar_sizes[j]<bar_sizes[index_min]){
                if(index_min!=i){
                    change_height(arr_bars[index_min],bar_sizes[index_min],"black");
                }
                index_min=j;
                change_height(arr_bars[index_min],bar_sizes[index_min],"red");
            }
            else{
                change_height(arr_bars[j],bar_sizes[j],"black");
            }
        }
        
        if(index_min!=i){
            var temp=bar_sizes[index_min];
            bar_sizes[index_min]=bar_sizes[i];
            bar_sizes[i]=temp;

            change_height(arr_bars[index_min],bar_sizes[index_min],"red");
            change_height(arr_bars[i],bar_sizes[i],"red");
            change_height(arr_bars[index_min],bar_sizes[index_min],"black");
        }
        change_height(arr_bars[i],bar_sizes[i],"green");
    }
    change_height(arr_bars[i],bar_sizes[i],"green");
    buttons_enable();
}