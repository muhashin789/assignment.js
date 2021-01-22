

//kilometerToMeter start
function kilometerToMeter(kilometer){
    var meter = kilometer/1000;
    return meter;
}
var firstMeter = kilometerToMeter(2000);
console.log(firstMeter);

var secondMeter = kilometerToMeter(6000);
console.log(secondMeter);
//kilometerToMeter end


// budgetCalculator start
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}
var result = budgetCalculator(2, 2, 2);
console.log(result);
// budgetCalculator end


//hotelCost start
function hotelCost(days){
        
    var amount = 0;
    if(days <=10){
    amount = days * 100;
}else if(days <=20){
    var firstTenDays = 10 * 100;
    var remaining = days - 10;
    var secondTenDays = remaining * 80;
    amount = firstTenDays + secondTenDays;
}else{
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remaining = days - 20;
    var thirdTenDays = remaining * 50;
    amount = firstTenDays + secondTenDays + thirdTenDays;
}
return amount;
}

var totalCost = hotelCost(30);
console.log(totalCost);
//hotelCost end


//megaFriend start

function megaFriend(arr){
    var long = arr[0];
     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
            if( long.length < element.length){
                long = element
                }
    }
        return long
}

var friend = ["joy", "shafiq", "salam", "asad,", "muhashinul", "nazrul"]
var longword = megaFriend(friend)
console.log(longword)
//megaFriend end
