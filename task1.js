function multiplyForThreeRandomBiggestIntegers() {
    var randomArr= Array.from({length: 10}, () => Math.floor(Math.random() * 100));
    randomArr.sort(function(a, b){return b - a});
    console.log(randomArr);
    var multiply = 1;
    for(var i = 0; i <= 2; i++){
    multiply += randomArr[i];
    }
return multiply;
}
multiplyForThreeRandomBiggestIntegers();
