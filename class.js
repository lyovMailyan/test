console.log("LYOV");

// function User(name, position) {
//     this.name = name;
//     this.position = position;
//     this.info = function () {
//         return this.position
//     }
// }

// let obj1 = new User("Aram", "Snayper");
// let obj2 = new User("Narek", "Hradig");
// console.log(obj1.toString());
// console.log(obj2.info());

// console.log(obj1.__proto__ === User.prototype);



// function Car(model,color){
//     this.model=model;
//     this.color=color;
// }

// Car.prototype.getModel=function(){
//     console.log(`My car model is $(this.model)
// and color is $(this.color)`)
// }

// let car=new Car("suzuki","silver")
// car.getModel()



// class Car {
//     constructor(model, color) {
//         this.model = model;
//         this.color = color;

//     }
//     getModel() {
//         console.log(`My car model is $(this.model)
//         and color is $(this.color)`)

//     }
//     static getStatic() {
// console.log("a am a static method of class")
//     }
//  }
// let car = new Car("Suzuki", "siver");
// let car1 = new Car("Ford", "Black");
// console.log(car)
// car.getModel();

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     toString() {
//         return this.name
//     }
// }
// class Dog extends Animal {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
//     say() {
//         console.log(this.name + " " + "says haf");
//     }
// }
// const cat1=new Cat("murka","red");
// const dog1=new Dog("jeco",6);
// console.log(dog1);
// console.log(cat1  
// );



// class Book {
//     constructor(tittle, year, price) {
//         this.tittle = tittle,
//             this.year = year,
//             this.price = price;
//     }
//     GetInfo() {
//         return `title: ${this.tittle}\nyear: ${this.year}\nprice: ${this.price}`
//     }
// }
// const book1 = new Book("js", 2020, "85$");

// console.log(book1.GetInfo());








//Արտածել տրված n թիվը չգերազանցող բոլոր այն բնական թվերը, որոնք առանց մնացորդի բաժանվում են իրենց թվանշանների գումարի վրա:


// function sumOfDigits(num) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

// function func(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % sumOfDigits(i) === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// let n = 50;
// console.log(func(n));




//Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝  
//8.ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,  
// function isDublicate(arr) {
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr1.includes(arr[i]) === true) {
//             return true
//         } else {
//             arr1.push(arr[i])
//         }
//     }
//     return false
// }

// console.log(isDublicate([2, 3, 4, 5, 6, 12, 9]));




//b)
// function f(arr) {
//     let arr1 = [];
//     let obj = {}

//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] === undefined) {
//             obj[arr[i]] = 1;
//         } else {
//             obj[arr[i]]++
//         }
//     }
//     for (let key in obj) {
//         if (obj[key] === 1) {
//             arr1.push(key)
//         }
//     }
//     return arr1
// }

// console.log(f([2, 3, 4, 5, 6, 12, 6]));





function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function func(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % sumOfDigits(i) === 0) {
            result.push(i);
        }
    }
    return result;
}

let n = 50;
console.log(func(n));














































