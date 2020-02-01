# The Plum Guide Tech Challenge - Jan 2020

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
