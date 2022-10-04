function merge_partition(start,end)
{
    if(start < end){
        var mid=Math.floor((start + end) / 2);
        change_height(arr_bars[mid],bar_sizes[mid],"yellow");

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
function MergeSort(){
    change_div_delay=0;

    merge_partition(0,arr_size_val-1);
    buttons_enable();
}

function merge_sort(start,mid,end){
    var p=start,q=mid+1;
    var Arr=[],k=0;

    for(var i=start; i<=end; i++){
        if(p>mid){
            Arr[k++]=bar_sizes[q++];
            change_height(arr_bars[q-1],bar_sizes[q-1],"red");
        }
        else if(q>end){
            Arr[k++]=bar_sizes[p++];
            change_height(arr_bars[p-1],bar_sizes[p-1],"red");
        }
        else if(bar_sizes[p]<bar_sizes[q]){
            Arr[k++]=bar_sizes[p++];
            change_height(arr_bars[p-1],bar_sizes[p-1],"red");//Color update
        }
        else{
            Arr[k++]=bar_sizes[q++];
            change_height(arr_bars[q-1],bar_sizes[q-1],"red");
        }
    }

    for(var t=0;t<k;t++){
        bar_sizes[start++]=Arr[t];
        change_height(arr_bars[start-1],bar_sizes[start-1],"green");
    }
}

