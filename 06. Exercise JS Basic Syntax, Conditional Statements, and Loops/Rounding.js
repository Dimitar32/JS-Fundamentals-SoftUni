function rounding(number, precision){
    if(precision > 15){
        precision = 15;
    }
    
    var result = number.toFixed(precision);
    console.log(parseFloat(result));
}

