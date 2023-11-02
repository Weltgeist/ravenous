# Ravenous 

## Project description
![image](https://github.com/Weltgeist/ravenous/assets/19942558/f320fab1-b395-4f25-9adc-41f5fae65144)



### The purpose of your project 
Ravenous is a web app interact with the YELP Api. You can use it to lookup restaurants located anywhere. Using a variaty of additional options, you can sort your search by best match, highest rated and most reviewed. 

This project is a solution to the open Ravenous project on codecademy.

### Technologies used

- React Create App - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- React - Used to build web application
- React Boostrap - Used to style multiples front-end elements.
- Express - Used to make 2nd server, it's servers as a authentification node between REST request between my React App & the YELP Api. It solves YELP cors autification dependency.
- Fetch & Cors -  Used them for HTTP Requests and Responses & Authentication.
- Javascript - Core programming languages
- Css - As I was new to React Boostrap, I used css to style add additional styling to react elements, when I couldn't figure how to do it from Boostrap.

### Challenges

The project was divided in 4 parts:
1. - Creating project & Components - Focused on making a static site using all react component, splited my page into a business, business list & search bar component. Also made a dummy business object. Challenge: Never used React Boostrap, but I needed a way to style everything, so I tried it and found it was not that hard to use, given my current React knowledge.
2. - Passing information - Refactored a lot of the object and started using props. Challenge: I also needed a way to display a array of business in a grid layout. So I used lodash ''chunk'' function and React boostrap Grid.
3. - Setting up search bar state - I had to set-up states and event handlers and fake a search by printing to the console and giving alerts when interacting with the search bar, filter selection and buttons. Challenge: I quickly realise the search bar component was too big, I had to use and learn about statefull and stateless items and split presentation components & container components.
4. - Interacting with YELP API - In this section I read on YELP Api and added the fetch call to retrive data in the search component and add it to the App component state, so it can send the business data to business list and eventually business as a prop. Challenge: I had no knowledge of Yelp CORS authentification issue, so I had to do a bit of research to find a solution and learned about express and intermediary autentification server. 

### Future Work
(A big maybe!)
- I could add more styling, since it's my 1st crack at React Boostrap. 
- I may add a feature to redirect to the business when clicking cards.
- I could integrate another api and add a list of recipe depending on your search, I would call it a home option, If you don't want to eat out.
- I could add a tab to promote minority business, women owned business, lgbtq owned business, black owned business or even Resident Evil Fanatics owned business. Not sure, how the Yelp Api work in the back-end, but the search option seem vast.

## How to install & run project

clone the project
```
git clone https://github.com/Weltgeist/ravenous.git
```

Add a .env to the root ./ravenous folder and the ./ravenous/server folder 
Get a Yelp API key. Ref: https://elfsight.com/blog/how-to-get-and-use-yelp-api/
Add your yelp react api key to the .env files.
```
REACT_APP_YELP_API_KEY = ******
```


start the ravenous react web api aka web server #1
```
npm start
```


start the express autentification server aka web server #2. Make sure port 3001 is used. If not change in code accordingly.
```
node ./server/server.mjs 
```


## How to use project

- Add a serch term.
- Add a location.
- Choose a option between best match, highest rated and most reviewed.
- Click the button.
- See results.


## Aknowledgement 
Thx [Felipe Gonçalves] (https://github.com/felpsg) for providing a solution and detail instruction to fix the CORS issue.
Thx Codecademy for the awesome challenging project!




