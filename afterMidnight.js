// Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight,
// and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

const afterMidnight = function(minutes) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = new Date(2023, 7, 20, 0, 0)
    // get the current time and format it into a format like 'Sunday 00:00'
    day = new Date(day.getTime() + minutes*60000);
    
    console.log(day)
    // let d = Math.trunc(minutes / 1440);
    // let h = Math.trunc(minutes / 60) % 24;
    // let m = minutes % 60;
    // console.log(d, h, m)
    // if (d > 0) {
    //     // subtract the days
    //     // if the day is less than 0 or greater than 6 start a loop
    // }
    return `${days[day.getDay()]} ${String(day.getHours()).padStart(2, 0)}:${String(day.getMinutes()).padStart(2,0)}`
    // increment or decrement the minutes side first 
    // possibly make use of the modulus operator to get the remainder to add to the minutes
    // 

}

console.log(afterMidnight(0))
console.log(afterMidnight(1440))
console.log(afterMidnight(-750024))