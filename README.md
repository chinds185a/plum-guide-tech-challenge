# The Plum Guide Tech Challenge - Jan 2020

## Info

The project was build using yarn workspaces, express, gatsby and json-graphql-server.

The project demostrates the use of Gatsby for the front end with a mixture of build time data fetching (using graphql) and client side data fetching using the fetch API.
The reason I opted for this approach was to show the flexibility of gatsby, which most would presume is only good for rendering fully static sites. The page you asked me to build show some content which is probably mostly static (the plum guide review, reviewer, the photos the home featurs etc) and some which is potentially more dynamic, the costs of rental, the highlighted/related homes etc.

With this in mine the home page is compiled out build time using data from the local graphql endpoint, the when the react components render on the browser the fetch api kicks in to load gthe more dynamic cotent. Giving a super fast page (as most of statically rendered) with some dynamic components that can be updated in real time as the dat on the api changes.

## Want to see it in action?

```
git clone git@github.com:chinds185a/plum-guide-tech-challenge.git
```

or

```
git clone https://github.com/chinds185a/plum-guide-tech-challenge.git
```

```
cd plum-guide-tech-challenge
```

```
yarn install
```

```
yarn start
```

The new page will be avaiable [localhost:8000/kensington_church_street_vii/](http://localhost:8000/kensington_church_street_vii/)

## Local Setup

### Install dependencies

```
yarn install
```

### Running the frontend application

```
yarn application
```

The Gatsby frontend will starrt on port `8000` and will be avaiable at `http://localhost:8000`

### Running the graphql server

```
yarn server
```

The server will start on port `3000` and will be avaialble at `http://localhost:3000/graphql`

#### Example Queries

#### Viewing all homes

```
{
  allHomes {
    id
    name,
    guests
    Highlights
  }
}
```

#### Viewing a single home

```
{
  Home(id: 1) {
    id
    name,
    guests
    Highlights
  }
}
```
