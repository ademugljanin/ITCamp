function pattern(n){
    var broj = '1';
    for (var i = 2; i<=n; i++){
        broj += "\n" + 1 + Array(i).join("*") + i;
    }
    
    return broj;
}

console.log(pattern(10));

function transpose(n,m) {
    var a = "";
    for (var i = 0; i < n; i++) {

        for(var j = 0; j < m; j++){
            a+= i+j;
        }
        console.log(a);
        a=""
    }
    

}
function trr(n,m){
    [n,m] = [m,n];
    transpose(n,m);
}
transpose(5,3);
console.log("///////////////////////////////////////");
trr(5,3)

