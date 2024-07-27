const Actor = require('../models/actor.model.js')

const actors = [
    {
        fullName: 'Robert Downey Jr.',
        birthDate: new Date('1965-04-04'),
        bio: 'An American actor and producer. He is one of the highest-paid actors in Hollywood.',
        image: 'https://example.com/robert_downey_jr.jpg'
    },
    {
        fullName: 'Scarlett Johansson',
        birthDate: new Date('1984-11-22'),
        bio: 'An American actress and singer. She is among the world\'s highest-paid actresses.',
        image: 'https://example.com/scarlett_johansson.jpg'
    },
    {
        fullName: 'Chris Evans',
        birthDate: new Date('1981-06-13'),
        bio: 'An American actor, best known for his role as Captain America in the Marvel Cinematic Universe.',
        image: 'https://example.com/chris_evans.jpg'
    }
]

const insertActors = async () => {
    Actor.insertMany(actors).then((docs) => {
        console.log("Dummy Actors Inserted", docs);
    })
}


module.exports = {
    insertActors,
}