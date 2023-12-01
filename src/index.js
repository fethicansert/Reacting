import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Hero from './hero';
import jokesData from './datas/jokesData';
import Joke from './Joke';
import cardData from './datas/cardData'
import Card from './card';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



function App(){
  // const jokes = jokesData.map((joke) => <Joke setup = {joke.setup} punchline = { joke.punchline }/>);
  const cardDataz = cardData.map( (data) => {
  
    return <Card  
                  key = { data.id }
                  image= { data.image } 
                  rating = { data.stats.rating } 
                  review = { data.stats.review }
                  country = { data.country }
                  title = { data.title } 
                  price = { data.price }
                  openSpots = { data.openSpots }
                  />
  });
  console.log(cardDataz);

  return (
    <div className='app-container'>
      <Header />
      <Hero />
      <div className='card-container'>
        { cardDataz }
      </div>
    </div>
  );
}


//Notes

//Diffrent stlyle of displaying or non displaying element
/* <h1 style={ {display : props.setup ? 'block' : 'none'} }></h1> */

{/* <i  style={ {display: props.isPun ? 'block' : 'none'} } className="fa-regular fa-star ispan"></i> */}

// <h1 style={ { display : props.setup ? 'block' : 'none'}}>Setup : { props.setup }</h1>


// function UserGreetings(props){
//   return <h1>Welcome back {props.userName ? props.userName : 'UserName'} !</h1>
// }


// function GuestGreetings(props){
//   return <h1>Please sign up.</h1>
// }


// function Greetings(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreetings userName='Fethi Can Sert'/>
//   }
//   return <GuestGreetings />
// }


{/* <Greetings isLoggedIn={false}/> */}


