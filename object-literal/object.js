var person = {
    name: "Adam Locke",
    age: 22,
    nickname: "Big Al",
    favoriteColors: [
        "green",
        "red",
        "purple"
    ],
    talk: function(){
        document.write("Adam says hello my name is: " + this.name);
    },
    
    walk: function(spaces){
        console.log("Adam moved " + spaces + " spaces.");
        console.log(12-spaces);
    }
};

var person2 = {
    FirstName: "Adam Locke",
    email : "mig@summit.com",
    adult: true,
    
    talk: function(){
        document.write("Adam says hello my name is: " + this.name);
    },
    
    walk: function(spaces){
        console.log("Adam moved " + spaces + " spaces.");
        console.log(12+spaces);
    }
};

console.log(person2.FirstName);

console.log(person.email);

person.talk();
person.walk(55);
person.name = "Sam";
person['name'] = "Tom";
console.log(person.name); 
console.log(person.age);
console.log(person['nickname']);
console.log(person.nickname);