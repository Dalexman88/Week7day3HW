//==========Exercise #1 ===========//


let person3 = {
  pizza:["Deep Dish","South Side Thin Crust"],
  tacos:"Anything not from Taco bell",
  burgers:"Portillos Burgers",
  ice_cream:["Chocolate","Vanilla","Oreo"],
  shakes:[{
      oberwise:"Chocolate",
      dunkin:"Vanilla",
      culvers:"All of them",
      mcDonalds:"Sham-rock-shake",
      cupids_candies:"Chocolate Malt"
  }]
}


//For Keys
console.log(Object.keys(person3))

//For values attempt
console.log(Object.values(person3))
for(let i = 0; i < Object.keys(person3).length; i++){
  if(Array.isArray(Object.values(person3)[i])){
      console.log(Object.values(person3)[i])
  }
}


//=======Exercise #2=========//


//Creating prototype
function Person(name, age){
  this.name = name;
  this.age = age;
  
  //A Method inside JS Protoype
  this.printInfo = () =>  {
      console.log(`This person's name is ${this.name} and they are ${this.age} years old!`);
  }
  this.older = () =>  {
      age += 1
      return age
  }
  this.add_age = (years_increase) =>  {
      age += years_increase
      console.log(age)
  }
}

// Creating an instance of a prototype
let Theodore = new Person ('Theodore', 61)
let Roosevelt = new Person ('Roosevelt', 60)

//Call our prototype method
console.log(Theodore.printInfo())

console.log(Roosevelt.printInfo())


// This function adds "amount" of years to "person"
// Just call it: get_older(Theodore, 2)
function get_older(person, amount) {
  for(i=0; i < 1; i++){
      person.add_age(amount)
      }
}




// =============Exercise #3 ============//


const length_check = num => {
  return new Promise( (resolve, reject) => {
      if (num <10) {
      setTimeout( () => resolve("Small Number"), 200)
      } else {
          setTimeout( () => reject("Big Number"), 1000)
      }
  })
}

length_check(10)
.then((resolve) => {
  console.log(resolve)
})
.catch((reject)=>{
  console.log(reject)
})