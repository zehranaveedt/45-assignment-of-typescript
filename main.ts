
                        // Task no 1 installation Done!


                    //Task no 2

let perName = "Zehra Naveed";
console.log("hello !", perName , "Hello Eric, would you like to learn some python today?");




                        //task no 3 

let personName = "Zehra Naveed";
console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace (/\b\w/g,   (char)  => char.toUpperCase()));




                        //task no 4

console.log("Albert Einstein once said,\“A person who never made a mistake never tried anything new.\”");



                  //task no 5 repeat exercise no 4

let famousPerson = "Albert Einstein";
let message = "once said, “A person who never made a mistake never tried anything new.”";
console.log(famousPerson, message);




                  //task no 6 

let whitespaceName = "\n\t Zehra Naveed \t\n";
console.log(whitespaceName);

let withoutspaceName = whitespaceName.trim();
console.log(withoutspaceName)




                  //task no 7 or 8

console.log( 4 + 4);

console.log( 12 - 4);

console.log( 4 * 2);

console.log( 16 / 2);




                  //task no 9 

let favNumber = 12;
let Message = "my favourite number is";
console.log(Message, favNumber);




                  //task no 10 

// Adittion
console.log( 4 + 4);

// Subtraction
console.log( 12 - 4);

// Multiplication
console.log( 4 * 2);

// Divison
console.log( 16 / 2);




                  // task no 11

let friendsName : string []= ["Hamza","Zehra","Hasan","Ahasn"];

console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);




                  // task no 12 

let Names : string [] = [" Hamza","Hasan","Ahsan","Orhan"];

let MSG : string= "Do you like to play football?";
console.log(Names[0] + " " + MSG);
console.log(Names[1] + " " + MSG);
console.log(Names[2] + " " + MSG);
console.log(Names[3] + " " + MSG);





                  // task no 13

let Transpotation : string [] = ["Audi","Mercedes","BMW 4","Toyata"];
Transpotation.map((items) => console.log(`I would like to own a ${items}`));




                  // task no 14 

let guestArr : string [] = ["Zehra","Hamza","Malka jahan","Naveed"];

guestArr.map((items) => (console.log(`Dear ${items} , you are invited to the dinner.`)));




                  // task no 15

let guestlist : string [] = ["Babar","Tehmina","Bisma","Shaheen"];

let dontcome =  guestlist[0];

console.log(dontcome, "Ap nh asakta");

guestlist.splice(0,1, "Zehra");

guestlist.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));




                  // task no 16

//cresting  a Guestlist ARRAY
let Guestlist : string [] = ["Zehra","Areeba","Tooba","Maryam"];

// Making variable for those guest who come
let Dontcome= Guestlist[0];

//  Print the name of guest who can not come
console.log(Dontcome, "Nh ah skty hain");

//Add ot remove Values  from Guestlist ARRAY
Guestlist.splice(0,1,"Mahnoor");

// Message print for bigger table
console.log("good news ! We have Found a Bigger Table for dinner.");

// Adding a new value at  ending starting index of ARRAY
Guestlist .unshift("Mishal");

// Adding a new guest at middle index of array
Guestlist.push("Dua");

// Get a new guest at middle index of array
let middleindex: number =(guestlist.length / 2);

//addding a anew guet at middle index of array
Guestlist.splice(middleindex, 0, "Zoha");

//print message of Update list
console.log("Update list of our Guests.");

//sending a invitation messge to our guestsone by one with their names
Guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));





                                // task no 17

//cresting  a Guestlist ARRAY
let GuestList : string [] = ["Zehra","Areeba","Tooba","Maryam"];

// Making variable for those guest who come
let DontCome= Guestlist[0];

//  Print the name of guest who can not come
console.log(Dontcome, "Nh ah skty hain");

//Add ot remove Values  from Guestlist ARRAY
Guestlist.splice(0,1,"Mahnoor");

// Message print for bigger table
console.log("good news ! We have Found a Bigger Table for dinner.");

// Adding a new value at  ending starting index of ARRAY
Guestlist .unshift("Mishal");

// Adding a new guest at middle index of array
Guestlist.push("Dua");

// Get a new guest at middle index of array
let Middleindex: number =(guestlist.length / 2);

//addding a anew guet at middle index of array
Guestlist.splice(middleindex, 0, "Zoha");

//print message of Update list
console.log("Update list of our Guests.");

//sending a invitation messge to our guestsone by one with their names
Guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));

//Inform that only two guests can be invited to the dinner
console.log("Unfortunately, the dinner table wont arrive on time, so I can only two guests invite to dinner with me!");

// using while loop for remove guest from the array until only two remians name
while(GuestList.length > 2){
      let removedGuest = GuestList.pop();
      console.log(`Sorry, ${removedGuest} I can invite to the dinner`);
}

// printing a invitation to the last 2 guests
console.log("Invitation to the last 2 guests");


GuestList.forEach(lasttwo => console.log(`luckly, ${lasttwo}, you are still iniviting to the dinner`));

// removing last two guests from the guest list
GuestList.pop();
GuestList.pop();

console.log("Empty list:",GuestList);





                                // Task no 18

// Making a array of countries and prints its orignial order
let countriestoVisit :string [] = ["Dubai","China","Bangladesh","America"];
console.log("Orginal order:", countriestoVisit);

//print the array alphabetical order without modifying the actual Array list
console.log("Alphabetcal order:",[...countriestoVisit].sort());

//show that the Array is still in its original order
console.log("Still in original order:",countriestoVisit);

// print the order in reversed order without modifying the actual array list
console.log("reverse Order:",[...countriestoVisit].reverse());

//Show that the Array is still in its original order
console.log("Still in orginal Order", countriestoVisit);

//We have the changed orginal array Order now
console.log("original Array Reversed:" ,countriestoVisit.reverse());

//print the array tho show that its back  to its original order
console.log("Back to original Order:", countriestoVisit.reverse());

//print the array to show that its that order has been changed in Alphabetical order Now
console.log("Sorted in alphabetical order:",countriestoVisit.sort());

//We have changed again the original array order now in reverse order again
console.log("Original array Reversed Again:" ,countriestoVisit.reverse());





                                //task no 19


 let Guestname : string [] = ["Zehra","Hamza","Malka jahan","Naveed"];

// guestArr.map((items) => (console.log(`Dear ${items} , you are invited to the dinner.`)));
                                
let lengthGuests:number = Guestname.length;
console.log(`we are inviting total ${lengthGuests} guest`);





                                //task no 20

//making a programming language Array
let programmingLanguage : string [] = ["typescript","Hyper text Markup language","javascript","python"];

//print the message of the list
console.log("List of programming language:");

//print the value of Array in the form of list
programmingLanguage.forEach(language => console.log(language));




                             // task no 21

interface itCourse{
      coursename :string;
      location:string;
      OnsiteStudent: number;
};

let itCourse = {
      coursename :"typescript & javascript",
      location  : "Governor House Sindh",
      Onsite : 50000,
};

console.log(itCourse);





                        //task no 22

//Creating a Array
let errorarray: string [] = ["A","B","C","D"];

//Producing error! by Accessing invalid of Array
//console.log(errorarray[10]);

//error Removed
console.log(errorarray[1]);





                        //task no 23

//making a variables
let five = 5;
let ten = 10;

//test 1
console.log("\nTest 1: five is equal to five?");
console.log(five==5);

//test 2
console.log("\nTest 2: Ten is equal to ten?");
console.log(ten==10);

//test 3
console.log("\nTest 3: 5 is not equal to 10");
console.log(five !=ten);

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
console.log(ten ! =ten);

//Test 9
console.log("\nTest 9: 5 is greater than 10");
console.log(five > ten);

//Test 10
console.log("\nTest 10: 100 is smaller than 50");
console.log(100 < 50);




                  //Task no 24

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings


let name_1 : string = "Zehra"
let name_2 : string = "Zehra Naveed"
let name_3 : string = "miss Zehra Naveed"

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

let age_1 : number = 18
let age_2 : number = 22

// if (age_1 == 18){
      // console.log("eligible for vote")
// }

// if (age_1 != 22){
      //  console.log("eligible for vote in order category")
//  }


// less than equal to
if(age_1 <= age_2){
      console.log("Younger")
}

// greater than equal to
if(age_2 >= age_1){
      console.log("older")
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
let country :string [] = ["pakistan","Dubai","saudia Arabia","turkey"];
// if (country.includes("Pakistan")){
      //C
// } 

// if (!country.includes("America")){
      // console.log("America is not include in an array")
// }
 




                  //Task no 25
let ALien_color= "Green";

 if (ALien_color == "Green"){
             console.log("you earn 5 points ")
}

let aLien_color :string ="red"
if(ALien_color == "Green"){
      console.log("No output")
}




                  //Task no 26


 let ALien_Color= "Green";
if (ALien_color == "Green"){
              console.log("Player just earned 5 points for shooting the alien")
 }else{
       console.log("player just earned 10 points")
  }

  let ALieN_Color= "Red";

if (ALien_color == "Green"){
        console.log("Player just earned 5 points for shooting the alien")
 }else{
       console.log("player just earned 10 points")
 }




                    //task no 27
let ALien_CoLor: string ="Green"

if(ALien_CoLor == "Green"){
      console.log("5 points")
}else if(ALien_CoLor =="Yellow"){
      console.log("10 points")
}else{
      console.log("15 points")
}
 
 if(ALien_CoLor == "Yellow"){
       console.log("5 points")
 }else if(ALien_CoLor =="Yellow"){
      console.log("10 points")
}else{
      console.log("15 points")
 }

 if(ALien_CoLor == "red"){
      console.log("5 points")
}else if(ALien_CoLor =="Yellow"){
     console.log("10 points")
}else{
     console.log("15 points")
}
 


                  // task no 28...........2,4,13,20,65,older

let age : number = 100

if(age < 2){
      console.log("you are a baby")
}else if (age < 4){
      console.log("you are a to older")
}else if (age < 13){
      console.log("you are a kid")
}else if (age < 20){
      console.log("you are a teenager")
}else if (age < 65){
      console.log("you are a adult")
}else{
      console.log("you are older")
}



                  //task no 29 you really like bananas

let favourite_fruits : string [] = ["Kivi","Orange","Apples","peach","berry"]
 
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


let users : string [] = ["Admin","Eric","Zahra","Hamza"]

for(let user of users){
      if (user === "Admin"){
            console.log("Hello Admin, would you like to see a status report?")
      }else{
            console.log(`Hello ${user}, thankyou for logging in again`)
      }
}





                        // task no 31

  let Users : string [] = ["Admin","Eric","Zahra","Hamza"]
  if(Users.length === 0){
        console.log("We need to find some users!")
  }else {
      for(let user of Users){
            if(user === "Admin"){
                  console.log("Hello Admin, would you like to see a status report?")
            }else{
                  console.log(`Hello ${user}, thankyou for logging in again`)
            }
      }
  }

  users = []
  if (users.length === 0){
       console.log("We need to find some users!")
  }
  



                        //   task no 32

let current_users : string [] = ["Admin","Eric","ALi","Hamza","Zehta"]
let new_users :string [] = ["Admin","Fatima","Hasan","Ahsan"]

// let current_users_lower : string [] =current_users.map(users => users.toLowerCase())

//for(let new_user of new_users){
  //   if(current_users_lower.includes (new_user.toLowerCase())){
//      console.log(`sorry ${new_users}, that name is taken`)
// }else{
   // console.log(`Yes ${new_users}, is still in avaliable list`)

// }
// }



                         //task no 33 


let numbers : number [] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers){
if (number === 1){
      console.log(`${number}st`)
} else if (number ===2){
      console.log(`${number}nd`)
}else if (number ===3){
      console.log(`${number}rd`)
}else{
      console.log(`${number}th`)
}
}



                        // Task no 34

let favourite_pizza : string [] = ["pepperoni","Chicken tikka","Fajitta"]

// for (let pizza of favourite_pizza){
//    /   console.log(pizza)

// }

// console.log("/n")

 for (let pizza of favourite_pizza){
       console.log(`I really like ${pizza} pizza!`)

 }console.log("nI really like to eat pizza!")


 

                       // task no 35

let animals : string [] = ["cat","lion","Dog"]

for (let animal of animals){
      console.log(animals)
}
  console.log("\n")

  for (let animal of animals){
      console.log(`A ${animal} has a tail`)
  }

  console.log ("\n all of these are great pets! but i love cats more")




                        // task no 36

function makeShirt(size : string, text: string): void {
      console.log(`you order a ${size} shirt that says ${text}`)     
}

makeShirt('large','"i love typescript"')
makeShirt('medium','"i need a big shirt"')




                        // task no 37

function Makeshirt(size : string = 'large', text: string = 'I love typescript'): void {
      console.log(`you have order a ${size}, shirt that says ${text}`)
}

Makeshirt();
Makeshirt('Medium')

// different message
Makeshirt('Small', 'I need a big shirt to wear')




                        // task no 38

 function describe_city(city : string, country: string = 'Pakistan'): void{
      console.log(`${city} is in ${country}`)
 }    

describe_city('Karachi') //default sentence
 describe_city('France','Europe')
 describe_city('lahore' ,'pakistan')




                        //   task no 39

function cityCountry(city : string, country: string): string {
      return`${city}, ${country}`
}

let c1 = cityCountry('lahore' , 'pakistan')
let c2 = cityCountry('Tokyo' , 'japan')
let c3 = cityCountry('Paris' , 'france')

console.log(c1)
console.log(c2)
console.log(c3)




                  //    task no 40

function Makealbum(artist: string, title: string): {artist: string; title: string} {
      const dictionaries = {
            artist: artist.charAt(0).toUpperCase() + artist.slice(1),
            title: artist.charAt(0).toUpperCase() + artist.slice(1)
};
  return dictionaries;
}

let album = Makealbum("Ali" , "Light")
console.log(album)

album = Makealbum("hasan" , "red wave")
console.log(album)

 album = Makealbum("Hamza" , "seenbreeze")
console.log(album)




                  // task no 41

// Define a functin to print each magician name an array

 function show_magicians(magicians: string[]){
       magicians.forEach(name => console.log(name));
 }

//  define an array containing magicians name
let magician_names = ["Hamza","Hasan","Ahsan"]


//  call the function to print each magician name
 show_magicians(magician_names);




                  // task no 42

function Show_magicians(magicians: string[]){
      magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
   return  magicians.map(name =>` The Great ${name}`);
}

// define an array og magicans names
let Magician_names=["Hamza","Hasan","Ahsan"];


let great_magicians= make_great(magician_names);

show_magicians(great_magicians);





                        // Task no 43

 function Show_Magicians(magicians: string[]){
        magicians.forEach(name => console.log(name));
 }
                        
function Make_great(magicians: string[]){
return  magicians.map(name =>` The Great ${name}`);
}
                        
// define an array og magicans names
let Magician_Names=["Hamza","Hasan","Ahsan"];
                        
                        
let Great_magicians= Make_great(Magician_names);
                        
//Making a copy of original array through .slice() function
let copy_Magician_Names = Magician_Names.slice()

// Modify the copied array to include "the great" with their names

let  copy_Great_magicians= Make_great(copy_Magician_Names);

// show both arrays Original and copied
// Original
console.log("Original Array\n");
Show_Magicians(Magician_Names);

//copied
console.log("\nCopied array \n");
Show_Magicians(copy_Great_magicians);



                        // task no 44

// define a functiom witha rest parameter that accept items argumeents re presenting ur sandwich

function makeSandwich(...items: string[]){
      console.log("\nMaking a sandwich with the following items: \n");
      items.forEach(singleItem => console.log("-" + singleItem));
      console.log("\nNow Enjoy sandwich");
}

// call the function 3 times with 3 different number of arrguments
makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Bread","Butter");

makeSandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","Lettuce","Tomato");




                              // task no 45

type car= {
      manufacture: String
      model: string
      [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
      return{
            manufacture,
            model,
            ...optional
      }
}

const mycar: car = createCar("TOyata","Corolla", { color: "silver", year: "2024"})
console.log(mycar);

                                                      // task completed

