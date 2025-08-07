# Amazon-Clone E-commerce Full-Stack project
## Using Firebase and Stripe

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

To run the backend app: 

'firebase emulators:start' - in git bash

-----------------------------------------------------

Progress notes:

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
	- Item Quantity;
	- Footer
	- Home styling

- Payment page
	- Styling and reusing the checkoutProducts

- Payment Processing (Part 8)
	- Stripe setup
		- npm install @stripe/stripe-js
		- npm install @stripe/react-stripe-js
		- Upgrading the firebase's plan to blaze
		- Creating a Stripe account and getting the api publishable key (stripe.com)
	- CardElement code;
	- Installing axios (npm install axios): popular fetching library. Its more easier than js fetch api
	- Backend Cloud Functions ()
		- firebase init -> Functions -> Js -> Eslint (yes) -> dependencies (yes)
		- cd functions
		- npm install express
		- index.js
		- npm install cors
		- npm install stripe
		- firebase emulators:start

- Firebase Database setup
	- Orders.js
	- Pushing the Order into the database
	- Error - had to update payment.js database stuff to v9 stuff
	- npm install moment
	- Error: had to update index.js (in function) for the secret api. Had to cd inside function and redeploy (firebase deploy --only functions), and execute the backend app;
	- Error: had to enable Google's Firebase Extensions API (https://console.cloud.google.com/apis/api/firebaseextensions.googleapis.com/metrics?project=clone-a3fa0&inv=1&invt=Ab4XLg) so I can redeploy;
	- Error: Had to enable another one (https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com)

- Orders and Order;

- Payment page UI finishes;

- Deploying the functions - In the functions folder - (firebase deploy --only functions) (firebase needs to have the blaze plan. Otherwise itll fail);
	- Error: Had to alter eslintrc.js in functions folder in order to deploy
	- Error: The link didn't worked. Had to manually delete and re-doit;

- Taking the url from the functions tab in the console link (https://console.firebase.google.com/project/clone-a3fa0/overview) and pasting in axios.js

- 'npm run build'

- 'firebase deploy --only hosting' (hosting=front, functions=back)
- firebase init -> hosting -> build -> y -> y

-----------------------------------------------------

Stuff:
- BEM Convention?
- Props in React
- React Router DOM
- Optional Chaining
- Selectors
- BEM and SASS
- Renderização condicional: Em vez de manipular o DOM diretamente com style.display, uso renderização condicional no JSX.
- Hooks???
- Next project try to use Paypal instead of stripe.

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

It was used the MERN Stack frameworks to build the whole full stack project
- MongoDB;
- Express JS;
- React JS;
- Node JS.

(There are differences between MERN, MEAN and MEVN)

This stack allows developers to use JavaScript for both the front-end (user interface) and back-end (server-side logic and database interaction), streamlining development and enabling the creation of dynamic, data-driven applications. 


Saas - Software as a Service

---

Hirearchy:
- src folder = app (front-end) = It has its own node modules, package.json and index (liek another project)
- functions folder = full back-end (cloud functions)

---

Stripe API Keys: https://dashboard.stripe.com/test/apikeys

Deployed front-end app: https://clone-a3fa0.web.app

	- Make sure to build after updates ('npm run build')
	- And deploy ('firebase deploy')

If you want to use real payments, just go to stripe and disable the test option. And replace the api keys with the new live one provided. (PS: Dont do this)

Stripe's keys locations on the app:
- Stripe's public api key is in App.js;
- and Stripe's Secre api key is in index.js (function).

---

Initialization:

For testing:
	- npm start (front);
	- firebase emulators:start (back)