function InsertionSort(){
    change_div_delay=0;

    for(var j=0;j<arr_size_val;j++){
        change_height(arr_bars[j],bar_sizes[j],"yellow");

        var key= bar_sizes[j];
        var i=j-1;
        while(i>=0 && bar_sizes[i]>key){
            change_height(arr_bars[i],bar_sizes[i],"red");
            change_height(arr_bars[i+1],bar_sizes[i+1],"red");

            bar_sizes[i+1]=bar_sizes[i];

            change_height(arr_bars[i],bar_sizes[i],"red");
            change_height(arr_bars[i+1],bar_sizes[i+1],"red");
    
            change_height(arr_bars[i],bar_sizes[i],"black");
            if(i==(j-1)){
                change_height(arr_bars[i+1],bar_sizes[i+1],"yellow");
            }
            else{
                change_height(arr_bars[i+1],bar_sizes[i+1],"black");
            }
            i-=1;
        }
        bar_sizes[i+1]=key;

        for(var k=0;k<j;k++){
            change_height(arr_bars[k],bar_sizes[k],"green");
        }
    }
    change_height(arr_bars[j-1],bar_sizes[j-1],"green");

    buttons_enable();
}