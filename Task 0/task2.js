function totalAmountOfSecondTillNow(){
    var oldDate = new Date();
    oldDate.setHours(0, 0, 0, 1);
    var newDate = new Date();
    var sumSeconds = Math.floor((newDate.getTime()-oldDate.getTime())/1000)
    return sumSeconds;
}
totalAmountOfSecondTillNow();