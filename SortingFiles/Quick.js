function QuickSort(){
    change_div_delay=0;

    quick_sort(0,arr_size_val-1);
    buttons_enable();
}

function quick_partition (start, end){
    var i = start + 1;
    var piv = bar_sizes[start] ;
    change_height(arr_bars[start],bar_sizes[start],"yellow");

        for(var j =start + 1; j <= end ; j++ ){
            if (bar_sizes[ j ] < piv){
                change_height(arr_bars[j],bar_sizes[j],"yellow");

                change_height(arr_bars[i],bar_sizes[i],"red");
                change_height(arr_bars[j],bar_sizes[j],"red");

                var temp=bar_sizes[i];
                bar_sizes[i]=bar_sizes[j];
                bar_sizes[j]=temp;

                change_height(arr_bars[i],bar_sizes[i],"red");
                change_height(arr_bars[j],bar_sizes[j],"red");

                change_height(arr_bars[i],bar_sizes[i],"black");
                change_height(arr_bars[j],bar_sizes[j],"black");

                i += 1;
            }
    }
    change_height(arr_bars[start],bar_sizes[start],"red");
    change_height(arr_bars[i-1],bar_sizes[i-1],"red");
    
    var temp=bar_sizes[start];
    bar_sizes[start]=bar_sizes[i-1];
    bar_sizes[i-1]=temp;

    change_height(arr_bars[start],bar_sizes[start],"red");
    change_height(arr_bars[i-1],bar_sizes[i-1],"red");

    for(var t=start;t<=i;t++)
    {
        change_height(arr_bars[t],bar_sizes[t],"green");
    }

    return i-1;
}

function quick_sort (start,end){
    if( start < end ){
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);
        quick_sort (piv_pos +1, end) ;
    }
}