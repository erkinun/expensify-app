import * as firebase from 'firebase'
//import expenses from '../tests/fixtures/expenses'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }

/* /* db.ref('expenses').push(expenses[0])
db.ref('expenses').push(expenses[1])
db.ref('expenses').push(expenses[2]) */

/* var expenses = []*/

/* db.ref('expenses').on('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    })

    console.log(expenses)
}) */

/* db.ref('expenses').on('child_changed', (childSnapshot) => {
    console.log(childSnapshot.key, childSnapshot.val())
})
 */
/* db.ref().set({
    name: 'Erkin Unlu',
    age: 32,
    married: false,
    location: {
        city: 'London',
        country: 'UK'
    },
    job: 'Software Developer',
    company: 'QT'
}).then(() => {
    console.log('Data is saved to firebase')
}).catch((e) => {
    console.log('This failed', e)
})

db.ref('/attributes').set({
    'height': 186,
    'weight': 83
}).then(() => {
    console.log('Height and weight are set')
}).catch((e) => {
    console.log('There is something wrong', e)
})


db.ref().on('value', (snapshot) => {
        const data = snapshot.val()
        console.log(`${data.name} is a ${data.job} at ${data.company}`)
})

db.ref().update({
    name: 'Andrew Marr'
})
 */
/* db.ref().once('value')
    .then((snapshot) => {
        const data = snapshot.val()
        console.log(`${data.name} is a ${data.job} at ${data.company}`)
    })
    .catch((e) => {
        console.log('Error fetching data', e)
    }) */