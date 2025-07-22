# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

Notes:

- firebase Setup;
- installing the react template;
- copy/paste snippets from firebase (firebase.js)
- Homepage
	- Deleting the default html and css settings;
	- Building the Header Component (Header js and css);
	- Building the Home Component (Home js and css)
	- PS: Installed the ES7 React Extension for the "rfce" (to render a default layout for every component)
	- PS: Installed Material UI icons
- Checkout
	- Subtotal
		- useContext/Context API
	- CheckoutProduct
- Login page
- Firebase setup (technically it shouldve chronologically been created here)
	- npm install firebase (installing firebase into the project)
	- (had an error here from installing firebase and had to reinstall all the dependencies. Had to update the firebase.js to a new version v9 syntax that uses modular imports [as mentioned in firebase site])
- Deploying the app 
	- 'npm i -g firebase-tools' (had to add a new variable into path system)
	- 'firebase login'
	- 'firebase init'
	- 'npm run build'
	- 'firebase deploy'
- (Homework) Styling the app to my preferences
	- Installing the flip move animation - npm i -S react-flip-move


Stuff:
- BEM Convention?
- Props in React
- React Router DOM
- Optional Chaining
- Selectors
- BEM and SASS

- Had to downgrade react router to v6
npm install react-router-dom@6.22.1


- Hard Coded vs Dynamic
- Flexbox
- React's state management
	- State variables

### Libraries and Components
- Material UI
- React JS
- React Router DOM
- React currency format = "npm i react-number-format"

- React Context API / REDUX (The data layer)

Data Layer: Its an important layer for our frontend so that every component can have access to the data (putting data in & out)

Initial State: How the data layer look in the beginning;
Reducer: How we manipulate with the data layer.
	- How we put and pull the data from the data layer.

---

Deployed website: https://clone-a3fa0.web.app/

	- Make sure to build after updates