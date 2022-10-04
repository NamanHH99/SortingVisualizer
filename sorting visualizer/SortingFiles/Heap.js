function HeapSort(){

    change_div_delay=0;

    heap_sort();
    
    buttons_enable();
}

function swap(i,j){
    change_height(arr_bars[i],bar_sizes[i],"red");
    change_height(arr_bars[j],bar_sizes[j],"red");

    var temp=bar_sizes[i];
    bar_sizes[i]=bar_sizes[j];
    bar_sizes[j]=temp;

    change_height(arr_bars[i],bar_sizes[i],"red");
    change_height(arr_bars[j],bar_sizes[j],"red");

    change_height(arr_bars[i],bar_sizes[i],"black");
    change_height(arr_bars[j],bar_sizes[j],"black");
}

function max_heapify(n,i){
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && bar_sizes[l]>bar_sizes[largest])
    {
        if(largest!=i)
        {
            change_height(arr_bars[largest],bar_sizes[largest],"black");
        }

        largest=l;

        change_height(arr_bars[largest],bar_sizes[largest],"red");
    }

    if(r<n && bar_sizes[r]>bar_sizes[largest])
    {
        if(largest!=i)
        {
            change_height(arr_bars[largest],bar_sizes[largest],"black");
        }

        largest=r;

        change_height(arr_bars[largest],bar_sizes[largest],"red");
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort(){
    for(var i=Math.floor(arr_size_val/2)-1;i>=0;i--){
        max_heapify(arr_size_val,i);
    }

    for(var i=arr_size_val-1;i>0;i--){
        swap(0,i);
        change_height(arr_bars[i],bar_sizes[i],"green");
        change_height(arr_bars[i],bar_sizes[i],"yellow");

        max_heapify(i,0);

        change_height(arr_bars[i],bar_sizes[i],"black");
        change_height(arr_bars[i],bar_sizes[i],"green");
    }
    change_height(arr_bars[i],bar_sizes[i],"green");
}