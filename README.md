# H2S Student Management App

This app will help manage Hack High School student check in and daily reports. This app was orginally built for the Build the Bay Hackathon, and is now being updated for actual use with Hack High School. This document is meant to provide guidance for developers. _User instructions_ can be found [here](./.github/USER_INSTRUCTIONS.md).

## Getting Started

### Prerequisites

- [Node](https://nodejs.org/en/)

_If you need to upgrade / downgrade your Node Js version, you can use [nvm](https://github.com/creationix/nvm)_

### Installing & Starting

In order to run the app in development you must also be running the development server.

_In h2s-App_

```
npm install
npm run dev
```

_In h2s-api_

```
npm install
npm run start
```

_Running_ `npm start` _will serve the most recent build using the hosted API_

## Contributing

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.MD) for details on how to best get involved, and the process for submitting pull requests to us.

## Deployment

Our API is deployed using [Heroku](https://heroku.com/). Any changes made on the `master` branch are tested through [Travis CI](https://travis-ci.org/), passing builds are automatically deployed.

## Built With

> [React](https://reactjs.org/)  
> [Material-UI](https://material-ui.com/)  
> [Firebase](https://firebase.google.com/)

### Additional Libraries

> [axios](https://github.com/axios/axios)  
> [React Router](https://reacttraining.com/react-router/)  
> [Moment Timezone](http://momentjs.com/timezone)

## Authors

- **[Donald Stolz](https://donstolz.tech/)** - Intial work & design
