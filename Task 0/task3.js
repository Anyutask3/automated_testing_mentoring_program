function propertiesPrioritiesByIntegerValue(){
    var happiness = {
        "love": 3,
        "finances": 2,
        "health": 5,
        "family": 4,
        "friendship": 1
    };
    var sortedArr = [];
    for(var i in happiness) {
        var item = {
            id: i,
            rank: happiness[i]
        }
        sortedArr.push(item);
    }
    sortedArr.sort(function(a,b) {
        return b.rank - a.rank
    });
    var sortedObj = {};
    for(var i = 0; i < sortedArr.length; i++) {
        sortedObj[sortedArr[i].id] = sortedArr[i].rank;
    }
    return sortedObj;  
};
console.log(propertiesPrioritiesByIntegerValue());