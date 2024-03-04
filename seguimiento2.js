const numbers = [1,2,3,4,5]
let movies = ["ScaryMovie", "Avatar", "Casi300", "Cars"]
const phone = ["Android","Iphone","Xiaomi"]
let music = ["Rap","Pop","Bachata","Rock"]
 

console.log(numbers);
console.log(movies);
console.log(phone);
console.log(music);


// 1 .Reduce()

let reducir = numbers.reduce((Valor1,Valor2) => {
  return Valor1*Valor2;
})
console.log(reducir);



// 2  .Filter 

let filtrar = movies.filter(dato => {
  return dato.startsWith("Ca");
})
console.log(filtrar);


// 3 .Map()

let mapeo = phone.map (PhonesFav => {
  return PhonesFav.concat(" - Welcome to the store") 
})
console.log(mapeo);


// 4 .forEach()

music.forEach (music => {
    console.log(music);
})
