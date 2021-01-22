// https://github.com/makshud-nur/fundamental_JS
/**
if kmeter>0; than do the function, else...
 */
function kilometerToMeter(kmeter){
    if(kmeter > 0) {
        const mtr = kmeter * 1000; //multiply with 100
        return mtr;
    }
    //for negative kilometers
    else {
        console.log("Error:Want to go backwards- not possible!");
    }
}
//console.log(kilometerToMeter(-2));
/**
if watch>=0; phone>=0 and laptop>=0 than do the function else...
 */
function budgetCalculator(watch, phone, laptop){
    if (watch >= 0 && phone >= 0 && laptop >=0){
        const watchCost = watch * 50;
        const phoneCost = phone * 100;
        const laptopCost = laptop * 500;
        const totalBudget = watchCost + phoneCost + laptopCost;
        return totalBudget;
    }
    //for negative purchase request...
    else {
        console.log("Error:No Negative number here ...!!!");
    }
}
//console.log(budgetCalculator(2, 4, -2));
function hotelCost(dayNoAtHotel){
    //for negative days in hotel...
    if (dayNoAtHotel < 0) {
        console.log("Error:Invalid time for staying here...")
    }
    //for positive days in hotel...
    else {
        if (dayNoAtHotel <= 10) {
            var totalHotelCost = dayNoAtHotel * 100;
            return totalHotelCost;
        }
        else if (dayNoAtHotel <= 20) {
            var dayNoAfter10day = dayNoAtHotel - 10;
            var costAfter10day = dayNoAfter10day * 80;
            var totalHotelCost = costAfter10day + 1000;
            return totalHotelCost;
        }
        else {
            var dayNoAfter20day = dayNoAtHotel - 20;
            var costAfter20day = dayNoAfter20day * 50;
            var totalHotelCost = costAfter20day + 1800;
            return totalHotelCost;
        }
    }
}
//console.log(hotelCost(-2));
//all the name goes in the array below...
var allNames = ["Jhankar", "Olalal", "Karim", "Rahim", "Sajib"];

function megaFriend(arr) {
//variable that will contain the longest string
  var long1 = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > long1.length) {
      long1 = arr[i];
    }
  }
  return long1;
}
//console.log(megaFriend(allNames));