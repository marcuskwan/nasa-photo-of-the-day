# Module Project: Component Side Effects- NASA APOD

This will be a two-module project. In it you will consume the NASA API to fetch the "Astromony Photo Of The Day" or APOD. Once you fetch the data, you will build a few components that will render different pieces of data in your interface. After the second module (in the [DAY_TWO_README.md](DAY_TWO_README.md) file) you will re-style your app using one of the libraries you learn.

## Instructions

---

Read these instructions carefully. Understand exactly what is expected before starting this project.

## Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

## Description

In this project you will build out a calculator using React. You have been given a design file to follow, and a data file to include for your button components to display.

## Project Set Up

---

This project was put together using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

- [x ] Create a forked copy of this project.
- [ x] Add your team lead as collaborator on Github.
- [x ] Clone your OWN version of the repository in your terminal
- [x ] CD into the project base directory `cd component-calculator`
- [x ] Download project dependencies by running one of these two commands `yarn` or `npm install`
- [x ] Using the same command tool (yarn or npm) start up the app using `yarn start` or `npm start`
- [x ] Create a new branch: git checkout -b `<firstName-lastName>`.
      Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ x] Submit a Pull-Request to merge Branch into master (student's Repository). **Please don't merge your own pull request**
- [ x] Add your team lead as a reviewer on the pull-request
- [ x] Your team lead will count the project as complete by merging the branch back into master.
- [x ] Do your magic!

# _Project - NASA APOD - Part I_

x- This is a really fun project, and one to show your family and friends when you've finished.
x- You will be starting from scratch and building the entire app
x- You don't have any design specs to follow for this project, so you may want to start by building a basic wireframe first. Make it simple at the beginning, since you don't know what data you'll be getting back from NASA
x- Once you get the data back, there may be more than you expected, or less than you expected, so your design plans may change. That's totally fine, and very normal in the real world. Just make the proper adjustments and move forward!

## Directions

**STEP 1 - Planning**

x- If you want, this is the time to make a simple design spec (look up "simple wireframes" to see and example)
x- Once you have a design plan in mind, break down the designs into individual components
x- Plan which components will hold state, what data each needs from props (if any), and where you will be making your data fetch
x- Now it's time to jump into the code!

**Step 2 - File structure**

x- Take a look at what you planned and create the folders and files you need for each component
x- Leave most of them blank for now - You need to get your data from the API before you can really get these built

**Step 3 - Fetching the Data**

x- In `App.js` (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA
x- Add an effect hook to handle the API call side effect
- Go to the [NASA APOD API docs](https://api.nasa.gov/api.html#apod) and read through the docs to see how to make the API call
x- You don't _need_ an API key, but feel free to get one if you'd like
x- Using the endpoint given, fetch the data using `axios`
x- In your `.then()` make sure to console.log the response so you can get your first look at the data 😃
x- Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY:

DEMO KEY rate limits:

> Hourly Limit: 30 requests per IP address per hour

> Daily Limit: 50 requests per IP address per day

_Note: if the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR just fetch the APOD from a different date by adding this to the back of the API endpoint: `&date=2012-03-14`_

**STEP 4 - Adding the Data to State**

x- Once you have made the call correctly, and logged the data, add the data to the state property you built

**STEP 5 - Display the Data**
Now is the time to build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.

## _MVP Requirements:_

x- Use the effect hook to fetch the APOD data when the component mounts
x- Display the APOD data in different components that are composed together to build your UI

## Pro Tips:

x- You may run into an error where your components try to access object properties before your data is finished being fetched - ie. `Cannot read property 'url' of undefined`. This means that the data you passed as props is undefined, when you were expecting it to be an object. You can fix this by simply adding something like this to any component that needs to read data from your state object:

```js
// Display a loading message while the data is fetching
if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
  {* your normal JSX here *}
);
```

- Read through the API docs carefully. You will read through technical docs a lot as a developer, so start now to try and understand them.

## Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

- Notice the optional query param `date`? You can pass a different date in your url like this `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14` to get the APOD from a different date. Add a date dropdown that allows you to select a different date and see that APOD. This will be quite a bit of work, but it will be a fantastic exercise to go through a little more complicated logic and interaction in your app. This is also a very common type of interaction, so it would be good to try this out
- Make another app that consumes another one of NASA's other APIs listed on the same website


 ## Part II - [Advanced Styling Techniques](DAY_TWO_README.md)
