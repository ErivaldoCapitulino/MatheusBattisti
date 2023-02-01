const students = [
  { name: "Rodolfo", age: 25 },
  { name: "Maria", age: 43 },
  { name: "João", age: 21 },
  { name: "Bruno", age: 43 },
  { name: "Carla", age: 13 },
  { name: "Ana", age: 20 },
  { name: "Julio", age: 26 },
];

// let a = students.forEach((student) => {
//   if (student.age === 20) {
//     console.log(`${student.name} tem ${student.age} anos`);
//   }
//   console.log(student);
// });
// let soma = 0;
let media = 0;
let b = students.map((student) => {
  student.age + 3;
  soma = soma + student.age;
  return soma;
});
media = soma / students.length;

// console.log(a);
console.log("B + " + media.toFixed(0));
