interface Human {
    name:string,
    age:number,
    gender:string;
}

const person = {
    name: "yuri",
    gender: "female",
    age:22
};


const sayHi = (person: Human): string => {
    return (`hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};


console.log(sayHi(person));

export {};