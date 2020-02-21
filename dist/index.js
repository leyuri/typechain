"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "yuri",
    gender: "female",
    age: 22
};
const sayHi = (person) => {
    return (`hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map