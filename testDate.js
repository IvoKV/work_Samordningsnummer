const date = new Date(Date.UTC(2022, 0, 33, 0, 0, 0, 0));
//console.log(new Intl.DateTimeFormat('sv').format(date));

// validating date
let dateInput = '2019/05/15';       // YYYY/MM/DD
let dateObj = new Date(dateInput);
console.log(dateObj);

// example with 'wrong' day
dateInput = '2019/05/32';
dateObj = new Date(dateInput);
console.log(dateObj);               //output: Invalid Date

// example with invalid date in February
dateInput = '2019/02/31';
dateObj = new Date(dateInput);
console.log(dateObj);  
