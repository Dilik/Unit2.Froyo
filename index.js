// Block 15:Froyo Orders  Unit2.Froyo 
// Create a working code 1st and only one MAIN task for today's workshop

const orderOne = prompt (`Enter your order please:  `, "Vanilla");

// if (orderOne != null) {

// }

//vanilla,vanilla,vanilla,strawberry,coffee,coffee

// const userOrder = ["OriginalTart", "NewYorkCheesecake", "Cookies&Cream", "PomegranateRaspberrySorbet", "OrangeSplashSorbet", "DutchChocolate", "WhiteVanilla", "CakeBatter", "StrawberryBanana", "SaltedCaramel", "RedVelvetCake", "PistachioGelato", "HazelnutGelato", "TigersBloodItalianIce", "BlueRaspberryItalianIce"];

const userOrder1 = ["OriginalTart", "Vanilla", "Cookies&Cream", "HazelnutGelato"];
userOrder1.splice(userOrder1.length, 0, orderOne);

const userInArr = userIn.split(", ");
console.log(userInArr);

console.log(userOrder1);

// console.log(userOrder2);

// console.log(Object.keys(userOrder1));

let calc = () => {

}

const result = userOrder1.filter( i => i === 2).length;

console.log(`Number of each element #1 : `+result);

let count = 0;
for ( let i = 0; i < userOrder1.length; i++) {
    if(userOrder1[i] == 2)
    count++;
}

console.log(`Here is a count number #2 :` +count);