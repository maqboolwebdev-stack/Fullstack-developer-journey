const animal = new Set(['cat', 'dog', 'cat']);

console.log(animal);
console.log(animal.has('cat'));
animal.add(23);
console.log(animal);
animal.delete(23);
console.log(animal);
console.log(animal.size);
animal.clear()
console.log(animal);

animal.add('lion').add('tiger').add('cow')

for (ani of animal) {
    console.log(ani);
}

let index = 1;
animal.forEach((val) => {
    console.log(`${index++}.${val}`);
});

const iterator = animal.values();
index = 1;
for(val of animal) {
    console.log(`iterator is working ${index++}.${val}`);
}
console.log(animal.keys());
console.log(animal.values());

console.log('--------------------------------------------------------------------------------------------');

const car = new Map();

console.log(car);
car.set('brand', 'model');
car.set('toyota', 'Land cruiser')

console.log(car);
car.forEach((val,key)=>{
    console.log(val,key);
})
console.log(car.get('brand'));
console.log(car.size);
car.delete('brand');
console.log(car);
console.log(car.size);

