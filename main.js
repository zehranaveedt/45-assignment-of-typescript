//Task no 2 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var perName = "Zehra Naveed";
console.log("hello !", perName, "Hello Eric, would you like to learn some python today?");
//task no 3 
var personName = "Zehra Naveed";
console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
//task no 4
console.log("Albert Einstein once said,\“A person who never made a mistake never tried anything new.\”");
//task no 5 repeat exercise no 4
var famousPerson = "Albert Einstein";
var message = "once said, “A person who never made a mistake never tried anything new.”";
console.log(famousPerson, message);
//task no 6 
var whitespaceName = "\n\t Zehra Naveed \t\n";
console.log(whitespaceName);
var withoutspaceName = whitespaceName.trim();
console.log(withoutspaceName);
//task no 7 or 8
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
//task no 9 
var favNumber = 12;
var Message = "my favourite number is";
console.log(Message, favNumber);
//task no 10 
// Adittion
console.log(4 + 4);
// Subtraction
console.log(12 - 4);
// Multiplication
console.log(4 * 2);
// Divison
console.log(16 / 2);
// task no 11
var friendsName = ["Hamza", "Zehra", "Hasan", "Ahasn"];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
// task no 12 
var Names = [" Hamza", "Hasan", "Ahsan", "Orhan"];
var MSG = "Do you like to play football?";
console.log(Names[0] + " " + MSG);
console.log(Names[1] + " " + MSG);
console.log(Names[2] + " " + MSG);
console.log(Names[3] + " " + MSG);
// task no 13
var Transpotation = ["Audi", "Mercedes", "BMW 4", "Toyata"];
Transpotation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
// task no 14 
var guestArr = ["Zehra", "Hamza", "Malka jahan", "Naveed"];
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , you are invited to the dinner."))); });
// task no 15
var guestlist = ["Babar", "Tehmina", "Bisma", "Shaheen"];
var dontcome = guestlist[0];
console.log(dontcome, "Ap nh asakta");
guestlist.splice(0, 1, "Zehra");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
// task no 16
//cresting  a Guestlist ARRAY
var Guestlist = ["Zehra", "Areeba", "Tooba", "Maryam"];
// Making variable for those guest who come
var Dontcome = Guestlist[0];
//  Print the name of guest who can not come
console.log(Dontcome, "Nh ah skty hain");
//Add ot remove Values  from Guestlist ARRAY
Guestlist.splice(0, 1, "Mahnoor");
// Message print for bigger table
console.log("good news ! We have Found a Bigger Table for dinner.");
// Adding a new value at  ending starting index of ARRAY
Guestlist.unshift("Mishal");
// Adding a new guest at middle index of array
Guestlist.push("Dua");
// Get a new guest at middle index of array
var middleindex = (guestlist.length / 2);
//addding a anew guet at middle index of array
Guestlist.splice(middleindex, 0, "Zoha");
//print message of Update list
console.log("Update list of our Guests.");
//sending a invitation messge to our guestsone by one with their names
Guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me?")); });
// task no 17
//cresting  a Guestlist ARRAY
var GuestList = ["Zehra", "Areeba", "Tooba", "Maryam"];
// Making variable for those guest who come
var DontCome = Guestlist[0];
//  Print the name of guest who can not come
console.log(Dontcome, "Nh ah skty hain");
//Add ot remove Values  from Guestlist ARRAY
Guestlist.splice(0, 1, "Mahnoor");
// Message print for bigger table
console.log("good news ! We have Found a Bigger Table for dinner.");
// Adding a new value at  ending starting index of ARRAY
Guestlist.unshift("Mishal");
// Adding a new guest at middle index of array
Guestlist.push("Dua");
// Get a new guest at middle index of array
var Middleindex = (guestlist.length / 2);
//addding a anew guet at middle index of array
Guestlist.splice(middleindex, 0, "Zoha");
//print message of Update list
console.log("Update list of our Guests.");
//sending a invitation messge to our guestsone by one with their names
Guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me?")); });
//Inform that only two guests can be invited to the dinner
console.log("Unfortunately, the dinner table wont arrive on time, so I can only two guests invite to dinner with me!");
// using while loop for remove guest from the array until only two remians name
while (GuestList.length > 2) {
    var removedGuest = GuestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I can invite to the dinner"));
}
// printing a invitation to the last 2 guests
console.log("Invitation to the last 2 guests");
GuestList.forEach(function (lasttwo) { return console.log("luckly, ".concat(lasttwo, ", you are still iniviting to the dinner")); });
// removing last two guests from the guest list
GuestList.pop();
GuestList.pop();
console.log("Empty list:", GuestList);
// Task no 18
// Making a array of countries and prints its orignial order
var countriestoVisit = ["Dubai", "China", "Bangladesh", "America"];
console.log("Orginal order:", countriestoVisit);
//print the array alphabetical order without modifying the actual Array list
console.log("Alphabetcal order:", __spreadArray([], countriestoVisit, true).sort());
//show that the Array is still in its original order
console.log("Still in original order:", countriestoVisit);
// print the order in reversed order without modifying the actual array list
console.log("reverse Order:", __spreadArray([], countriestoVisit, true).reverse());
//Show that the Array is still in its original order
console.log("Still in orginal Order", countriestoVisit);
//We have the changed orginal array Order now
console.log("original Array Reversed:", countriestoVisit.reverse());
//print the array tho show that its back  to its original order
console.log("Back to original Order:", countriestoVisit.reverse());
//print the array to show that its that order has been changed in Alphabetical order Now
console.log("Sorted in alphabetical order:", countriestoVisit.sort());
//We have changed again the original array order now in reverse order again
console.log("Original array Reversed Again:", countriestoVisit.reverse());
//task no 19
var Guestname = ["Zehra", "Hamza", "Malka jahan", "Naveed"];
// guestArr.map((items) => (console.log(`Dear ${items} , you are invited to the dinner.`)));
var lengthGuests = Guestname.length;
console.log("we are inviting total ".concat(lengthGuests, " guest"));
//task no 20
//making a programming language Array
var programmingLanguage = ["typescript", "Hyper text Markup language", "javascript", "python"];
//print the message of the list
console.log("List of programming language:");
//print the value of Array in the form of list
programmingLanguage.forEach(function (language) { return console.log(language); });
;
var itCourse = {
    coursename: "typescript & javascript",
    location: "Governor House Sindh",
    Onsite: 50000,
};
console.log(itCourse);
//task no 22
//Creating a Array
var errorarray = ["A", "B", "C", "D"];
//Producing error! by Accessing invalid of Array
//console.log(errorarray[10]);
//error Removed
console.log(errorarray[1]);
//task no 23
//making a variables
var five = 5;
var ten = 10;
//test 1
console.log("\nTest 1: five is equal to five?");
console.log(five == 5);
//test 2
console.log("\nTest 2: Ten is equal to ten?");
console.log(ten == 10);
//test 3
console.log("\nTest 3: 5 is not equal to 10");
console.log(five != ten);
//Test 4
console.log("\nTest 4: 10 is greater than 5");
console.log(ten > 5);
//Test 5
console.log("\nTest 5: 5 is smaller than 10?");
console.log(five < ten);
//Test 6
console.log("\nTest 6: 10 is smaller than 5?");
console.log(ten < 5);
//Test 7
console.log("\nTest 7: 5 is equal to 10?");
console.log(five == ten);
//Test 8
console.log("\nTest 8: 10 is not equal to 10?");
console.log(ten = ten);
//Test 9
console.log("\nTest 9: 5 is greater than 10");
console.log(five > ten);
//Test 10
console.log("\nTest 10: 100 is smaller than 50");
console.log(100 < 50);
//Task no 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
var name_1 = "Zehra";
var name_2 = "Zehra Naveed";
var name_3 = "miss Zehra Naveed";
//  if (name_1 === name_3){
//  console.log("names are equal")
//  }else{     console.log("names are not equal")
//  }
//  if (name_1 != name_2){
// console.log("names are  equal")
// }
// if (name_1 != name_3){
// console.log("names are  equal")
//  }
var age_1 = 18;
var age_2 = 22;
// if (age_1 == 18){
// console.log("eligible for vote")
// }
// if (age_1 != 22){
//  console.log("eligible for vote in order category")
//  }
// less than equal to
if (age_1 <= age_2) {
    console.log("Younger");
}
// greater than equal to
if (age_2 >= age_1) {
    console.log("older");
}
// using && operators
// if(age_1 == 18 && age_2 == 22){
// console.log("person is eligible for vote")
// }
// using || or operators
// if(age_1 == 18 || age_2 != 22){
// console.log("person is not eligible for vote")
// }
// using array
var country = ["pakistan", "Dubai", "saudia Arabia", "turkey"];
// if (country.includes("Pakistan")){
//C
// } 
// if (!country.includes("America")){
// console.log("America is not include in an array")
// }
//Task no 25
var ALien_color = "Green";
if (ALien_color == "Green") {
    console.log("you earn 5 points ");
}
var aLien_color = "red";
if (ALien_color == "Green") {
    console.log("No output");
}
//Task no 26
var ALien_Color = "Green";
if (ALien_color == "Green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
var ALieN_Color = "Red";
if (ALien_color == "Green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
//task no 27
var ALien_CoLor = "Green";
if (ALien_CoLor == "Green") {
    console.log("5 points");
}
else if (ALien_CoLor == "Yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
if (ALien_CoLor == "Yellow") {
    console.log("5 points");
}
else if (ALien_CoLor == "Yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
if (ALien_CoLor == "red") {
    console.log("5 points");
}
else if (ALien_CoLor == "Yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
// task no 28...........2,4,13,20,65,older
var age = 100;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a to older");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are older");
}
//task no 29 you really like bananas
var favourite_fruits = ["Kivi", "Orange", "Apples", "peach", "berry"];
// if(favourite_fruits.includes("kivi")){
// console.log("kivi")
// }
// if (favourite_fruits.includes("Apple")){
// console.log("Apple")
// }
// if (favourite_fruits.includes("orange")){
// console.log("orange")
// }
// if (favourite_fruits.includes("peach")){
// console.log("you really like bananas")
// }
// if (favourite_fruits.includes("berry")){
//    /   console.log("you really like bananas")
// }
// task no 30
var users = ["Admin", "Eric", "Zahra", "Hamza"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thankyou for logging in again"));
    }
}
// task no 31
var Users = ["Admin", "Eric", "Zahra", "Hamza"];
if (Users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, Users_1 = Users; _a < Users_1.length; _a++) {
        var user = Users_1[_a];
        if (user === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thankyou for logging in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
//   task no 32
var current_users = ["Admin", "Eric", "ALi", "Hamza", "Zehta"];
var new_users = ["Admin", "Fatima", "Hasan", "Ahsan"];
// let current_users_lower : string [] =current_users.map(users => users.toLowerCase())
//for(let new_user of new_users){
//   if(current_users_lower.includes (new_user.toLowerCase())){
//      console.log(`sorry ${new_users}, that name is taken`)
// }else{
// console.log(`Yes ${new_users}, is still in avaliable list`)
// }
// }
//task no 33 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
// Task no 34
var favourite_pizza = ["pepperoni", "Chicken tikka", "Fajitta"];
// for (let pizza of favourite_pizza){
//    /   console.log(pizza)
// }
// console.log("/n")
for (var _c = 0, favourite_pizza_1 = favourite_pizza; _c < favourite_pizza_1.length; _c++) {
    var pizza = favourite_pizza_1[_c];
    console.log("I really like ".concat(pizza, " pizza!"));
}
console.log("nI really like to eat pizza!");
// task no 35
var animals = ["cat", "lion", "Dog"];
for (var _d = 0, animals_1 = animals; _d < animals_1.length; _d++) {
    var animal = animals_1[_d];
    console.log(animals);
}
console.log("\n");
for (var _e = 0, animals_2 = animals; _e < animals_2.length; _e++) {
    var animal = animals_2[_e];
    console.log("A ".concat(animal, " has a tail"));
}
console.log("\n all of these are great pets! but i love cats more");
// task no 36
function makeShirt(size, text) {
    console.log("you order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt('large', '"i love typescript"');
makeShirt('medium', '"i need a big shirt"');
// task no 37
function Makeshirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love typescript'; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
Makeshirt();
Makeshirt('Medium');
// different message
Makeshirt('Small', 'I need a big shirt to wear');
// task no 38
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('Karachi'); //default sentence
describe_city('France', 'Europe');
describe_city('lahore', 'pakistan');
//   task no 39
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var c1 = cityCountry('lahore', 'pakistan');
var c2 = cityCountry('Tokyo', 'japan');
var c3 = cityCountry('Paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
//    task no 40
function Makealbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: artist.charAt(0).toUpperCase() + artist.slice(1)
    };
    return dictionaries;
}
var album = Makealbum("Ali", "Light");
console.log(album);
album = Makealbum("hasan", "red wave");
console.log(album);
album = Makealbum("Hamza", "seenbreeze");
console.log(album);
// task no 41
// Define a functin to print each magician name an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//  define an array containing magicians name
var magician_names = ["Hamza", "Hasan", "Ahsan"];
//  call the function to print each magician name
show_magicians(magician_names);
// task no 42
function Show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return " The Great ".concat(name); });
}
// define an array og magicans names
var Magician_names = ["Hamza", "Hasan", "Ahsan"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
// Task no 43
function Show_Magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function Make_great(magicians) {
    return magicians.map(function (name) { return " The Great ".concat(name); });
}
// define an array og magicans names
var Magician_Names = ["Hamza", "Hasan", "Ahsan"];
var Great_magicians = Make_great(Magician_names);
//Making a copy of original array through .slice() function
var copy_Magician_Names = Magician_Names.slice();
// Modify the copied array to include "the great" with their names
var copy_Great_magicians = Make_great(copy_Magician_Names);
// show both arrays Original and copied
// Original
console.log("Original Array\n");
Show_Magicians(Magician_Names);
//copied
console.log("\nCopied array \n");
Show_Magicians(copy_Great_magicians);
// task no 44
// define a functiom witha rest parameter that accept items argumeents re presenting ur sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy sandwich");
}
// call the function 3 times with 3 different number of arrguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("TOyata", "Corolla", { color: "silver", year: "2024" });
console.log(mycar);
