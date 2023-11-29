import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Hero from './hero';
import Card from './card';
import CardContainer from './card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


function App(){
  return (
    <div className='app-container'>
    
        <Joke
            punchline = 'Its hard to explain puns to kleptomaniacs beaucse they always tha ehins literally.'
            isPun = { false } 
            upVotes = { 20 }
            downVotes = { 5 }
        />

        <Joke
            setup = 'I got my daughter a fridge for her birthday.'
            punchline = 'Its hard to explain puns to kleptomaniacs beaucse they always tha ehins literally.'
            isPun = { true } 
            upVotes = { 24 }
            downVotes = { 15 }
        />

        <Joke
            setup = 'How did the hacker escape the police?'
            punchline = 'He just ransomware!'
            isPun = { false }
            upVotes = { 30 }
            downVotes = { 8 }
        />

        <Joke 
            setup = 'Why dont pirates travel on mountain roads'
            punchline = 'Scurvy.'
            isPun = { true }
            upVotes = { 30 }
            downVotes = { 99 }
        />

        <Joke 
            setup = 'Why do bees stay in the in the hive in the winter?'
            punchline = 'Scurvy'
            isPun = { true }
            upVotes = { 30 }
            downVotes = { 65 }
        />

    </div>
  );
}

function Joke(props){
  return (
    <div className="jokeContainer">
        {props.setup && <h3 style={{fontWeight:'bold'}}>Setup: { props.setup }</h3>}
        <p className='punchline-text'>Puchline: { props.punchline }</p>
        <div className='vote-cont'><i className="fa-solid fa-thumbs-up"></i> { props.upVotes }</div>
        <div className='vote-cont vote-margin'><i class="fa-solid fa-thumbs-down"></i> { props.downVotes }</div>
        {props.isPun && <i className="fa-regular fa-star ispan"></i>}
        <hr></hr>
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



//Main Project 
    {/* <Header />
        <Hero />
        <CardContainer /> */}
