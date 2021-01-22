// https://github.com/makshud-nur/fundamental_JS
/**
if kmeter>0; than do the function else...
 */
function kilometerToMeter(kmeter){
    const mtr = kmeter * 1000; //multiply with 100
    return mtr;
}
//console.log(kilometerToMeter(3));
/**
if watch>0; phone>0 and laptop>0 than do the function else...
 */
function budgetCalculator(watch, phone, laptop){
    const watchCost = watch * 50;
    const phoneCost = phone * 100;
    const laptopCost = laptop * 500;
    const totalBudget = watchCost + phoneCost + laptopCost;
    return totalBudget;
}
//console.log(budgetCalculator(2, 4, 0));

/**
function hotelCost(yourDaysAtHotel){
    first 10 days-100
    11-20 80 dollar
    20 er beshi 50 taka
    return totalcost;
}
function megaFriend(array with many strings){
    find out the largest string in that array
    return the largest name;
}
bonus- negative kilometers or days in hotel or budget or 
empty array doesn't work- console log the error; Use comment;
Indent properly. */