/* console.log('destructuring ')


const person = {
    name: 'Erkin',
    age: 32,
    location: {
        city: 'London',
        temp: 2
    }
}

const {name, age} = person 


console.log(`${name} is ${age}.`) */

const book = {
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)

const coffeePrice = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [item, , price] = coffeePrice

console.log(`A medium ${item} costs ${price}`)