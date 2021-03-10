const firstName = "David";
console.log(firstName);
David

const lastName = "Bruno";
console.log(lastName);
Bruno

let message = "Hi, I'm David Bruno from SF, I like to cook and meet new people."
console.log(message);
Hi, I'm David Bruno from SF, I like to cook and meet new people.

let image = new URL("http://www.go.com/davif.png");

let location = "San Francisco";
console.log(location);
San Francisco

let state = "CA";
console.log(state);
CA

let followers = 105;

let following = 1500;
following ++;

let curday = function(sp){
today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //As January is 0.
let yyyy = today.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (mm+sp+dd+sp+yyyy);
};
console.log(curday('/'));
console.log(curday('-'));
