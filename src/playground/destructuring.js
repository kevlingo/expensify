// const person = {
//   name: 'Kevin',
//   age: 49,
//   location: {
//     city: 'Pendleton',
//     temp: 11
//   }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temerature } = person.location;
// if (city && temerature) {
//   console.log(`It's ${temerature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Brian Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(publisherName);

// const address = ['217 Garden Dr', 'Pendleton', 'IN', '46064'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , price] = item;

console.log(`A medium ${name} costs ${price}`);
