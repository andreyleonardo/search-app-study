# GYG Take Home, Search Application

## About the solution

This app has been build using [ReactJS](https://reactjs.org) and libraries like [Babel](http://babeljs.io) for code compile (some [ECMA](https://www.ecma-international.org/memento/tc39.htm) features not available for browsers), [React-Intl](https://github.com/yahoo/react-intl) for i18n, [Flexboxgrid](https://evgenyrodionov.github.io/flexboxgrid2/) for help with grid system only and [Webpack](http://webpack.js.org) for development boilerplate and build tool.

For quality it's using [ESlint](http://eslint.org) with [Airbnb](https://github.com/airbnb/javascript) rules for code style, [Jest](http://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme) for unit and integration test and [NightwatchJS](http://nightwatchjs.org) with [Chromedriver](https://www.npmjs.com/package/chromedriver#author) for functional test.

This application does not have an standalone server since wasn't mandatory, I thought to include a [GraphQL](http://graphql.org/) server but I stepped back to keep the enforcement in the frontend app, so the stub data sent for this exercise is hardcoded as a [JSON](https://www.json.org) file being read when the application loads.

I've included a [lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum) description to the stub data to help to display the 'tour details'.

It's a search app that looks at the data for tours that matches with the user input.
The application has a header with page title and language selection.
A search bar for user input and it works by typing the query and the results are displayed in real time while the query is being composed.
The app does not search if a query with less than 3 character is typed.
The results are displayed in card formats with a picture (it's random copyright free pictures that I got from [LoremPicsum](https://picsum.photos)), title, rating, price and special offer tag when it's present.
The results are scrollable when it's applied.
It's possible to click at the results and the card expands to display the tour description.
There are 2 behaviors for results depending o screen size.
If it's a desktop size view, a bigger picture will be part of the tour details. If it's a mobile view the picture will not be part to save some screen space and helps the user experience.

My project architecture uses a domain approach ([DDD](https://en.wikipedia.org/wiki/Domain-driven_design) like) to organizes the components, keeping always the components composition more close than possible and inside the domain that it's part of.
Every component has it's own test and style (when applicable) to make easier to navigate through the app's files.

For style organization I decided to go with [BEM](http://getbem.com/introduction/) instead of, for example [Atomic](https://github.com/nemophrost/atomic-css), because I've been working with BEM for a while so I feel more comfortable with this methodology. 

There's a tests folder where it's kept the integrations, functional test and test utils.

All other folders are part of [create-react-app](https://github.com/facebook/create-react-app) to run the project.

## Requirements

To have this app up and running you'll need to have [Node](http://nodejs.org) >= 10.5 installed. I strongly recommend you to install [NVM](https://github.com/creationix/nvm) if you already doesn't have it.

If you already have NVM installed just run:

### `nvm install`

NVM will get the version set at the `.nvmrc` file, install (globally) and set the Node version locally.

With Node version set it's time to install the necessary packages from `package.json` file.
For this will have to run:
### `npm install`

In case you, like me, uses `yarn`, just have to execute:

### `yarn`

## Running the Application

### `npm start or yarn start`

The app will be accessible by [http://localhost:3000](http://localhost:3000).

## Running Unit and Integration Tests

Unit and integration test are executed together (sorry =/).
Every component has at least 1 snapshot test and when applicable unit tests to test component behavior.
There are 2 integration tests, App and SearchResult component, where the whole component is mounted to test the behavior between a set of dependents components.

So you just have to execute:

### `npm test or yarn test`

This command will execute the tests in `watch` mode, that means any file or test change executes the tests.
Probably no tests will run here, so you should press `a` to run all tests.

It's possible to run all tests with coverage report. For this you'll execute:

### `npm run test:coverage or yarn test:coverage`

## Running Functional Tests

Now the fun part, functional tests!
I've added a few functional steps to validate the user flow and guarantee that at least the happy path is not broke.
You'll see 2 user journey here, one with browser in mobile friendly resolution and another one in desktop resolution.
Both journeys are doing exactly the same steps just a few asserts could be different (like an image that is not present in one or other).

These test are setup to run in [Chrome](https://www.google.com/chrome/) only, so if you don't have it, it's a requirement to execute.

To run these tests you'll need to stop Webpack before go ahead.

So if the app is running it's your chance to stop now before proceed...

I'm serious here, I don't want you thinking that my functional tests are not working properly! =~

To execute the tests just run:

### `npm run test:functional or yarn test:functional`


## Are you still here?

Ok! Not that it's not an important part but it's probably not the most necessary to have the app running.

There is a last script that you could execute. It's possible to create a production build to deploy it anywhere you want.

For this you just have to execute:

### `npm run build or yarn build`

## Now it's over, I promise!

So, thank you for giving a look at my code and any feedbacks please send me, I'll be glad to receive it.

See ya!
Thanks!
