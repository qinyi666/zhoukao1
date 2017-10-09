/**
 * Created by 橘子到底酸不酸 on 2017/10/9.
 */
//数组去重方法1
var arr=[2,4,5,7,6,4,5];
function quChong(brr){
    var crr=[];
    for(var i=0;i<brr.length;i++){
        if(crr.indexOf(brr[i])==-1){
            crr.push(brr[i])
        }
    }
    return crr;
}
console.log(quChong(arr))