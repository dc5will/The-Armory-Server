# Squad Armory
An app for gamers to find friends to play with in their favorite online multiplayer game.

[Live Version](https://squad-armory.now.sh/)
[API](https://limitless-brushlands-45977.herokuapp.com/api)
[Client Repo](https://github.com/dc5will/The-Armory-Client)

## Why

Finding friends to play online video games with is hard. Sometimes life gets in the way and schedules don't line up. Or maybe you just don't have any friends to begin with. Don't fret because that's where Squad Armory comes in! Find your favorite game and join a squad that's looking exactly for whatever role you play. Can't find one that's right for you? Create your own squad and find your perfect teammates! Whether you're looking for something more casual or more competitive, you can be as general or as specific as you'd like when creating a squad. Chat with your new squadmates within the app and plan out your gaming session. Squad up and join Squad Armory!

## Features

- [X] **Join A Squad**: Users can find squads that match their gaming preferences and join available spots
- [X] **Create A Squad**: Users can create a squad with as much specificity as they want when looking for squadmates
- [X] **Chat with squadmates**: Everyone in a squad can chat with each other in real time

## Upcoming Features

- [ ] **Voice chat**: Users can opt in to use voice chat upon joining a squad
- [ ] **Private squads**: Creators of squads can require applications for potential new squadmates

## Tech Stack

### Client
- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://github.com/facebook/react)
- [React Context](https://reactjs.org/docs/context.html)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Socket.io-client](https://socket.io/docs/client-api/)
- [Enzyme](https://airbnb.io/enzyme/)

### Server
- [Node](https://github.com/nodejs/node)
- [NPM](https://www.npmjs.com/)
- [Express.js](https://github.com/expressjs/express)
- [PostgreSQL](https://www.postgresql.org/)
- [Knex.js](https://knexjs.org/)
- [Socket.io](https://socket.io/docs/)
- [Nodemailer](https://nodemailer.com)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://www.npmjs.com/package/supertest)

## API
```
/api
.
├── /auth
│   └── POST
│       ├── /token
├── /games
│   └── GET /
│   |   ├── /:id
│   |   └── /:gameId/parties
├── /party
│   └── GET
│       ├── /:partyId
│       ├── /auth/:partyId
│       ├── /messages/:partyId
│   └── POST
│       └── /
├── /user
│   └── GET
│       └── /:userId
│   └── POST
│       └── /
│   └── PATCH
│       └── /:userId
```

## Team

- Project Manager - [Andrew Bituin](https://github.com/andrewbituin)
- Product Manager - [Alex Reich](https://github.com/VarReach)
- Design Lead - [Jake Derhalli](https://github.com/JuiceboxJones)
- Testing Lead - [William Wong](https://github.com/dc5will)


