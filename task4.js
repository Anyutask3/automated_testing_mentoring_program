function addWithDelay() {
    return new Promise((resolve, reject) => {
        var sum = 0;
        setTimeout(() => {
            for(var i = 0; i < arguments.length; i++) {
                if(arguments[i] < 0) {
                    return reject ('Error! Some parameter is a negative number!');
                } else {
                    sum += arguments[i];
                }
            }
            return resolve(sum);
        }, 1000);    
    });
}