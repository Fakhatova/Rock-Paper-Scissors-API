<h1 align="center">
  <br>
  Rock Paper Scissors API
  <br>
</h1>

<h4 align="center">RESTful API for Rock-Paper-Scissors frontend application consumption.</h4>


<p align="center">
  <a href="#about-the-project">About The Project</a> •
  <a href="#installation">Installation</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#contributing">Contributing</a> •
</p>


## About The Project

Rock-Paper-Scissors is an application where users can play game against computer. This app was designed as a way to simply interact with computer, by playing old but still popular game.  
The Rock-Paper-Scissors backend is built with a `Express.js` framework that stores new player credentials and game points. I did  expose this data to my frontend application to build out the user interface.

### Learning Goals

* Building a RESTful API with a Express.js
* Expose myself to backend API
* Able to write CRUD and execute
* Deploy API to Heroku


## Installation

1. Fork this repo
2. Clone your new repo:
  ```sh
  git clonehttps://github.com/Fakhatova/Rock-Paper-Scissors-API.git
  ```
3. Install dependencies:
  ```sh
  $ npm i
  ```
4. Run server localy:
  ```sh
  $ node .
  ```
## How To Use

### Endpoint Documentation
Domain: `https://rock-papper-scissors-api.herokuapp.com/`

#### Get all registered players:


GET `https://rock-papper-scissors-api.herokuapp.com/players`


Response:
  
```js
  [
    { 
       id: 1, 
       name: 'Fara', 
       wins: 0, 
       losts: 0 
    }
  ]
```

#### Get Spicific player by ID:


GET `https://rock-papper-scissors-api.herokuapp.com/players/:id`


Response:
```js
  [
    { 
       id: 1, 
       name: 'Fara', 
       wins: 0, 
       losts: 0 
    }
  ]
```
#### POST new player/register:

POST `https://rock-papper-scissors-api.herokuapp.com/players/new`

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 123759,
    title: 'string',
    wins:0,
    losts:0
  })
}
```

Response:

```js
  [
    { 
       id: 123759, 
       name: 'string', 
       wins: 0, 
       losts: 0 
    }
  ]
```

#### Update score:


PATCH `https://rock-papper-scissors-api.herokuapp.com/players/:id`

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 123759,
    title: 'string',
    wins:1,
    losts:0
  })
}
```

Response:

```js
  [
    { 
       id: 123759, 
       name: 'string', 
       wins: 1, 
       losts: 0 
    }
  ]
```

## Contributing
  **Fara Akhatova**
- [GitHub](https://github.com/Fakhatova)
- [LinkedIn](https://www.linkedin.com/in/fara-akhatova/)


